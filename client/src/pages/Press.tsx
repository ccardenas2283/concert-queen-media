/*
 * PRESS PAGE: Velvet Frequency Design System
 * Media features, brand partnerships, press kit
 */

import { motion } from "framer-motion";
import { ExternalLink, Download, Mail } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/hero-concert-7Mabueq7uJitiCXb6NmUGd.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7 },
  }),
};

const pressFeatures = [
  {
    publication: "SPIN Magazine",
    title: "All Access with Boys Noize: Grammy-Winning Producer Goes Crate Digging at Waterloo Records",
    date: "March 2026",
    url: "https://www.spin.com",
  },
  {
    publication: "SPIN Magazine",
    title: "Seismic Dance Event 8.0: Austin's Techno Festival Comes of Age",
    date: "February 2026",
    url: "https://www.spin.com",
  },
  {
    publication: "Austin Chronicle",
    title: "Meet the Music Commissioner Using Media to Change Austin's Music Policy",
    date: "January 2026",
    url: "https://www.austinchronicle.com",
  },
  {
    publication: "Austin American-Statesman",
    title: "Concert Queen: How One Woman Is Mapping Austin's Entire Live Music Scene",
    date: "December 2025",
    url: "https://www.statesman.com",
  },
];

const partners = [
  {
    name: "SPIN Magazine",
    type: "Editorial Partner",
    description: "Official podcast host and contributing editor for one of the most iconic music publications in history.",
  },
  {
    name: "Live Nation",
    type: "Event Partner",
    description: "Official content partner for major Austin events and festivals, providing exclusive backstage access and coverage.",
  },
  {
    name: "HBO",
    type: "Brand Partner",
    description: "Content collaboration for music-adjacent programming and cultural events in the Austin market.",
  },
  {
    name: "Capital One",
    type: "Brand Partner",
    description: "Sponsored content partnerships connecting financial services with Austin's music-loving audience.",
  },
  {
    name: "Verizon",
    type: "Brand Partner",
    description: "Technology and connectivity partnerships for live event coverage and digital content creation.",
  },
  {
    name: "Honda",
    type: "Brand Partner",
    description: "Automotive brand partnership connecting with the culture-forward, experience-driven Concert Queen audience.",
  },
  {
    name: "Red Bull Music",
    type: "Brand Partner",
    description: "Music culture partnership for event coverage, artist spotlights, and underground scene documentation.",
  },
];

const stats = [
  { value: "27K+", label: "Instagram Followers" },
  { value: "50+", label: "Artist Interviews" },
  { value: "7", label: "Brand Partners" },
  { value: "10", label: "Austin Districts Covered" },
];

export default function Press() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Concert" className="w-full h-full object-cover" />
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
              Press & Partnerships
            </motion.span>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="font-display text-5xl md:text-7xl font-bold text-cream leading-tight mb-6"
            >
              In the
              <br />
              <span className="italic text-gold">Spotlight</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="font-body text-lg text-cream/70 max-w-xl leading-relaxed"
            >
              Media features, brand partnerships, and collaboration opportunities with Austin's premier music media brand.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-burgundy-dark border-b border-cream/10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <span className="font-display text-3xl md:text-4xl font-bold text-gold">
                  {stat.value}
                </span>
                <span className="block font-body text-sm text-cream/60 mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Features */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="mb-10"
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold-dark mb-2 block">
              As Seen In
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-burgundy-dark">
              Press Features
            </h2>
          </motion.div>

          <div className="space-y-4">
            {pressFeatures.map((feature, i) => (
              <motion.a
                key={feature.title}
                href={feature.url}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
                custom={i}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-white rounded-sm border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-500"
              >
                <div className="flex-1">
                  <span className="font-body text-xs tracking-[0.2em] uppercase text-gold-dark font-semibold">
                    {feature.publication}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-charcoal group-hover:text-burgundy transition-colors duration-300 mt-1">
                    {feature.title}
                  </h3>
                  <span className="font-body text-sm text-charcoal-light mt-1 block">
                    {feature.date}
                  </span>
                </div>
                <ExternalLink size={18} className="text-charcoal-light group-hover:text-gold-dark transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-14"
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold-dark mb-2 block">
              Collaborations
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-burgundy-dark mb-4">
              Brand Partners
            </h2>
            <p className="font-body text-lg text-charcoal-light max-w-2xl mx-auto">
              Concert Queen Media partners with brands that share our passion for authentic music culture and meaningful audience engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="p-6 bg-cream rounded-sm border border-border"
              >
                <span className="font-body text-xs tracking-[0.2em] uppercase text-gold-dark font-medium">
                  {partner.type}
                </span>
                <h3 className="font-display text-xl font-semibold text-charcoal mt-1 mb-2">
                  {partner.name}
                </h3>
                <p className="font-body text-sm text-charcoal-light leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit CTA */}
      <section className="py-20 md:py-24 bg-burgundy-dark">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={fadeUp}
                custom={0}
                className="font-display text-3xl md:text-4xl font-bold text-cream mb-4"
              >
                Work With Us
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="font-body text-lg text-cream/60 mb-8"
              >
                Interested in partnering with Concert Queen Media? We offer brand partnerships, sponsored content, event coverage, and custom media packages.
              </motion.p>
              <motion.div variants={fadeUp} custom={2} className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-burgundy-dark font-body font-semibold text-sm tracking-wide rounded-sm hover:bg-gold-light transition-all duration-300"
                >
                  <Mail size={16} />
                  Contact for Partnerships
                </Link>
                <button
                  onClick={() => toast("Media kit download coming soon!")}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-cream/30 text-cream font-body font-semibold text-sm tracking-wide rounded-sm hover:bg-cream/10 transition-all duration-300"
                >
                  <Download size={16} />
                  Download Media Kit
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
