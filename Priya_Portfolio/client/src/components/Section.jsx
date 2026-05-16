import { motion } from "framer-motion";

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14 text-center"
        >
          <p className="text-sm tracking-[0.3em] text-accent uppercase">{eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            <span className="text-grad">{title}</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-grad-primary" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
