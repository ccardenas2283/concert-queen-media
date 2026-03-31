/*
 * CONTACT PAGE: Editorial Noir Design
 * Minimal, premium inquiry form
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const subjects = [
  "Brand Partnership",
  "Press Inquiry",
  "Podcast Guest Pitch",
  "Event Coverage",
  "Coaching / Consulting",
  "General Inquiry",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent. We'll be in touch soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="bg-noir pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="container">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            <motion.p variants={fade} custom={0}
              className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-4"
            >
              Contact
            </motion.p>
            <motion.h1 variants={fade} custom={1}
              className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
            >
              Let's <span className="italic text-gold">Connect</span>
            </motion.h1>
            <motion.p variants={fade} custom={2}
              className="font-body text-base text-white/50 max-w-md leading-relaxed"
            >
              For brand partnerships, press inquiries, podcast pitches, or coaching — we'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== FORM + INFO ===== */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
            {/* Form */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              className="lg:col-span-7"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={fade} custom={0} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-[11px] tracking-[0.12em] uppercase text-noir/50 mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-noir/10 px-4 py-3.5 font-body text-sm text-noir placeholder:text-noir/25 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-body text-[11px] tracking-[0.12em] uppercase text-noir/50 mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-noir/10 px-4 py-3.5 font-body text-sm text-noir placeholder:text-noir/25 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fade} custom={1}>
                  <label className="font-body text-[11px] tracking-[0.12em] uppercase text-noir/50 mb-2 block">
                    Subject
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white border border-noir/10 px-4 py-3.5 font-body text-sm text-noir focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all duration-300 appearance-none"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </motion.div>

                <motion.div variants={fade} custom={2}>
                  <label className="font-body text-[11px] tracking-[0.12em] uppercase text-noir/50 mb-2 block">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-noir/10 px-4 py-3.5 font-body text-sm text-noir placeholder:text-noir/25 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </motion.div>

                <motion.div variants={fade} custom={3}>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send Message
                    <ArrowRight size={15} />
                  </button>
                </motion.div>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              className="lg:col-span-5"
            >
              <motion.div variants={fade} custom={0} className="mb-10">
                <h3 className="font-display text-xl font-semibold text-noir mb-4">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@theconcertqueen.com"
                    className="flex items-center gap-3 font-body text-sm text-noir/60 hover:text-gold-dark transition-colors duration-300"
                  >
                    <Mail size={16} className="text-gold shrink-0" />
                    hello@theconcertqueen.com
                  </a>
                  <div className="flex items-center gap-3 font-body text-sm text-noir/60">
                    <MapPin size={16} className="text-gold shrink-0" />
                    Austin, Texas
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fade} custom={1} className="mb-10">
                <h3 className="font-display text-xl font-semibold text-noir mb-4">
                  Follow Along
                </h3>
                <div className="flex gap-5">
                  {[
                    { label: "Instagram", url: "https://www.instagram.com/theconcertqueen" },
                    { label: "Spotify", url: "https://open.spotify.com/show/theconcertqueen" },
                    { label: "TikTok", url: "https://www.tiktok.com/@theconcertqueen" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs tracking-[0.1em] uppercase text-noir/40 hover:text-gold-dark transition-colors duration-300"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fade} custom={2}>
                <div className="bg-noir p-6 md:p-8">
                  <h3 className="font-display text-lg font-semibold text-white mb-3">
                    Partnership Inquiries
                  </h3>
                  <p className="font-body text-sm text-white/45 leading-relaxed mb-4">
                    We work with brands that share our passion for authentic music culture. Sponsorships, content series, event activations, and custom packages available.
                  </p>
                  <p className="font-body text-xs text-gold">
                    Typical response time: 24–48 hours
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
