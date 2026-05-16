import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Analytics State
  const activeUsers = new Map<string, number>(); // clientId -> lastPulse
  const clickAnalytics = new Map<string, number>(); // label -> count

  // Developer Logging Helper
  const sendDevLog = async (title: string, message: string, color: number = 0x3B82F6) => {
    const devWebhook = process.env.DISCORD_DEV_LOGS_WEBHOOK_URL || "https://discord.com/api/webhooks/1505224175206273094/vo1Ai_jiabY1hOBB3m-Ip9_I6Ithf_71ERh6gTLLh9DhYICsjxnbpNgarprYYHrIMvZh";
    try {
      await fetch(devWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "MRZ Dev Console",
          avatar_url: "https://cdn.discordapp.com/attachments/1504848109484638401/1504874595939913768/1778852768140.png?ex=6a093bee&is=6a07ea6e&hm=4707ecee220e57bb77e1acf699058e0de90277754b48fe8794b917f01c91f9f8&",
          embeds: [{
            title: `🛠️ ${title}`,
            description: message,
            color: color,
            timestamp: new Date().toISOString(),
            footer: { text: "MRZ Developer Internal Logs" }
          }]
        })
      });
    } catch (err) {
      console.error("[Dev Log] Failed to send log:", err);
    }
  };

  // API routes
  app.get("/api/trigger-status", async (req, res) => {
    console.log("[Trigger] Manual status update requested");
    try {
      await sendStatusUpdate();
      res.json({ success: true, message: "Status update triggered. Check server logs and Discord." });
    } catch (err) {
      res.status(500).json({ success: false, error: err instanceof Error ? err.message : String(err) });
    }
  });

  app.post("/api/heartbeat", (req, res) => {
    const { clientId } = req.body;
    if (clientId) {
      activeUsers.set(clientId, Date.now());
    }
    res.json({ success: true });
  });

  app.post("/api/log-interaction", async (req, res) => {
    const { message, color: incomingColor, label } = req.body;
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    // Track analytics
    if (label) {
      clickAnalytics.set(label, (clickAnalytics.get(label) || 0) + 1);
    }
    
    console.log(`[Interaction] Message: ${message}, Color: ${incomingColor}, Label: ${label}`);

    if (!webhookUrl) {
      console.warn("DISCORD_WEBHOOK_URL is not set");
      return res.status(200).json({ success: true, message: "Webhook not set, skipping" });
    }

    // Default to Amber if no valid color provided
    const displayColor = typeof incomingColor === 'number' ? incomingColor : 16500516;

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "MRZ Web Logs",
          avatar_url: "https://cdn.discordapp.com/attachments/1504848109484638401/1504874595939913768/1778852768140.png?ex=6a093bee&is=6a07ea6e&hm=4707ecee220e57bb77e1acf699058e0de90277754b48fe8794b917f01c91f9f8&",
          embeds: [
            {
              title: "MRZ Site Activity",
              description: message || "New interaction on MRZ Site!",
              color: displayColor,
              timestamp: new Date().toISOString(),
              footer: {
                text: "MRZ Official Site",
              },
            },
          ],
        }),
      });

      if (response.ok) {
        res.json({ success: true });
      } else {
        res.status(response.status).json({ error: "Failed to send to Discord" });
      }
    } catch (error) {
      console.error("Error sending webhook:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Background Job: Status Updates (Every 1 minute)
  const sendStatusUpdate = async () => {
    let statusWebhook = process.env.DISCORD_STATUS_WEBHOOK_URL;
    const fallbackUrl = "https://discord.com/api/webhooks/1505209419426693130/pHsRoXSVYDXYHjr69ZoBZJ0ujQWpHt6hkSZP_oyAtl8S0KCKoeuxDs32M-e25RfgH3G0";
    
    if (!statusWebhook || statusWebhook.trim() === "" || statusWebhook.length < 20) {
      statusWebhook = fallbackUrl;
    }
    
    console.log(`[Status Job] Running... URL Start: ${statusWebhook.substring(0, 48)}... Active: ${activeUsers.size}`);

    // Cleanup old users (last heartbeat > 90s ago)
    const now = Date.now();
    let cleanedCount = 0;
    for (const [clientId, lastPulse] of activeUsers.entries()) {
      if (now - lastPulse > 90000) {
        activeUsers.delete(clientId);
        cleanedCount++;
      }
    }
    if (cleanedCount > 0) {
      console.log(`[Status Job] Cleaned up ${cleanedCount} inactive clients.`);
      sendDevLog("Session Cleanup", `Automatically purged **${cleanedCount}** inactive user sessions.`, 0xEF4444);
    }

    const onlineUserCount = activeUsers.size;
    const analyticsEntries = Array.from(clickAnalytics.entries())
      .map(([label, count]) => `> **${label}**: \`${count}\` clicks`)
      .join("\n") || "_No user actions tracked yet._";

    const payload = {
      username: "MRZ Web Status",
      avatar_url: "https://cdn.discordapp.com/attachments/1504848109484638401/1504874595939913768/1778852768140.png?ex=6a093bee&is=6a07ea6e&hm=4707ecee220e57bb77e1acf699058e0de90277754b48fe8794b917f01c91f9f8&",
      embeds: [
        {
          title: "```💛 LIVE``` MRZ Web Status",
          description: "### 📡 Infrastructure Pulse\n> Real-time monitoring for the **MRZ Official** ecosystem.",
          color: 0xFBBF24, // Amber
          fields: [
            {
              name: "🛰️ Network Status",
              value: "```diff\n+ System: OPERATIONAL\n+ Latency: STABLE\n```",
              inline: true
            },
            {
              name: "👥 Presence",
              value: `**${onlineUserCount}** active users`,
              inline: true
            },
            {
              name: "📊 User Engagement (Session)",
              value: analyticsEntries,
              inline: false
            }
          ],
          thumbnail: {
            url: "https://cdn.discordapp.com/attachments/1504848109484638401/1504874595939913768/1778852768140.png?ex=6a093bee&is=6a07ea6e&hm=4707ecee220e57bb77e1acf699058e0de90277754b48fe8794b917f01c91f9f8&"
          },
          image: {
            url: "https://cdn.discordapp.com/attachments/1504848109484638401/1505220219956756590/InShot_20260516_201554122.jpg?ex=6a09d512&is=6a088392&hm=a26413f93fd2a87d7a5a4c0f631954cf88bc65b51e8e7c6a2853207db7f9197b&"
          },
          timestamp: new Date().toISOString(),
          footer: {
            text: "MRZ Management System • Auto-refreshing",
            icon_url: "https://cdn.discordapp.com/attachments/1504848109484638401/1504874595939913768/1778852768140.png?ex=6a093bee&is=6a07ea6e&hm=4707ecee220e57bb77e1acf699058e0de90277754b48fe8794b917f01c91f9f8&"
          },
        }
      ],
    };

    try {
      console.log("[Status Job] Sending payload to Discord...");
      const response = await fetch(statusWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        console.log(`[Status Job] Success! Status: ${response.status}`);
      } else {
        const errText = await response.text();
        console.error(`[Status Job] Discord Error (${response.status}): ${errText}`);
        
        // Try fallback to simple message if embed fails
        if (response.status === 400) {
           console.log("[Status Job] Attempting simple message fallback...");
           await fetch(statusWebhook, {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({ content: `🚀 **MRZ Online** | Users: ${onlineUserCount} | Status: STABLE` })
           });
        }
      }
    } catch (err) {
      console.error("[Status Job] Fetch failure:", err);
    }
  };

  // Immediate update on start, then every minute
  setTimeout(() => {
    sendStatusUpdate();
    sendDevLog("System Startup", "MRZ Web Server has successfully initialized and is now monitoring traffic.", 0x10B981);
  }, 2000);
  setInterval(sendStatusUpdate, 60000);

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
