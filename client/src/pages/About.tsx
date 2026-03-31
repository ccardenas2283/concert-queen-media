/*
 * ABOUT PAGE: Editorial Noir Design
 * Concise, editorial. Authority + credibility.
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const AUSTIN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/austin-skyline-VaS4wYUu5NeJeLNcGPH3zd.webp";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const milestones = [
  { year: "2019", title: "Concert Queen Founded", desc: "Started as an Austin music discovery platform on Instagram." },
  { year: "2023", title: "Music Commission", desc: "Clarissa appointed Austin Music Commissioner, District 3." },
  { year: "2024", title: "SPIN Partnership", desc: "Launched 'All Access' podcast in partnership with SPIN Magazine." },
  { year: "2025", title: "Concert Queen Media LLC", desc: "Formalized as a full-service music media company." },
  { year: "2026", title: "Multi-City Expansion", desc: "Expanding coverage to Miami, Los Angeles, and New York." },
];

export default function About() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={AUSTIN_IMG} alt="Austin" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-noir/20" />
        </div>
        <div className="relative container pb-12 md:pb-20 pt-32">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            <motion.p variants={fade} custom={0}
              className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-4"
            >
              About
            </motion.p>
            <motion.h1 variants={fade} custom={1}
              className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
            >
              Where Music
              <br />
              Meets <span className="italic text-gold">Mission</span>
            </motion.h1>
            <motion.p variants={fade} custom={2}
              className="font-body text-base text-white/50 max-w-md leading-relaxed"
            >
              Concert Queen Media operates at the intersection of journalism, brand partnerships, live events, and civic leadership.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== MISSION / VISION ===== */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            >
              <motion.p variants={fade} custom={0}
                className="font-body text-[11px] tracking-[0.2em] uppercase text-gold-dark mb-4"
              >
                Our Mission
              </motion.p>
              <motion.h2 variants={fade} custom={1}
                className="font-display text-2xl md:text-3xl font-bold text-noir mb-5"
              >
                Amplify Music Culture
              </motion.h2>
              <motion.p variants={fade} custom={2}
                className="font-body text-base text-noir/50 leading-relaxed"
              >
                To amplify music culture through fearless journalism, authentic storytelling, and strategic brand partnerships — while advocating for the musicians, venues, and communities that make live music thrive.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            >
              <motion.p variants={fade} custom={0}
                className="font-body text-[11px] tracking-[0.2em] uppercase text-gold-dark mb-4"
              >
                Our Vision
              </motion.p>
              <motion.h2 variants={fade} custom={1}
                className="font-display text-2xl md:text-3xl font-bold text-noir mb-5"
              >
                The Go-To Music Platform
              </motion.h2>
              <motion.p variants={fade} custom={2}
                className="font-body text-base text-noir/50 leading-relaxed"
              >
                To be the most trusted, widely-read music media brand — and the go-to content partner for brands, cities, and institutions that want to reach the music-loving, culture-forward audience we've built.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== THE FOUNDER ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            >
              <motion.p variants={fade} custom={0}
                className="font-body text-[11px] tracking-[0.2em] uppercase text-gold-dark mb-4"
              >
                The Founder
              </motion.p>
              <motion.h2 variants={fade} custom={1}
                className="font-display text-3xl md:text-5xl font-bold text-noir mb-6"
              >
                Clarissa <span className="italic">Cardenas</span>
              </motion.h2>
              <motion.p variants={fade} custom={2}
                className="font-body text-base text-noir/50 leading-relaxed mb-6"
              >
                Commissioner. Journalist. Coach. Brand partner. Platform builder. Nobody else holds all of these roles simultaneously in the music media space. That convergence is the moat.
              </motion.p>
              <motion.div variants={fade} custom={3} className="space-y-3 mb-8">
                {[
                  "Austin Music Commissioner, District 3",
                  "SPIN Magazine — Official Podcast Host & Contributing Editor",
                  "iPEC Certified Life Coach (CPC, ELI-MP)",
                  "27,000+ Instagram Community",
                  "50+ Artist Interviews Published",
                  "7 Major Brand Partnerships",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                    <span className="font-body text-sm text-noir/60">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section className="py-16 md:py-24 bg-noir text-white">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fade} custom={0}
            className="mb-12 md:mb-16"
          >
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-3">
              What We Do
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              The Flywheel
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Content", desc: "Podcast, editorial, social media, and newsletter reaching 27K+ engaged music fans." },
              { title: "Events", desc: "Live coverage, artist interviews, and curated event discovery across multiple cities." },
              { title: "Partnerships", desc: "Strategic brand integrations with SPIN, Live Nation, HBO, Capital One, and more." },
              { title: "Advocacy", desc: "Civic leadership as Austin Music Commissioner, shaping policy for live music venues." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                variants={fade} custom={i * 0.3}
                className="border border-white/8 p-6 md:p-7 hover:border-gold/30 transition-all duration-500"
              >
                <h3 className="font-display text-xl font-semibold text-gold mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-white/45 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fade} custom={0}
            className="mb-12 md:mb-16"
          >
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold-dark mb-3">
              The Journey
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-noir">
              Key Milestones
            </h2>
          </motion.div>

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year + m.title}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}
                variants={fade} custom={i * 0.2}
                className="flex gap-6 md:gap-10 py-5 md:py-6 border-b border-noir/8"
              >
                <span className="font-display text-2xl md:text-3xl font-bold text-gold shrink-0 w-16 md:w-20">
                  {m.year}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-noir mb-1">
                    {m.title}
                  </h3>
                  <p className="font-body text-sm text-noir/45">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 md:py-20 bg-white border-t border-noir/5">
        <div className="container text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <motion.h2 variants={fade} custom={0}
              className="font-display text-3xl md:text-4xl font-bold text-noir mb-6"
            >
              Let's Work Together
            </motion.h2>
            <motion.div variants={fade} custom={1} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
                <ArrowRight size={15} />
              </Link>
              <Link href="/press" className="btn-secondary-dark">
                View Press Kit
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
