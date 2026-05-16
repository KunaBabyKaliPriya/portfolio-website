import { motion } from "framer-motion";
import Section from "./Section.jsx";
import { skills } from "../data/portfolio.js";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="My toolkit" title="Skills">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([group, items], idx) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition"
          >
            <h3 className="font-display text-xl font-semibold mb-4">
              <span className="text-grad">{group}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 hover:border-accent hover:text-white transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
