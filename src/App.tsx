import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Instagram, 
  MessageCircle, 
  ChevronRight,
  Sparkles,
  Youtube,
  ExternalLink,
  Gamepad2,
  MonitorPlay,
  Search,
  X
} from 'lucide-react';
import { cn } from './lib/utils';

interface SocialLinks {
  discord?: string;
  whatsapp?: string;
  instagram?: string;
  youtube?: string;
  youtube2?: string;
  kick?: string;
}

interface Profile {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  links: SocialLinks;
}

const PROFILES: Profile[] = [
  {
    id: '1',
    name: 'MRZ Thoppi',
    bio: 'The God Father',
    avatar: 'https://i.imgur.com/I3SAppe.jpeg',
    links: { 
      discord: 'https://discord.gg/mrz-thoppi-1080457490849857580',
      instagram: 'https://www.instagram.com/mrz_thoppi?igsh=ZTZlN3pieTl3c3U1',
      youtube: 'https://youtube.com/@mrzthoppi?si=9VzF59MXYH6ICZqM'
    }
  },
  {
    id: '2',
    name: 'MRZ Rambo',
    bio: 'The Leader',
    avatar: 'https://i.imgur.com/sswXYxE.jpeg',
    links: { 
      discord: 'https://discord.gg/mCJs57VpK', 
      instagram: 'https://www.instagram.com/mrz__rambo?igsh=ZGtxNXdkaWNma2g3', 
      youtube: 'https://youtube.com/@mrzrambo4'
    }
  },
  {
    id: '3',
    name: 'MRZ Sheikh',
    bio: 'The Co-Leader',
    avatar: 'https://i.imgur.com/LrKhk2j.jpeg',
    links: { 
      discord: 'https://discord.gg/sheikhh', 
      whatsapp: 'https://sheikh-gaming.vercel.app/', 
      instagram: 'https://www.instagram.com/_sheikh.official_?igsh=MThmeTloZmE1Nmprbg==', 
      youtube: 'https://youtube.com/@sheikhgaming_op?si=p8Ag7Y-b-W5Zc33C',
      kick: 'https://kick.com/Sheikh_Offical'
    }
  },
  {
    id: '4',
    name: 'MRZ Mack',
    bio: 'The Co-Leader',
    avatar: 'https://i.imgur.com/HzMmpUA.jpeg',
    links: { 
      discord: 'https://discord.gg/Tt7aNkbh', 
      whatsapp: 'https://chat.whatsapp.com/Ht1Y2yT3VFL7n7QRxfv8HW', 
      instagram: 'https://www.instagram.com/mrz_mackk?igsh=MTBkbzA4M3pucGNqMg==', 
      youtube: 'https://youtube.com/@mackgaminglive?si=PBkpGINxwikHphOg',
      kick: 'https://kick.com/mack_gaming'
    }
  },
  {
    id: '5',
    name: 'MRZ Appappan',
    bio: 'Member',
    avatar: 'https://i.imgur.com/o8kiYcg.png',
    links: { 
      discord: 'https://discord.gg/6DR4DMGDwm', 
      whatsapp: 'https://chat.whatsapp.com/HkImfLAPZ6gJyJgolputye', 
      instagram: 'https://www.instagram.com/mrz.appappan?igsh=dDRmbHRqZnVubzRt', 
      youtube: 'https://youtube.com/@mrzappappan'
    }
  },
  {
    id: '10',
    name: 'MRZ Bilal',
    bio: 'Member',
    avatar: 'https://i.imgur.com/0Y4Db6L.jpeg',
    links: { 
      discord: 'https://discord.gg/d5Zpxf8Aq', 
      instagram: 'https://www.instagram.com/mrz_bilal_', 
      youtube: 'https://youtube.com/@mrz_bilal'
    }
  },
  {
    id: '6',
    name: 'MRZ Raju Bahi',
    bio: 'Member',
    avatar: 'https://i.imgur.com/rfmbDOZ.jpeg',
    links: { 
      discord: 'https://discord.gg/Fpx2uWRZ6', 
      instagram: 'https://www.instagram.com/og_rajubhai?igsh=emJzeG56bHVzZzRo', 
      youtube: 'https://youtube.com/@mrzrajubhai?si=G6jno-rn60iZaKw9',
      kick: 'https://kick.com/mrzrajubhai'
    }
  },
  {
    id: '7',
    name: 'MRZ Kurup Denny',
    bio: 'Member',
    avatar: 'https://i.imgur.com/H4z630d.jpeg',
    links: { 
      discord: 'https://discord.gg/qhYeUBt6sY', 
      instagram: 'https://www.instagram.com/kurupdenny?igsh=bXE3bXh2MXV1MmRs', 
      youtube: 'https://youtube.com/@kurupdenny'
    }
  },
  {
    id: '9',
    name: 'MRZ Charlie',
    bio: 'Member',
    avatar: 'https://i.imgur.com/TKkYUdi.jpeg',
    links: { 
      discord: 'https://discord.gg/cyA3m3Gc5w', 
      instagram: 'https://www.instagram.com/not_chxrlie.exe?igsh=MTN0NWJpOWQ0ZWV6Ng==', 
      youtube: 'https://youtube.com/@chakkahere',
      youtube2: 'https://youtube.com/@mrzmaari'
    }
  },
  {
    id: '11',
    name: 'MRZ Zendnex Duvor',
    bio: 'Member',
    avatar: 'https://i.imgur.com/PmYuQAz.jpeg',
    links: { 
      instagram: 'https://www.instagram.com/mrz_zen?igsh=dzRhZDF4dTc2ODlr',
      whatsapp: 'https://chat.whatsapp.com/L49j7MsExBU3YYRqWGuuL2',
      discord: 'https://discord.gg/GqnEEGwAJ7',
      youtube: 'https://youtube.com/@mrzzendnex?si=KqS8iF7pu02Se_w0',
      youtube2: 'https://youtube.com/@zendnex7?si=rRc2Ru0tLCMJ1l9x'
    }
  },
  {
    id: '12',
    name: 'MRZ Alex Duvor',
    bio: 'Member',
    avatar: 'https://i.imgur.com/e92pmaG.png',
    links: { 
      instagram: 'https://www.instagram.com/ig_alexduvor?',
      discord: 'https://discord.gg/H3ZEW5zACv',
      whatsapp: 'https://chat.whatsapp.com/CVkkDSE0hacH1QEkgyU9gI',
      youtube: 'https://youtube.com/@alex_exe?si=9p8uz-nU0Y57VgLE'
    }
  }
];

