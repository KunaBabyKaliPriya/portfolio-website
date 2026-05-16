import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolio.js";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/5 bg-bg2/60">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <a href="#home" className="font-display text-2xl font-bold text-grad">{profile.shortName}.</a>
          <p className="mt-3 text-white/60 text-sm max-w-xs">
            {profile.titles[0]} based in {profile.location}.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-white/65 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-accent transition">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3">Connect</h4>
          <div className="flex gap-4 text-xl text-white/70">
            <a href={`mailto:${profile.email}`} className="hover:text-accent transition"><FiMail /></a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-accent transition"><FiGithub /></a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition"><FiLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {profile.name}. Built with <span className="text-grad">React &amp; Tailwind</span>.
      </div>
    </footer>
  );
}
