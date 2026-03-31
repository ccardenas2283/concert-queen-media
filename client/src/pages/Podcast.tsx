/*
 * PODCAST PAGE: Editorial Noir Design
 * All Access with Clarissa Cardenas — episode listings, clean editorial layout
 */

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

const PODCAST_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/podcast-studio-mXJ9r7KtGHA5N5Cboki4Fi.webp";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const episodes = [
  {
    number: "EP 12",
    title: "All Access with Boys Noize",
    guest: "Boys Noize (Alex Ridha)",
    duration: "58 min",
    date: "March 2026",
    description: "Grammy-winning producer on TRON: Ares, Nine Inch Noize at Coachella 2025, and exclusive crate digging at Waterloo Records in Austin.",
    featured: true,
  },
  {
    number: "EP 11",
    title: "All Access with Adam Beyer",
    guest: "Adam Beyer",
    duration: "45 min",
    date: "February 2026",
    description: "The Drumcode founder on building a techno empire, the evolution of warehouse culture, and his vision for the next decade.",
    featured: false,
  },
  {
    number: "EP 10",
    title: "All Access with Simon Doty",
    guest: "Simon Doty",
    duration: "42 min",
    date: "January 2026",
    description: "The progressive house rising star on Anjunadeep, studio process, and why Austin is becoming an electronic music hub.",
    featured: false,
  },
  {
    number: "EP 09",
    title: "All Access with Khruangbin",
    guest: "Khruangbin",
    duration: "52 min",
    date: "December 2025",
    description: "The Houston trio on their genre-defying sound, global influences, and the magic of live performance.",
    featured: false,
  },
  {
    number: "EP 08",
    title: "All Access with Floating Points",
    guest: "Floating Points (Sam Shepherd)",
    duration: "48 min",
    date: "November 2025",
    description: "The neuroscientist-turned-producer on Promises with Pharoah Sanders, the beauty of long-form composition, and DJ culture.",
    featured: false,
  },
  {
    number: "EP 07",
    title: "All Access with Peggy Gou",
    guest: "Peggy Gou",
    duration: "40 min",
    date: "October 2025",
    description: "The Korean-born, Berlin-based DJ on breaking barriers, her fashion line, and the global dance music community.",
    featured: false,
  },
];

export default function Podcast() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={PODCAST_IMG} alt="Podcast studio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-noir/20" />
        </div>
        <div className="relative container pb-12 md:pb-20 pt-32">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            <motion.p variants={fade} custom={0}
              className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-4"
            >
              The Podcast
            </motion.p>
            <motion.h1 variants={fade} custom={1}
              className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
            >
              All Access with
              <br />
              <span className="italic text-gold">Clarissa Cardenas</span>
            </motion.h1>
            <motion.p variants={fade} custom={2}
              className="font-body text-base text-white/50 max-w-md leading-relaxed mb-3"
            >
              Intimate conversations with breakthrough and legacy artists. Go beyond the music into the untold stories that shaped your favorite trailblazers.
            </motion.p>
            <motion.p variants={fade} custom={2.5}
              className="font-body text-sm text-white/30 mb-8"
            >
              Presented by SPIN Magazine
            </motion.p>
            <motion.div variants={fade} custom={3} className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://open.spotify.com/show/theconcertqueen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Listen on Spotify
              </a>
              <a
                href="https://podcasts.apple.com/us/podcast/all-access-with-clarissa-cardenas"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Apple Podcasts
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== EPISODES ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fade} custom={0}
            className="mb-10 md:mb-14"
          >
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-deep-red mb-3">
              Episodes
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-noir">
              Recent Episodes
            </h2>
          </motion.div>

          <div className="space-y-0">
            {episodes.map((ep, i) => (
              <motion.div
                key={ep.title}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}
                variants={fade} custom={i * 0.2}
                className={`group py-6 md:py-8 border-b border-noir/8 ${
                  ep.featured ? "bg-cream/50 -mx-4 px-4 md:-mx-6 md:px-6 border-t border-noir/8" : ""
                }`}
              >
                <div className="flex items-start gap-5 md:gap-8">
                  {/* Play icon */}
                  <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-noir flex items-center justify-center group-hover:bg-deep-red transition-colors duration-300 mt-1">
                    <Play size={18} className="text-gold group-hover:text-white transition-colors duration-300 ml-0.5" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-body text-[11px] tracking-[0.12em] uppercase text-gold-dark font-semibold">
                        {ep.number}
                      </span>
                      {ep.featured && (
                        <span className="font-body text-[10px] tracking-[0.1em] uppercase text-deep-red font-semibold bg-deep-red/10 px-2 py-0.5">
                          Latest
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-noir group-hover:text-deep-red transition-colors duration-300 mb-1">
                      {ep.title}
                    </h3>
                    <p className="font-body text-sm text-noir/40 mb-3">
                      {ep.duration} · {ep.date}
                    </p>
                    <p className="font-body text-sm text-noir/50 leading-relaxed max-w-2xl">
                      {ep.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT THE SHOW ===== */}
      <section className="py-16 md:py-24 bg-noir text-white">
        <div className="container">
          <div className="max-w-2xl">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            >
              <motion.p variants={fade} custom={0}
                className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-4"
              >
                About the Show
              </motion.p>
              <motion.h2 variants={fade} custom={1}
                className="font-display text-3xl md:text-4xl font-bold text-white mb-5"
              >
                Beyond the Music
              </motion.h2>
              <motion.p variants={fade} custom={2}
                className="font-body text-base text-white/50 leading-relaxed mb-5"
              >
                If you're a true music fan who craves authentic storytelling over surface-level interviews, this is your backstage pass. Each episode explores the artistic vision, personal influences, and cultural impact behind the music you love.
              </motion.p>
              <motion.p variants={fade} custom={3}
                className="font-body text-base text-white/50 leading-relaxed mb-8"
              >
                Featuring exclusive vinyl crate segments where artists reveal the records that shaped their sound, plus behind-the-scenes insights into their creative process.
              </motion.p>
              <motion.div variants={fade} custom={4}>
                <a
                  href="https://theconcertqueen.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link text-gold hover:text-gold-light"
                >
                  Subscribe for New Episodes
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
