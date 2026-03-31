/*
 * ABOUT PAGE: Velvet Frequency Design System
 * Authority & credibility focused — Commissioner, SPIN, coaching
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Award, Mic2, Heart, Building2, Users, Newspaper } from "lucide-react";

const AUSTIN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/austin-skyline-VaS4wYUu5NeJeLNcGPH3zd.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7 },
  }),
};

const roles = [
  {
    icon: Building2,
    title: "Austin Music Commissioner",
    subtitle: "District 3",
    description:
      "Serving as an appointed member of the Austin Music Commission, advocating for musicians, venues, and communities that make Austin the Live Music Capital of the World.",
  },
  {
    icon: Mic2,
    title: "SPIN Magazine Podcast Host",
    subtitle: "All Access with Clarissa Cardenas",
    description:
      "Hosting intimate conversations with breakthrough and legacy artists for one of the most iconic music publications in history. Featured interviews include Boys Noize, Adam Beyer, and Simon Doty.",
  },
  {
    icon: Heart,
    title: "iPEC Certified Life Coach",
    subtitle: "The Reclamation Path Method™",
    description:
      "Guiding music industry professionals and creatives through personal development, healing, and career growth. Creator of The Reclamation Path Method™ framework.",
  },
  {
    icon: Newspaper,
    title: "Music Journalist & Content Creator",
    subtitle: "27K+ Instagram Community",
    description:
      "Covering Austin's live music scene with fearless journalism and authentic storytelling. From Seismic Dance Event to ACL, delivering the stories behind the music.",
  },
];

const milestones = [
  { year: "2024", event: "Appointed Austin Music Commissioner, District 3" },
  { year: "2024", event: "Launched All Access podcast on SPIN Magazine" },
  { year: "2025", event: "Boys Noize GRAMMY interview published on SPIN" },
  { year: "2025", event: "Seismic Dance Event 8.0 official coverage" },
  { year: "2026", event: "Concert Queen Venue Guide launch" },
  { year: "2026", event: "Austin Music Roots heritage series" },
];

export default function About() {
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
              About Concert Queen Media
            </motion.span>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="font-display text-5xl md:text-7xl font-bold text-cream leading-tight mb-6"
            >
              Where Music Meets
              <br />
              <span className="italic text-gold">Mission</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="font-body text-lg text-cream/70 max-w-xl leading-relaxed"
            >
              Concert Queen Media LLC is a music media and content company operating at the intersection of journalism, brand partnerships, live event coverage, and civic leadership.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                variants={fadeUp}
                custom={0}
                className="font-display text-3xl md:text-4xl font-bold text-burgundy-dark mb-6"
              >
                Our Mission
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="font-body text-lg text-charcoal leading-relaxed mb-6"
              >
                To amplify Austin's music culture through fearless journalism, authentic storytelling, and strategic brand partnerships — while using that platform to advocate for the musicians, venues, and communities that make Austin the Live Music Capital of the World.
              </motion.p>
              <motion.div variants={fadeUp} custom={2} className="gold-rule" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                variants={fadeUp}
                custom={0}
                className="font-display text-3xl md:text-4xl font-bold text-burgundy-dark mb-6"
              >
                Our Vision
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="font-body text-lg text-charcoal leading-relaxed mb-6"
              >
                To be the most trusted, widely-read music media brand in Austin — and the go-to content partner for brands, cities, and institutions that want to reach the music-loving, culture-forward audience we've built.
              </motion.p>
              <motion.div variants={fadeUp} custom={2} className="gold-rule" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clarissa's Roles */}
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
              Clarissa Cardenas
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-burgundy-dark mb-4">
              A Category of One
            </h2>
            <p className="font-body text-lg text-charcoal-light max-w-2xl mx-auto">
              No other Austin media entity combines civic authority, editorial credibility, audience reach, brand partnership infrastructure, and electronic music expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="group p-8 bg-cream rounded-sm border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-500"
              >
                <role.icon
                  size={28}
                  className="text-gold-dark mb-4 group-hover:text-burgundy transition-colors duration-300"
                />
                <h3 className="font-display text-xl font-semibold text-charcoal mb-1">
                  {role.title}
                </h3>
                <span className="font-body text-sm text-gold-dark font-medium block mb-3">
                  {role.subtitle}
                </span>
                <p className="font-body text-sm text-charcoal-light leading-relaxed">
                  {role.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Flywheel */}
      <section className="py-20 md:py-28 bg-burgundy-dark">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.span
                variants={fadeUp}
                custom={0}
                className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3 block"
              >
                The Media Flywheel
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-display text-4xl md:text-5xl font-bold text-cream mb-8"
              >
                How It All Connects
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="font-accent text-xl italic text-cream/70 leading-relaxed mb-12"
              >
                Commissioner access drives exclusive stories. Stories build audience. Audience attracts brands. Brands fund deeper coverage. Coverage creates more civic impact.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={3}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {[
                  { icon: Award, label: "Civic Authority" },
                  { icon: Newspaper, label: "Editorial Credibility" },
                  { icon: Users, label: "Audience Reach" },
                  { icon: Building2, label: "Brand Partnerships" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    custom={i + 3}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center">
                      <item.icon size={22} className="text-gold" />
                    </div>
                    <span className="font-body text-sm text-cream/70">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-14"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-burgundy-dark">
              Key Milestones
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div
                key={m.event}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
                custom={i}
                className="flex gap-6 pb-8 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gold flex-shrink-0" />
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-gold/30 mt-2" />
                  )}
                </div>
                <div className="pb-4">
                  <span className="font-body text-xs tracking-widest uppercase text-gold-dark">
                    {m.year}
                  </span>
                  <p className="font-body text-base text-charcoal mt-1">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-display text-3xl md:text-4xl font-bold text-burgundy-dark mb-6"
            >
              Ready to Collaborate?
            </motion.h2>
            <motion.div variants={fadeUp} custom={1} className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-burgundy-dark text-cream font-body font-semibold text-sm tracking-wide rounded-sm hover:bg-burgundy transition-all duration-300"
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/press"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-burgundy-dark text-burgundy-dark font-body font-semibold text-sm tracking-wide rounded-sm hover:bg-burgundy-dark hover:text-cream transition-all duration-300"
              >
                View Press Kit
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
