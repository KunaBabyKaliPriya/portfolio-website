import { motion } from "framer-motion";
import { FiDownload, FiAward, FiCheckCircle } from "react-icons/fi";
import Section from "./Section.jsx";
import { education, experience, certifications, achievements, profile } from "../data/portfolio.js";

function Timeline({ items }) {
  return (
    <div className="relative pl-6 border-l border-white/10 space-y-8">
      {items.map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="relative"
        >
          <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-grad-primary shadow-glow" />
          <p className="text-xs text-accent tracking-widest uppercase">{it.period}</p>
          <h4 className="mt-1 font-display text-lg font-semibold">{it.title}</h4>
          <p className="text-sm text-white/60">{it.place}</p>
          <p className="mt-2 text-white/70 text-sm">{it.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default function Resume() {
  return (
    <Section id="resume" eyebrow="My journey" title="Resume">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="font-display text-2xl font-semibold mb-6">Education</h3>
          <Timeline items={education} />

          <h3 className="font-display text-2xl font-semibold mt-12 mb-6">Experience</h3>
          <Timeline items={experience} />
        </div>

        <div className="space-y-8">
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <FiAward className="text-accent" /> Certifications
            </h3>
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-2 text-white/75">
                  <FiCheckCircle className="text-accent mt-1 shrink-0" /> {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="font-display text-xl font-semibold mb-4">Achievements</h3>
            <ul className="space-y-2">
              {achievements.map((a) => (
                <li key={a} className="flex items-start gap-2 text-white/75">
                  <FiCheckCircle className="text-accent2 mt-1 shrink-0" /> {a}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={profile.resumeUrl}
            download
            className="inline-flex w-full justify-center items-center gap-2 px-6 py-4 rounded-2xl btn-grad font-medium"
          >
            <FiDownload />  Download Resume
          </a>
        </div>
      </div>
    </Section>
  );
}
