/*
 * PRESS PAGE: Editorial Noir Design
 * Media features, brand partnerships, stats — refined and editorial
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const EDITORIAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/editorial-music-ZPEoSqP8hqRSYCZKdRRn9C.webp";

const features = [
  { outlet: "SPIN Magazine", title: "Official Podcast Host — All Access with Clarissa Cardenas", year: "2024–Present" },
  { outlet: "SPIN", title: "All Access with Boys Noize — Grammy-Winning TRON: Ares Interview", year: "2026" },
  { outlet: "Live Nation", title: "Official Content Partner — Austin Market", year: "2025–Present" },
  { outlet: "HBO", title: "Brand Integration — The Weeknd Livestream Event", year: "2025" },
  { outlet: "Capital One", title: "Sponsored Content Series — Music Access Program", year: "2025" },
  { outlet: "Verizon", title: "Brand Partnership — Live Music Discovery", year: "2024" },
];

const stats = [
  { value: "27K+", label: "Instagram Followers" },
  { value: "50+", label: "Artist Interviews" },
  { value: "7", label: "Major Brand Partners" },
  { value: "250+", label: "Venues Covered" },
];

export default function Press() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={EDITORIAL_IMG} alt="Press" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-noir/20" />
        </div>
        <div className="relative container pb-12 md:pb-20 pt-32">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            <motion.p variants={fade} custom={0}
              className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-4"
            >
              Press & Partnerships
            </motion.p>
            <motion.h1 variants={fade} custom={1}
              className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
            >
              In the <span className="italic text-gold">Press</span>
            </motion.h1>
            <motion.p variants={fade} custom={2}
              className="font-body text-base text-white/50 max-w-md leading-relaxed"
            >
              Media features, brand partnerships, and editorial coverage from Concert Queen Media.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-14 md:py-20 bg-noir">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {stats.map((stat, i) => (
              <motion.div key={stat.label} variants={fade} custom={i * 0.3} className="text-center">
                <span className="font-display text-3xl md:text-4xl font-bold text-gold block mb-1">
                  {stat.value}
                </span>
                <span className="font-body text-xs tracking-[0.1em] uppercase text-white/40">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fade} custom={0}
            className="mb-10 md:mb-14"
          >
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-deep-red mb-3">
              Coverage
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-noir">
              Features & Partnerships
            </h2>
          </motion.div>

          <div className="space-y-0">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}
                variants={fade} custom={i * 0.2}
                className="group flex items-start gap-5 md:gap-8 py-5 md:py-6 border-b border-noir/8"
              >
                <span className="font-display text-sm md:text-base font-bold text-gold shrink-0 w-20 md:w-28 mt-1">
                  {f.outlet}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg font-semibold text-noir group-hover:text-deep-red transition-colors duration-300">
                    {f.title}
                  </h3>
                  <p className="font-body text-sm text-noir/40 mt-0.5">
                    {f.year}
                  </p>
                </div>
                <ExternalLink size={16} className="shrink-0 text-noir/15 group-hover:text-gold transition-colors duration-300 mt-1.5" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRAND PARTNERS ===== */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fade} custom={0}
            className="text-center mb-12"
          >
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold-dark mb-3">
              Brand Partners
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-noir">
              Trusted By
            </h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-10 md:gap-16"
          >
            {["SPIN", "Live Nation", "HBO", "Capital One", "Verizon", "Honda", "Red Bull"].map((p, i) => (
              <motion.span
                key={p}
                variants={fade}
                custom={i * 0.2}
                className="font-display text-2xl md:text-3xl font-bold text-noir/12 hover:text-noir/40 transition-colors duration-500 select-none"
              >
                {p}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== MEDIA KIT CTA ===== */}
      <section className="py-16 md:py-20 bg-noir">
        <div className="container text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <motion.h2 variants={fade} custom={0}
              className="font-display text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Work With Us
            </motion.h2>
            <motion.p variants={fade} custom={1}
              className="font-body text-sm text-white/40 mb-8 max-w-md mx-auto"
            >
              For press inquiries, brand partnerships, or media kit requests.
            </motion.p>
            <motion.div variants={fade} custom={2} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
                <ArrowRight size={15} />
              </Link>
              <button
                onClick={() => toast.info("Media kit coming soon — contact us directly for materials.")}
                className="btn-secondary"
              >
                Download Media Kit
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