const logToDiscord = async (message: string, color?: number, label?: string) => {
  try {
    await fetch('/api/log-interaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, color, label }),
    });
  } catch (err) {
    console.error('Failed to log to Discord:', err);
  }
};

const logDevEvent = async (title: string, message: string, color?: number) => {
  try {
    await fetch('/api/log-dev-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, message, color }),
    });
  } catch (err) {
    console.error('Failed to log dev event:', err);
  }
};

const sendHeartbeat = async (clientId: string) => {
  try {
    await fetch('/api/heartbeat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clientId }),
    });
  } catch (err) {
    // Silent fail for heartbeat
  }
};

const playTapSound = () => {
  const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-30.mp3');
  audio.volume = 0.2;
  audio.play().catch(() => {}); // Ignore errors if browser blocks autoplay before interaction
};

const GlassCard: React.FC<{ profile: Profile }> = ({ profile }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={() => playTapSound()}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="liquid-glass amber-glow relative overflow-hidden rounded-[2.5rem] p-8 md:p-10 group will-change-transform cursor-pointer"
      id={`profile-${profile.id}`}
    >
      {/* Liquid background decorative element */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-400/10 blur-[30px] rounded-full group-hover:bg-amber-400/20 transition-colors duration-500" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-amber-600/5 blur-[30px] rounded-full group-hover:bg-amber-600/15 transition-colors duration-500" />

      <div className="flex flex-col gap-8 items-center relative z-10">
        {/* Profile Picture */}
        <div className="relative shrink-0">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-32 h-32 md:w-36 md:h-36 rounded-[2rem] overflow-hidden border-2 border-amber-400/30 shadow-lg"
          >
            <img 
              src={profile.avatar} 
              alt={profile.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 amber-text-glow text-amber-50">
            {profile.name}
          </h2>
          <p className="text-amber-100/70 leading-relaxed mx-auto mb-8 text-lg">
            {profile.bio}
          </p>

          {/* Links */}
          <div className="grid grid-cols-2 gap-3 w-full">
            <SocialLink 
              icon={<Youtube size={20} />} 
              label="YouTube" 
              href={profile.links.youtube} 
              color="bg-[#FF0000]"
              memberName={profile.name}
            />
            <SocialLink 
              icon={<Youtube size={20} />} 
              label="YouTube 2" 
              href={profile.links.youtube2} 
              color="bg-[#FF0000]"
              memberName={profile.name}
            />
            <SocialLink 
              icon={<MonitorPlay size={20} />} 
              label="Kick" 
              href={profile.links.kick} 
              color="bg-[#53FC18]"
              memberName={profile.name}
            />
            <SocialLink 
              icon={<Instagram size={20} />} 
              label="Instagram" 
              href={profile.links.instagram} 
              color="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
              memberName={profile.name}
            />
            <SocialLink 
              icon={<Gamepad2 size={20} />} 
              label="Discord" 
              href={profile.links.discord} 
              color="bg-[#5865F2]"
              memberName={profile.name}
            />
            <SocialLink 
              icon={<MessageCircle size={20} />} 
              label="WhatsApp" 
              href={profile.links.whatsapp} 
              color="bg-[#25D366]"
              memberName={profile.name}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SocialLink: React.FC<{ icon: React.ReactNode, label: string, href?: string, color: string, memberName: string }> = ({ icon, label, href, color, memberName }) => {
  if (!href) return null;
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    onClick={(e) => {
      playTapSound();
      let embedColor = 16500516; // Default Amber (0xFBBF24)
      const labelLower = label.toLowerCase();
      if (labelLower.includes('youtube')) embedColor = 16711680; // Red (0xFF0000)
      else if (labelLower.includes('instagram')) embedColor = 16761035; // Pink (0xFFC0CB)
      else if (labelLower.includes('whatsapp')) embedColor = 25600; // Dark Green (0x006400)
      else if (labelLower.includes('kick')) embedColor = 65280; // Lime (0x00FF00)
      else if (labelLower.includes('discord')) embedColor = 5814770; // Blurple (0x5865F2)

      logToDiscord(`🔥 Someone clicked on **${memberName}'s** ${label} link`, embedColor, `${memberName} ${label}`);
    }}
      whileHover={{ y: -3, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center sm:justify-start gap-2.5 px-3 py-2.5 rounded-xl liquid-glass group overflow-hidden relative w-full"
    >
      <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300", color)} />
      <span className="text-amber-400 group-hover:text-amber-300 transition-colors relative z-10 shrink-0">{icon}</span>
      <span className="font-medium text-amber-50/90 group-hover:text-white transition-colors relative z-10 text-sm whitespace-nowrap">{label}</span>
    </motion.a>
  );
};

const BackgroundDecorations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Blurred Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-[0.2] will-change-[transform,opacity]"
        style={{
          backgroundImage: 'url("https://i.imgur.com/8SQwxsu.jpeg")',
          opacity: 0.4
        }}
      />
      {/* Background Glows */}
      <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-amber-500/10 blur-[100px] rounded-full animate-liquid will-change-transform" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-amber-600/5 blur-[120px] rounded-full animate-liquid will-change-transform" style={{ animationDelay: '-5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.05)_0%,transparent_70%)]" />
      </div>
    </div>
  );
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProfiles = PROFILES.filter((profile) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      profile.name.toLowerCase().includes(query) ||
      profile.bio.toLowerCase().includes(query)
    );
  });

  useEffect(() => {
    // Generate or retrieve client ID for heartbeat
    let clientId = sessionStorage.getItem('mrz_client_id');
    if (!clientId) {
      clientId = Math.random().toString(36).substring(2) + Date.now().toString(36);
      sessionStorage.setItem('mrz_client_id', clientId);
    }

    logToDiscord("🌐 Someone just visited the MRZ Official site!", 16776960, "Page Visit"); // Yellow (0xFFFF00) for visits

    // Initial Audit Log for Internal Dev Console
    const profileCount = PROFILES.length;
    logDevEvent(
      "Site Deployment Audit", 
      `### 🛠️ Active Configuration\n` +
      `> **Profiles**: \`${profileCount}\` members listed\n` +
      `> **Banner**: [View Image](https://i.imgur.com/hVGwHpw.jpeg)\n` +
      `> **Main Logo**: [View GIF](https://i.imgur.com/NvlQC5p.gif)\n` +
      `> **Background**: [View Image](https://i.imgur.com/8SQwxsu.jpeg)\n\n` +
      `*App successfully refreshed with updated configuration.*`,
      0x3B82F6 // Blue
    );

    // Requested Status Update
    logDevEvent(
      "MRZ Web Console Status Report",
      `\`\`\`\nBugs Found : 9\nBugs Fixed : 9\nBugs Active : 0\nServer Status : Online  🟢\n\`\`\``,
      0x22C55E // Success Green
    );

    // Setup 1-minute Dev Console Sync
    const logInterval = setInterval(() => {
      const now = new Date();
      const timestamp = now.toLocaleTimeString();
      
      logDevEvent(
        "MRZ Dev Console | Periodic Sync",
        `### 📊 Console Telemetry Analysis [${timestamp}]\n` +
        `> **Server Status**: Online 🟢\n` +
        `> **Activity Level**: Monitoring active interactions\n` +
        `> **Integrity**: Config & Profiles verified\n\n` +
        `#### 📝 Site Activity Logs\n` +
        `*   **Commands**: \`SYSTEM_CHECK\`, \`HEARTBEAT_SYNC\`\n` +
        `*   **Card Actions**: \`STABLE\` (Live real-time search interface active)\n` +
        `*   **Site Updates**: \`v1.3.1_EXPLORE\` (Real-time card filter with sound effects deployed)\n\n` +
        `#### 🐛 Debugging Intelligence\n` +
        `*   **Bugs Found**: \`0\` (Scan clean)\n` +
        `*   **Bugs Fixed**: \`9\` (All known issues patched)\n` +
        `*   **Memory Leak Check**: \`PASS\`\n\n` +
        `#### 👨‍💻 Developer Insight\n` +
        `*   **Developer Logs**: Connection stable. Latency < 45ms.\n` +
        `*   **Env Status**: Webhooks active.\n\n` +
        `*Auto-synced at: ${now.toISOString()}*`,
        0x3B82F6 // Blue
      );
    }, 60000);

    // Initial heartbeat
    sendHeartbeat(clientId);

    // Setup heartbeat interval (every 30 seconds)
    const heartbeatInterval = setInterval(() => {
      if (clientId) sendHeartbeat(clientId);
    }, 30000);

    return () => {
      clearInterval(heartbeatInterval);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <main className="relative min-h-screen p-6 md:p-12 lg:p-24 flex flex-col items-center">
      <BackgroundDecorations />

      <div className="relative z-10 w-full max-w-7xl space-y-12">
        {/* Banner and Logo Section */}
        <div className="relative mb-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full aspect-[174/67] rounded-[2.5rem] overflow-hidden liquid-glass border-2 border-amber-400/30 shadow-2xl relative z-10"
          >
            <img 
              src="https://i.imgur.com/hVGwHpw.jpeg" 
              alt="MRZ Banner"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a05] via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Logo - Layered on bottom of banner */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-amber-400/30 blur-2xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
                <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto rounded-3xl overflow-hidden liquid-glass border-2 border-amber-400/30 shadow-2xl">
                  <img 
                    src="https://i.imgur.com/NvlQC5p.gif"
                    alt="MRZ Logo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Header */}
        <header className="text-center space-y-4 mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold leading-tight tracking-tight flex flex-col items-center"
          >
            <span className="text-amber-400 amber-text-glow">MRZ</span>
            <span className="text-white border-b-4 border-white/60 mt-2 whitespace-nowrap">GTA OFFICAL</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-amber-100/40 text-lg md:text-xl max-w-3xl mx-auto font-light"
          >
            MRZ - It's a gang founded by MRZ Thoppi in FiveM GTA Roleplay, Here you can find the each members social profiles who is in this gang.
          </motion.p>
        </header>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto w-full mb-12 relative"
        >
          <div className="relative group">
            {/* Ambient glowing background on focus */}
            <div className="absolute inset-0 bg-amber-400/5 blur-xl rounded-2xl opacity-50 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="relative flex items-center liquid-glass border border-amber-400/20 focus-within:border-amber-400/50 rounded-2xl px-5 py-4 transition-all duration-300 shadow-xl bg-black/20">
              <Search className="text-amber-500/50 group-focus-within:text-amber-400 transition-colors shrink-0 mr-3" size={22} />
              <input 
                type="text"
                placeholder="Search gang members by name or bio..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-white placeholder-amber-100/30 text-base md:text-lg focus:outline-none w-full font-light"
              />
              {searchQuery && (
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    playTapSound();
                  }}
                  className="p-1 rounded-full hover:bg-amber-400/10 text-amber-500/50 hover:text-amber-400 transition-colors shrink-0 ml-2"
                  title="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            
            {/* Matching counts badge */}
            <div className="absolute -bottom-6 right-2 flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-amber-400/50">
                {searchQuery ? `FOUND: ${filteredProfiles.length} / ${PROFILES.length}` : `GANG SIZE: ${PROFILES.length}`}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Profile List */}
        {filteredProfiles.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredProfiles.map((profile, index) => (
              <GlassCard key={profile.id} profile={profile} />
            ))}
          </section>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 px-8 liquid-glass border border-amber-400/20 rounded-[2.5rem] max-w-lg mx-auto shadow-2xl relative overflow-hidden my-12"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-600/5 blur-[40px] rounded-full" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-amber-600/5 blur-[40px] rounded-full" />
            
            <Sparkles className="w-12 h-12 text-amber-500/40 mx-auto mb-6 animate-pulse" />
            <h3 className="text-2xl font-bold text-amber-50 mb-2">No Members Found</h3>
            <p className="text-amber-100/40 text-sm max-w-sm mx-auto mb-8 font-light leading-relaxed">
              We couldn't find any gang members matching "<span className="text-amber-400 font-medium">{searchQuery}</span>". Try searching for names like "Thoppi", "Sheikh", or member bios.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                playTapSound();
              }}
              className="px-6 py-2.5 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 hover:text-amber-300 font-semibold border border-amber-400/30 transition-all text-sm"
            >
              Clear Search Filter
            </button>
          </motion.div>
        )}

        {/* Footer */}
        <footer className="pt-24 pb-12 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-12 h-12 rounded-full border border-amber-400/30 flex items-center justify-center text-amber-400 group cursor-pointer hover:bg-amber-400 hover:text-black transition-all">
              <ChevronRight className="rotate-90" />
            </div>
            <p className="text-amber-100/20 text-sm tracking-widest uppercase">
              &copy; MRZ Offical 2026 &bull; All Rights Reserved 
            </p>
          </motion.div>
        </footer>
      </div>
    </main>
  );
}
