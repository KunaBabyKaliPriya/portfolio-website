import { motion } from "framer-motion";
import Section from "./Section.jsx";
import { about } from "../data/portfolio.js";

export default function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About Me">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5 text-white/75 leading-relaxed text-lg"
        >
          <p>{about.intro}</p>
          <p>{about.passion}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {about.highlights.map((h) => (
            <div
              key={h.label}
              className="glass rounded-2xl p-5 hover:border-accent/50 hover:-translate-y-1 transition"
            >
              <p className="text-xs uppercase tracking-widest text-accent">{h.label}</p>
              <p className="mt-2 font-medium">{h.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
