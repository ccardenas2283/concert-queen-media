/*
 * CONTACT PAGE: Velvet Frequency Design System
 * Professional inquiry form for partnerships, press, and general inquiries
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Music2, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const AUSTIN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/austin-skyline-VaS4wYUu5NeJeLNcGPH3zd.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7 },
  }),
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@theconcertqueen.com",
    href: "mailto:hello@theconcertqueen.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@theconcertqueen",
    href: "https://www.instagram.com/theconcertqueen",
  },
  {
    icon: Music2,
    label: "Spotify",
    value: "All Access Podcast",
    href: "https://open.spotify.com/show/theconcertqueen",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Austin, Texas",
    href: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll be in touch soon.");
    setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={AUSTIN_IMG} alt="Austin skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-burgundy-dark/85" />
        </div>
        <div className="relative container">
          <div className="max-w-3xl">
            <motion.span
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3 block"
            >
              Get in Touch
            </motion.span>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="font-display text-5xl md:text-7xl font-bold text-cream leading-tight mb-6"
            >
              Let's
              <br />
              <span className="italic text-gold">Connect</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="font-body text-lg text-cream/70 max-w-xl leading-relaxed"
            >
              Whether you're interested in brand partnerships, press inquiries, event coverage, or just want to say hello — we'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h2
                  variants={fadeUp}
                  custom={0}
                  className="font-display text-3xl font-bold text-burgundy-dark mb-6"
                >
                  Reach Out
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  custom={1}
                  className="font-body text-base text-charcoal-light leading-relaxed mb-8"
                >
                  Concert Queen Media is always open to new partnerships, collaborations, and conversations. Based in Austin, Texas — the Live Music Capital of the World.
                </motion.p>

                <div className="space-y-5">
                  {contactMethods.map((method, i) => (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      custom={i + 2}
                      className="group flex items-center gap-4"
                    >
                      <div className="w-11 h-11 rounded-full bg-burgundy-dark/5 flex items-center justify-center group-hover:bg-burgundy-dark/10 transition-colors duration-300">
                        <method.icon size={18} className="text-burgundy" />
                      </div>
                      <div>
                        <span className="font-body text-xs text-charcoal-light uppercase tracking-wider block">
                          {method.label}
                        </span>
                        <span className="font-body text-sm text-charcoal font-medium group-hover:text-burgundy transition-colors duration-300">
                          {method.value}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Inquiry Types */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={6}
                  className="mt-10 p-6 bg-white rounded-sm border border-border"
                >
                  <h3 className="font-display text-lg font-semibold text-charcoal mb-3">
                    We Work With
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Brand sponsors & advertisers",
                      "Music festivals & event organizers",
                      "Venues seeking featured listings",
                      "Artists & management teams",
                      "PR agencies & publicists",
                      "City & institutional partners",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                        <span className="font-body text-sm text-charcoal-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <motion.form
                onSubmit={handleSubmit}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white rounded-sm border border-border p-8 md:p-10"
              >
                <motion.h3
                  variants={fadeUp}
                  custom={0}
                  className="font-display text-2xl font-bold text-charcoal mb-6"
                >
                  Send a Message
                </motion.h3>

                <div className="space-y-5">
                  <motion.div variants={fadeUp} custom={1}>
                    <label className="font-body text-sm text-charcoal font-medium block mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-cream border border-border rounded-sm font-body text-sm text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
                      placeholder="Your name"
                    />
                  </motion.div>

                  <motion.div variants={fadeUp} custom={2}>
                    <label className="font-body text-sm text-charcoal font-medium block mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-cream border border-border rounded-sm font-body text-sm text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  <motion.div variants={fadeUp} custom={3}>
                    <label className="font-body text-sm text-charcoal font-medium block mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-cream border border-border rounded-sm font-body text-sm text-charcoal focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Brand Partnership">Brand Partnership</option>
                      <option value="Press Inquiry">Press Inquiry</option>
                      <option value="Featured Venue Listing">Featured Venue Listing</option>
                      <option value="Event Coverage">Event Coverage</option>
                      <option value="Life Coaching">Life Coaching</option>
                    </select>
                  </motion.div>

                  <motion.div variants={fadeUp} custom={4}>
                    <label className="font-body text-sm text-charcoal font-medium block mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-cream border border-border rounded-sm font-body text-sm text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </motion.div>

                  <motion.div variants={fadeUp} custom={5}>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-burgundy-dark text-cream font-body font-semibold text-sm tracking-wide rounded-sm hover:bg-burgundy transition-all duration-300 w-full justify-center md:w-auto"
                    >
                      <Send size={16} />
                      Send Message
                    </button>
                  </motion.div>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
