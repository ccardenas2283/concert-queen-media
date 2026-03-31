/*
 * HOME PAGE: Editorial Noir Design
 * Sections: Hero → City Selector → Events → Podcast → Venue Guide → Founder → Partners → Email Capture
 * Copy: concise, confident, editorial. Authority + exclusivity + insider access.
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Play, MapPin, Calendar, ChevronRight } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/hero-concert-7Mabueq7uJitiCXb6NmUGd.webp";
const PODCAST_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/podcast-studio-mXJ9r7KtGHA5N5Cboki4Fi.webp";
const VENUE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/venue-interior-ATXFmubS8U7nye2txhgMWE.webp";
const AUSTIN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/austin-skyline-VaS4wYUu5NeJeLNcGPH3zd.webp";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const cities = [
  { slug: "austin", name: "Austin", tagline: "Live Music Capital of the World", active: true },
  { slug: "miami", name: "Miami", tagline: "Coming 2026", active: false },
  { slug: "los-angeles", name: "Los Angeles", tagline: "Coming 2026", active: false },
  { slug: "new-york", name: "New York", tagline: "Coming 2027", active: false },
];

const events = [
  { date: "APR 12", title: "Seismic Dance Event 8.0", venue: "The Concourse Project", genre: "Electronic" },
  { date: "APR 18", title: "Adam Beyer", venue: "Kingdom Austin", genre: "Techno" },
  { date: "MAY 03", title: "Simon Doty", venue: "The Venue ATX", genre: "Progressive House" },
  { date: "MAY 15", title: "Boys Noize", venue: "Empire Control Room", genre: "Electronic" },
];

const partners = ["SPIN", "Live Nation", "HBO", "Capital One", "Verizon", "Honda", "Red Bull"];

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative h-screen max-h-[900px] min-h-[600px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Live concert" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-noir/20" />
        </div>

        <div className="relative container pb-16 md:pb-24 pt-32">
          <div className="max-w-2xl">
            <motion.p
              initial="hidden" animate="visible" variants={fade} custom={0}
              className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-5"
            >
              Concert Queen Media
            </motion.p>

            <motion.h1
              initial="hidden" animate="visible" variants={fade} custom={1}
              className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[0.95] mb-6"
            >
              Your Backstage
              <br />
              <span className="italic text-gold">Pass to Live Music</span>
            </motion.h1>

            <motion.p
              initial="hidden" animate="visible" variants={fade} custom={2}
              className="font-body text-base md:text-lg text-white/60 max-w-md mb-10 leading-relaxed"
            >
              Curated events. Exclusive interviews. Insider access to the world's best music cities.
            </motion.p>

            <motion.div
              initial="hidden" animate="visible" variants={fade} custom={3}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link href="/city/austin" className="btn-primary">
                <MapPin size={15} />
                Explore Austin
              </Link>
              <Link href="/podcast" className="btn-secondary">
                <Play size={15} />
                Listen Now
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold/60 to-transparent" />
        </motion.div>
      </section>

      {/* ===== CITY SELECTOR ===== */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fade} custom={0}
            className="text-center mb-12 md:mb-16"
          >
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold-dark mb-3">
              Select Your City
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-noir">
              Where Are You Going?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {cities.map((city, i) => (
              <motion.div
                key={city.slug}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                variants={fade} custom={i * 0.5}
              >
                <Link
                  href={`/city/${city.slug}`}
                  className={`group block relative overflow-hidden transition-all duration-500 ${
                    city.active
                      ? "bg-noir text-white hover:shadow-2xl hover:shadow-noir/20"
                      : "bg-white text-noir border border-noir/8 hover:border-noir/20"
                  } p-6 md:p-8`}
                >
                  <div className="flex items-start justify-between mb-8">
                    <MapPin
                      size={20}
                      className={city.active ? "text-gold" : "text-noir/20"}
                    />
                    <ChevronRight
                      size={16}
                      className={`transition-transform duration-300 group-hover:translate-x-1 ${
                        city.active ? "text-gold" : "text-noir/30"
                      }`}
                    />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-1">
                    {city.name}
                  </h3>
                  <p className={`font-body text-xs tracking-wide ${
                    city.active ? "text-gold/80" : "text-noir/40"
                  }`}>
                    {city.tagline}
                  </p>
                  {city.active && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== UPCOMING EVENTS ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fade} custom={0}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14"
          >
            <div>
              <p className="font-body text-[11px] tracking-[0.2em] uppercase text-deep-red mb-3">
                Austin
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-noir">
                Upcoming Events
              </h2>
            </div>
            <a
              href="https://www.ticketmaster.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-noir/50 hover:text-gold-dark"
            >
              View All
              <ArrowRight size={14} />
            </a>
          </motion.div>

          <div className="space-y-0">
            {events.map((event, i) => (
              <motion.a
                key={event.title}
                href="https://www.ticketmaster.com"
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}
                variants={fade} custom={i * 0.3}
                className="group flex items-center gap-5 md:gap-8 py-5 md:py-6 border-b border-noir/8 hover:bg-cream/50 transition-all duration-300 -mx-4 px-4 md:-mx-6 md:px-6"
              >
                {/* Date */}
                <div className="shrink-0 w-14 md:w-16 text-center">
                  <span className="font-display text-2xl md:text-3xl font-bold text-noir leading-none block">
                    {event.date.split(" ")[1]}
                  </span>
                  <span className="font-body text-[10px] tracking-[0.15em] uppercase text-noir/40">
                    {event.date.split(" ")[0]}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg md:text-xl font-semibold text-noir group-hover:text-deep-red transition-colors duration-300 truncate">
                    {event.title}
                  </h3>
                  <p className="font-body text-sm text-noir/40 mt-0.5 flex items-center gap-2">
                    <MapPin size={12} />
                    {event.venue}
                    <span className="hidden sm:inline text-noir/20">·</span>
                    <span className="hidden sm:inline">{event.genre}</span>
                  </p>
                </div>

                {/* CTA */}
                <div className="shrink-0 hidden sm:block">
                  <span className="btn-primary text-xs py-2.5 px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Tickets
                  </span>
                </div>
                <ChevronRight size={18} className="shrink-0 text-noir/20 group-hover:text-gold transition-colors duration-300 sm:hidden" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PODCAST ===== */}
      <section className="py-16 md:py-24 bg-noir text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            >
              <motion.p variants={fade} custom={0}
                className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-4"
              >
                The Podcast
              </motion.p>
              <motion.h2 variants={fade} custom={1}
                className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-5"
              >
                All Access with
                <br />
                <span className="italic text-gold">Clarissa Cardenas</span>
              </motion.h2>
              <motion.p variants={fade} custom={2}
                className="font-body text-base text-white/50 mb-4 leading-relaxed max-w-md"
              >
                Intimate conversations with breakthrough and legacy artists. Go beyond the music into the untold stories that shaped your favorite trailblazers.
              </motion.p>
              <motion.p variants={fade} custom={2.5}
                className="font-body text-sm text-white/30 mb-8"
              >
                Presented by SPIN Magazine
              </motion.p>
              <motion.div variants={fade} custom={3} className="flex flex-col sm:flex-row gap-3">
                <Link href="/podcast" className="btn-primary">
                  <Play size={15} />
                  Latest Episode
                </Link>
                <a
                  href="https://open.spotify.com/show/theconcertqueen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Spotify
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              variants={fade} custom={2}
              className="relative"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={PODCAST_IMG}
                  alt="All Access Podcast Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/40 to-transparent" />
              </div>
              {/* Featured episode card */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-noir/90 backdrop-blur-sm border border-white/10 p-4 md:p-5">
                <p className="font-body text-[10px] tracking-[0.15em] uppercase text-gold mb-1.5">
                  Latest Episode
                </p>
                <h4 className="font-display text-lg font-semibold text-white mb-1">
                  All Access with Boys Noize
                </h4>
                <p className="font-body text-xs text-white/40">
                  58 min · March 2026
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== VENUE GUIDE ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={VENUE_IMG} alt="Austin venue" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-noir/85" />
        </div>

        <div className="relative container">
          <div className="max-w-xl">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            >
              <motion.p variants={fade} custom={0}
                className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-4"
              >
                The Venue Guide
              </motion.p>
              <motion.h2 variants={fade} custom={1}
                className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-5"
              >
                Every Stage.
                <br />
                Every District.
              </motion.h2>
              <motion.p variants={fade} custom={2}
                className="font-body text-base text-white/50 mb-8 leading-relaxed"
              >
                The definitive digital venue guide covering all 10 Austin council districts. From legendary honky-tonks to cutting-edge electronic warehouses.
              </motion.p>
              <motion.div variants={fade} custom={3}>
                <Link href="/city/austin" className="btn-primary">
                  <MapPin size={15} />
                  Explore Venues
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-3 gap-6 mt-16 md:mt-20 max-w-lg"
          >
            {[
              { num: "250+", label: "Venues" },
              { num: "10", label: "Districts" },
              { num: "Daily", label: "Updates" },
            ].map((stat, i) => (
              <motion.div key={stat.label} variants={fade} custom={i + 4}>
                <span className="font-display text-2xl md:text-3xl font-bold text-gold block">
                  {stat.num}
                </span>
                <span className="font-body text-xs text-white/40 uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              variants={fade} custom={1}
              className="relative overflow-hidden aspect-[4/5] lg:aspect-[3/4]"
            >
              <img
                src={AUSTIN_IMG}
                alt="Clarissa Cardenas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/30 to-transparent" />
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            >
              <motion.p variants={fade} custom={0}
                className="font-body text-[11px] tracking-[0.2em] uppercase text-gold-dark mb-4"
              >
                The Founder
              </motion.p>
              <motion.h2 variants={fade} custom={1}
                className="font-display text-3xl md:text-5xl font-bold text-noir leading-tight mb-5"
              >
                Clarissa
                <br />
                <span className="italic">Cardenas</span>
              </motion.h2>
              <motion.p variants={fade} custom={2}
                className="font-body text-base text-noir/50 mb-6 leading-relaxed"
              >
                Commissioner. Journalist. Coach. Brand partner. Platform builder. The convergence of these roles is what makes Concert Queen Media unlike anything else in music media.
              </motion.p>

              <motion.div variants={fade} custom={3} className="space-y-3 mb-8">
                {[
                  "Austin Music Commissioner, District 3",
                  "SPIN Magazine Podcast Host",
                  "iPEC Certified Life Coach",
                  "27K+ Instagram Community",
                ].map((role) => (
                  <div key={role} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                    <span className="font-body text-sm text-noir/60">{role}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fade} custom={4}>
                <Link href="/about" className="text-link text-noir hover:text-gold-dark">
                  Full Story
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TRUSTED BY ===== */}
      <section className="py-14 md:py-20 bg-white border-t border-noir/5">
        <div className="container">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fade} custom={0}
            className="font-body text-[11px] tracking-[0.2em] uppercase text-noir/30 text-center mb-10"
          >
            Trusted By
          </motion.p>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
          >
            {partners.map((p, i) => (
              <motion.span
                key={p}
                variants={fade}
                custom={i * 0.3}
                className="font-display text-xl md:text-2xl font-bold text-noir/15 hover:text-noir/50 transition-colors duration-500 select-none"
              >
                {p}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== EMAIL CAPTURE ===== */}
      <section className="py-16 md:py-24 bg-noir">
        <div className="container">
          <div className="max-w-lg mx-auto text-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <motion.p variants={fade} custom={0}
                className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-4"
              >
                The Newsletter
              </motion.p>
              <motion.h2 variants={fade} custom={1}
                className="font-display text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Get Your <span className="italic text-gold">All Access</span> Pass
              </motion.h2>
              <motion.p variants={fade} custom={2}
                className="font-body text-sm text-white/40 mb-8 leading-relaxed"
              >
                Exclusive coverage, artist interviews, and insider access delivered to your inbox every week.
              </motion.p>
              <motion.div variants={fade} custom={3}>
                <a
                  href="https://theconcertqueen.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Subscribe on Substack
                  <ArrowRight size={15} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
