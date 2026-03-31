/*
 * PODCAST PAGE: Velvet Frequency Design System
 * All Access with Clarissa Cardenas — episode showcase
 */

import { motion } from "framer-motion";
import { Play, ExternalLink, Clock, Calendar } from "lucide-react";

const PODCAST_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/podcast-studio-mXJ9r7KtGHA5N5Cboki4Fi.webp";
const VINYL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/editorial-music-ZPEoSqP8hqRSYCZKdRRn9C.webp";
const VENUE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/venue-interior-ATXFmubS8U7nye2txhgMWE.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7 },
  }),
};

const episodes = [
  {
    title: "All Access with Boys Noize",
    subtitle: "Presented by SPIN",
    date: "March 2026",
    duration: "58 min",
    description:
      "Alex Ridha, the Berlin-based producer who performs as Boys Noize, has had an unusually varied year. He's been opening for Nine Inch Nails on the Peel It Back tour, co-produced the Grammy-winning TRON: Ares soundtrack alongside Trent Reznor and Atticus Ross, and still manages to find time for the underground techno shows that built his reputation. Recorded at Waterloo Records in Austin.",
    image: PODCAST_IMG,
    featured: true,
    listenUrl: "https://open.spotify.com/show/theconcertqueen",
  },
  {
    title: "Adam Beyer: The Drumcode Legacy",
    subtitle: "Seismic Dance Event Preview",
    date: "February 2026",
    duration: "45 min",
    description:
      "The Swedish techno titan discusses 25 years of Drumcode Records, his Austin debut at Seismic Dance Event 8.0, and the future of warehouse raves in an era of festival dominance.",
    image: VINYL_IMG,
    featured: false,
    listenUrl: "https://open.spotify.com/show/theconcertqueen",
  },
  {
    title: "Simon Doty: Progressive Frequencies",
    subtitle: "Anjunadeep Spotlight",
    date: "January 2026",
    duration: "42 min",
    description:
      "The Canadian producer and Anjunadeep favorite opens up about his creative process, the emotional depth of progressive house, and why Austin's electronic scene is having a moment.",
    image: VENUE_IMG,
    featured: false,
    listenUrl: "https://open.spotify.com/show/theconcertqueen",
  },
];

export default function Podcast() {
  const featuredEp = episodes.find((e) => e.featured);
  const otherEps = episodes.filter((e) => !e.featured);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={PODCAST_IMG} alt="Podcast studio" className="w-full h-full object-cover" />
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
              The Podcast
            </motion.span>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="font-display text-5xl md:text-7xl font-bold text-cream leading-tight mb-6"
            >
              All Access with
              <br />
              <span className="italic text-gold">Clarissa Cardenas</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="font-body text-lg text-cream/70 max-w-xl leading-relaxed mb-8"
            >
              Intimate conversations with breakthrough and legacy artists who've set themselves apart from the rest. Go beyond the music and into the untold stories that shaped your favorite artists into timeless trailblazers.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://open.spotify.com/show/theconcertqueen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-burgundy-dark font-body font-semibold text-sm tracking-wide rounded-sm hover:bg-gold-light transition-all duration-300"
              >
                <Play size={16} />
                Listen on Spotify
              </a>
              <a
                href="https://podcasts.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-cream/30 text-cream font-body font-semibold text-sm tracking-wide rounded-sm hover:bg-cream/10 transition-all duration-300"
              >
                Apple Podcasts
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      {featuredEp && (
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
                Featured Episode
              </span>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={1}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-sm overflow-hidden border border-border hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredEp.image}
                  alt={featuredEp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/50 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-lg">
                    <Play size={20} className="text-burgundy-dark ml-0.5" />
                  </div>
                  <span className="font-body text-sm text-cream font-medium">{featuredEp.duration}</span>
                </div>
              </div>

              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="font-body text-xs tracking-[0.2em] uppercase text-gold-dark mb-2">
                  {featuredEp.subtitle}
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  {featuredEp.title}
                </h2>
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center gap-1.5 font-body text-sm text-charcoal-light">
                    <Calendar size={14} />
                    {featuredEp.date}
                  </span>
                  <span className="flex items-center gap-1.5 font-body text-sm text-charcoal-light">
                    <Clock size={14} />
                    {featuredEp.duration}
                  </span>
                </div>
                <p className="font-body text-base text-charcoal-light leading-relaxed mb-6">
                  {featuredEp.description}
                </p>
                <a
                  href={featuredEp.listenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-burgundy-dark text-cream font-body font-semibold text-sm rounded-sm hover:bg-burgundy transition-all duration-300 self-start"
                >
                  <Play size={16} />
                  Listen Now
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Episodes */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="font-display text-3xl md:text-4xl font-bold text-burgundy-dark mb-10"
          >
            All Episodes
          </motion.h2>

          <div className="space-y-6">
            {otherEps.map((ep, i) => (
              <motion.a
                key={ep.title}
                href={ep.listenUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="group flex flex-col md:flex-row gap-6 p-5 bg-cream rounded-sm border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-500"
              >
                <div className="relative w-full md:w-48 aspect-[16/9] md:aspect-square flex-shrink-0 overflow-hidden rounded-sm">
                  <img
                    src={ep.image}
                    alt={ep.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-burgundy-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                      <Play size={16} className="text-burgundy-dark ml-0.5" />
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <span className="font-body text-xs tracking-[0.2em] uppercase text-gold-dark">
                    {ep.subtitle}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-charcoal group-hover:text-burgundy transition-colors duration-300 mt-1 mb-2">
                    {ep.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex items-center gap-1.5 font-body text-sm text-charcoal-light">
                      <Calendar size={12} />
                      {ep.date}
                    </span>
                    <span className="flex items-center gap-1.5 font-body text-sm text-charcoal-light">
                      <Clock size={12} />
                      {ep.duration}
                    </span>
                  </div>
                  <p className="font-body text-sm text-charcoal-light leading-relaxed line-clamp-2">
                    {ep.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* About the Show */}
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
                className="font-display text-3xl md:text-4xl font-bold text-cream mb-6"
              >
                About the Show
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="font-accent text-xl italic text-cream/70 leading-relaxed mb-8"
              >
                If you're a true music fan who craves authentic storytelling over surface-level interviews, this is your backstage pass. Each episode features exclusive vinyl crate segments where artists reveal the records that shaped their sound, plus behind-the-scenes insights into their creative process.
              </motion.p>
              <motion.div variants={fadeUp} custom={2} className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://open.spotify.com/show/theconcertqueen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-burgundy-dark font-body font-semibold text-sm rounded-sm hover:bg-gold-light transition-all duration-300"
                >
                  Spotify
                  <ExternalLink size={14} />
                </a>
                <a
                  href="https://podcasts.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-cream/30 text-cream font-body font-semibold text-sm rounded-sm hover:bg-cream/10 transition-all duration-300"
                >
                  Apple Podcasts
                  <ExternalLink size={14} />
                </a>
                <a
                  href="https://www.youtube.com/@theconcertqueen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-cream/30 text-cream font-body font-semibold text-sm rounded-sm hover:bg-cream/10 transition-all duration-300"
                >
                  YouTube
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
