import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import Section from "./Section.jsx";
import { profile } from "../data/portfolio.js";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return toast.error("Please fill in all fields.");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return toast.error("Please enter a valid email.");
    }
    setLoading(true);
    try {
      const res = await fetch(`${API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Message sent! I'll get back to you soon. ✨");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Could not send. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" eyebrow="Let's connect" title="Get in Touch">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <p className="text-white/70 text-lg leading-relaxed">
            Have an opportunity, project, or just want to say hi? My inbox is open — I'd love to hear from you.
          </p>

          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 glass rounded-xl p-4 hover:border-accent/50 transition">
            <FiMail className="text-accent text-xl" />
            <span>{profile.email}</span>
          </a>
          <div className="flex items-center gap-3 glass rounded-xl p-4">
            <FiMapPin className="text-accent text-xl" />
            <span>{profile.location}</span>
          </div>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 glass rounded-xl p-4 hover:border-accent/50 transition">
            <FiLinkedin className="text-accent text-xl" />
            <span>LinkedIn Profile</span>
          </a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 glass rounded-xl p-4 hover:border-accent/50 transition">
            <FiGithub className="text-accent text-xl" />
            <span>GitHub Profile</span>
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={submit}
          className="glass rounded-3xl p-7 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-white/60">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={update}
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-white/60">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent transition"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-white/60">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              rows="5"
              className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent transition resize-none"
              placeholder="Tell me about your project, role, or just say hi..."
            />
          </div>
          <button
            disabled={loading}
            className="inline-flex w-full justify-center items-center gap-2 px-6 py-3.5 rounded-xl btn-grad font-medium disabled:opacity-60"
          >
            <FiSend /> {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
