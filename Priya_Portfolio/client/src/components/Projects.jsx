import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Section from "./Section.jsx";
import { projects } from "../data/portfolio.js";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="My work" title="Featured Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5 }}
            className="group glass rounded-3xl overflow-hidden hover:border-accent/40 transition"
          >
            <div className={`h-48 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
             <span className="absolute bottom-4 left-5 right-5 font-display text-2xl md:text-3xl font-bold tracking-tight break-words leading-tight">
               {p.title}
             </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/65 text-sm leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm btn-ghost px-4 py-2 rounded-full">
                  <FiGithub /> Code
                </a>
                <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm btn-grad px-4 py-2 rounded-full">
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
