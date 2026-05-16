import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiDownload, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolio.js";
import useTyping from "../hooks/useTyping.js";

export default function Hero() {
  const typed = useTyping(profile.titles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* animated blobs */}
      <div className="absolute -top-32 -left-32 w-[460px] h-[460px] bg-accent/30 rounded-full blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-32 w-[460px] h-[460px] bg-accent2/30 rounded-full blur-[120px] animate-blob [animation-delay:2s]" />
      <div className="absolute bottom-0 left-1/3 w-[380px] h-[380px] bg-accent3/20 rounded-full blur-[120px] animate-blob [animation-delay:4s]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-white/70 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for internships & freelance
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold leading-[1.05]"
          >
            Hi, I'm <span className="text-grad">{profile.shortName}</span>
            <br />
            <span className="cursor text-white/90 text-3xl md:text-5xl">{typed}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-white/70 max-w-xl text-lg leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#contact" className="px-7 py-3 rounded-full font-medium btn-grad inline-flex items-center gap-2">
              <FiMail /> Hire Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-7 py-3 rounded-full font-medium btn-ghost inline-flex items-center gap-2"
            >
              <FiDownload /> Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex items-center gap-5 text-xl text-white/60"
          >
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition"><FiGithub /></a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition"><FiLinkedin /></a>
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative mx-auto"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-[3px] bg-grad-primary animate-float shadow-glow">
            <div className="w-full h-full rounded-full bg-bg2 flex items-center justify-center overflow-hidden">
              <img
                  src="Profile.png"
                  alt="Priya"
                  className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 text-sm">
            <p className="text-white/60">Currently</p>
            <p className="font-semibold">Learning &amp; Building</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
