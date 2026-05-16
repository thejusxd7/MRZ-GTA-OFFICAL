import React from 'react';
import { motion } from 'motion/react';
import { 
  Instagram, 
  MessageCircle, 
  ChevronRight,
  Sparkles,
  Youtube,
  ExternalLink,
  Gamepad2,
  MonitorPlay
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
    avatar: 'https://cdn.discordapp.com/attachments/1504849417235333171/1504849588429914413/1778854387814.jpg?ex=6a087be4&is=6a072a64&hm=cc6fa5b2c07548771a9708166f013d76adecb26cae5694843260f18c26c82793&',
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
    avatar: 'https://cdn.discordapp.com/attachments/1504849417235333171/1504861015001792583/channels4_profile_7.jpg?ex=6a088688&is=6a073508&hm=712306081593ffd0925b3d0d0bb709783f450c3a4d16301880089d3f9b6f01a0&',
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
    avatar: 'https://cdn.discordapp.com/attachments/1504849417235333171/1504859030668050625/1778856722595.jpg?ex=6a0884af&is=6a07332f&hm=b84358267ca8696e7e43a6113ad5a31833e46d46642a804b0752a2857f3408f1&',
    links: { 
      discord: 'https://discord.gg/sheikhh', 
      whatsapp: 'https://sheikh-gaming.vercel.app/', 
      instagram: 'https://www.instagram.com/_sheikh.official_?igsh=MThmeTloZmE1Nmprbg==', 
      youtube: 'https://youtube.com/@sheikhgaming_op?si=p8Ag7Y-b-W5Zc33C',
      kick: 'https://kick.com/sheikh_nuhman'
    }
  },
  {
    id: '4',
    name: 'MRZ Mack',
    bio: 'The Co-Leader',
    avatar: 'https://cdn.discordapp.com/attachments/1504849417235333171/1504862876266135613/channels4_profile_1.jpg?ex=6a088844&is=6a0736c4&hm=de93831c5751c5128c5c8a8d78e4b57b4e26acd03bcf353ba035e2e90cdfee6d&',
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
    avatar: 'https://cdn.discordapp.com/attachments/1504849417235333171/1504966924797214790/9d0eee497b42106a43b6a814b29505f2.png?ex=6a08e92b&is=6a0797ab&hm=2c9d4d74e7a8e9be9f638e6ec717907a0ef8c909413d0e29d29469097ff816a5&',
    links: { 
      discord: 'https://discord.gg/6DR4DMGDwm', 
      whatsapp: 'https://chat.whatsapp.com/HkImfLAPZ6gJyJgolputye', 
      instagram: 'https://www.instagram.com/mrz.appappan?igsh=dDRmbHRqZnVubzRt', 
      youtube: 'https://youtube.com/@mrzappappan'
    }
  },
  {
    id: '6',
    name: 'MRZ Raju Bahi',
    bio: 'Member',
    avatar: 'https://cdn.discordapp.com/attachments/1504849417235333171/1504863710882037913/channels4_profile_11.jpg?ex=6a08890b&is=6a07378b&hm=31e23092db2deac9697d707bab173ce34878251a3563332dde40cbc2dbe4502c&',
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
    avatar: 'https://cdn.discordapp.com/attachments/1504849417235333171/1504865621081591839/20260508_223329.jpg?ex=6a093393&is=6a07e213&hm=2b1c6f48092babb6e186be87c90c4494309838355ea089c4b086a917c2665b03&',
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
    avatar: 'https://cdn.discordapp.com/attachments/1504849417235333171/1505094352328720445/channels4_profile_25.jpg?ex=6a095fd8&is=6a080e58&hm=15fdd84e57c2a4ea2b8214b06889ffcaf492cb5ba268b9fb8b7f57ecb2622419&',
    links: { 
      discord: 'https://discord.gg/cyA3m3Gc5w', 
      instagram: 'https://www.instagram.com/not_chxrlie.exe?igsh=MTN0NWJpOWQ0ZWV6Ng==', 
      youtube: 'https://youtube.com/@chakkahere',
      youtube2: 'https://youtube.com/@mrzmaari'
    }
  }
];

const GlassCard: React.FC<{ profile: Profile }> = ({ profile }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="liquid-glass amber-glow relative overflow-hidden rounded-[2.5rem] p-8 md:p-10 group will-change-transform"
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
            />
            <SocialLink 
              icon={<Youtube size={20} />} 
              label="YouTube 2" 
              href={profile.links.youtube2} 
              color="bg-[#FF0000]"
            />
            <SocialLink 
              icon={<MonitorPlay size={20} />} 
              label="Kick" 
              href={profile.links.kick} 
              color="bg-[#53FC18]"
            />
            <SocialLink 
              icon={<Instagram size={20} />} 
              label="Instagram" 
              href={profile.links.instagram} 
              color="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
            />
            <SocialLink 
              icon={<Gamepad2 size={20} />} 
              label="Discord" 
              href={profile.links.discord} 
              color="bg-[#5865F2]"
            />
            <SocialLink 
              icon={<MessageCircle size={20} />} 
              label="WhatsApp" 
              href={profile.links.whatsapp} 
              color="bg-[#25D366]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SocialLink: React.FC<{ icon: React.ReactNode, label: string, href?: string, color: string }> = ({ icon, label, href, color }) => {
  if (!href) return null;
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
        className="absolute inset-0 bg-cover bg-center brightness-[0.2]"
        style={{
          backgroundImage: 'url("https://cdn.discordapp.com/attachments/1504848109484638401/1504874595939913768/1778852768140.png?ex=6a08932e&is=6a0741ae&hm=64bb35eacc7ddead08cc20e49898668d8f0e29d8392cd9e2a0e0154cfee0f060&")',
          opacity: 0.4
        }}
      />
      {/* Background Glows */}
      <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-amber-500/10 blur-[80px] rounded-full will-change-transform" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-amber-600/5 blur-[100px] rounded-full will-change-transform" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.05)_0%,transparent_70%)]" />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <main className="relative min-h-screen p-6 md:p-12 lg:p-24 flex flex-col items-center">
      <BackgroundDecorations />

      <div className="relative z-10 w-full max-w-7xl space-y-12">
        {/* Banner and Logo Section */}
        <div className="relative mb-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full aspect-[174/67] rounded-[2.5rem] overflow-hidden liquid-glass border-2 border-amber-400/30 shadow-2xl relative z-10"
          >
            <img 
              src="https://cdn.discordapp.com/attachments/1504848109484638401/1504848321502642310/IMG_20260515_193701.jpg?ex=6a087ab6&is=6a072936&hm=f1a3a2e59562849ce425b6ba5d17781e2a9433a82c6d36fef6934d9b1578333a&" 
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
                  <video 
                    src="https://media.discordapp.net/attachments/1504848109484638401/1504848291353858068/InShot_20260515_192201274.mp4?ex=6a087aaf&is=6a07292f&hm=3bbf660f1af5f1e2827ebb6fdbd1023be92357276de6d7b5dd8cafe9932a0f4d&"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
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

        {/* Profile List */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {PROFILES.map((profile, index) => (
            <GlassCard key={profile.id} profile={profile} />
          ))}
        </section>

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
