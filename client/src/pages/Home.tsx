/*
 * HOMEPAGE: Editorial Noir — Premium Music Discovery Platform
 * 8 Sections: Hero → Choose Your City → Top Shows → Featured Interview →
 *             Venue Guide → Meet the Founder → Trusted By → Email Signup
 *
 * Design: Rolling Stone meets Netflix — bold, minimal, conversion-focused
 * Mobile-first, generous spacing, strong visual hierarchy
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Play, ArrowRight, ChevronRight, Music } from "lucide-react";

/* ── Fade-in animation ── */
const fade = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ── Asset URLs ── */
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/hero-concert-7Mabueq7uJitiCXb6NmUGd.webp";
const PODCAST_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/all-access-banner_4399a25e.png";
const VENUE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/venue-interior-ATXFmubS8U7nye2txhgMWE.webp";
const AUSTIN_SKYLINE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/austin-skyline-VaS4wYUu5NeJeLNcGPH3zd.webp";

const CITY_AUSTIN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/city-austin-87FQHw272JMjzCwz642o9e.webp";
const CITY_MIAMI = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/city-miami-E3bnFJgykGY6czhSFH2TNR.webp";
const CITY_LA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/city-la-CBE4AS67UYf6q4joQpCak7.webp";
const CITY_NYC = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/city-nyc-DJt6Sy7JzY9H5fiWorfvgN.webp";

/* ── Data ── */
const cities = [
  { name: "Austin", slug: "austin", image: CITY_AUSTIN, featured: true, label: "Live Music Capital" },
  { name: "Miami", slug: "miami", image: CITY_MIAMI, featured: false, label: "Coming 2026" },
  { name: "Los Angeles", slug: "los-angeles", image: CITY_LA, featured: false, label: "Coming 2026" },
  { name: "New York", slug: "new-york", image: CITY_NYC, featured: false, label: "Coming 2027" },
];

const topShows = [
  { artist: "Seismic Dance Event 8.0", date: "Apr 12", venue: "The Concourse Project", genre: "Electronic" },
  { artist: "Adam Beyer", date: "Apr 18", venue: "Kingdom Austin", genre: "Techno" },
  { artist: "Simon Doty", date: "May 3", venue: "The Venue ATX", genre: "Progressive House" },
  { artist: "Boys Noize", date: "May 15", venue: "Empire Control Room", genre: "Electronic" },
];

const partners = ["SPIN", "Live Nation", "HBO", "Capital One", "Verizon", "Honda", "Red Bull"];

export default function Home() {
  return (
    <div>

      {/* ═══════════════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════════════ */}
      <section className="relative h-screen max-h-[900px] min-h-[600px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Live concert" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/60 to-noir/30" />
        </div>

        <div className="relative container pb-14 md:pb-20 pt-32">
          <div className="max-w-2xl">
            <motion.h1
              initial="hidden" animate="visible" variants={fade} custom={0}
              className="font-display text-[2.75rem] sm:text-6xl md:text-7xl font-bold text-white leading-[0.95] mb-5"
            >
              Your Backstage<br />
              <span className="italic text-gold">Pass to Live Music</span>
            </motion.h1>

            <motion.p
              initial="hidden" animate="visible" variants={fade} custom={1}
              className="font-body text-base md:text-lg text-white/55 max-w-md mb-10 leading-relaxed"
            >
              Discover the best concerts, venues, and artists — curated by Concert Queen.
            </motion.p>

            <motion.div
              initial="hidden" animate="visible" variants={fade} custom={2}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link href="/city/austin" className="btn-primary justify-center">
                <MapPin size={15} />
                Explore Events
              </Link>
              <Link href="/podcast" className="btn-secondary justify-center">
                <Play size={15} />
                Listen to Podcast
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


      {/* ═══════════════════════════════════════════════════
          SECTION 2: CHOOSE YOUR CITY
          ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-10 md:mb-14"
          >
            <motion.p variants={fade} custom={0}
              className="font-body text-[11px] tracking-[0.2em] uppercase text-gold-dark mb-3"
            >
              Select Your City
            </motion.p>
            <motion.h2 variants={fade} custom={1}
              className="font-display text-3xl md:text-5xl font-bold text-noir"
            >
              Choose Your City
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {cities.map((city, i) => (
              <motion.div
                key={city.slug}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                variants={fade} custom={i * 0.15}
              >
                <Link
                  href={`/city/${city.slug}`}
                  className="group relative block aspect-[3/4] overflow-hidden"
                >
                  <img
                    src={city.image}
                    alt={city.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/30 to-transparent" />

                  {/* Featured badge */}
                  {city.featured && (
                    <div className="absolute top-3 left-3 md:top-4 md:left-4">
                      <span className="inline-block bg-gold text-noir font-body text-[10px] md:text-[11px] tracking-[0.1em] uppercase font-semibold px-2.5 py-1">
                        Featured
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-gold transition-colors duration-300">
                      {city.name}
                    </h3>
                    <p className="font-body text-xs text-white/50">
                      {city.label}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════
          SECTION 3: TOP SHOWS THIS WEEK
          ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14"
          >
            <div>
              <motion.p variants={fade} custom={0}
                className="font-body text-[11px] tracking-[0.2em] uppercase text-deep-red mb-3"
              >
                Austin
              </motion.p>
              <motion.h2 variants={fade} custom={1}
                className="font-display text-3xl md:text-5xl font-bold text-noir"
              >
                Top Shows This Week
              </motion.h2>
            </div>
            <motion.div variants={fade} custom={2}>
              <Link
                href="/city/austin"
                className="text-link text-noir/40 hover:text-gold-dark"
              >
                View All <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {topShows.map((show, i) => (
              <motion.a
                key={show.artist}
                href="https://www.ticketmaster.com"
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}
                variants={fade} custom={i * 0.12}
                className="group relative bg-noir overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  {/* Date + Genre */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-body text-[11px] tracking-[0.12em] uppercase text-gold font-semibold">
                      {show.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="font-body text-[11px] tracking-[0.08em] uppercase text-white/30">
                      {show.genre}
                    </span>
                  </div>

                  {/* Artist Name */}
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300 leading-tight">
                    {show.artist}
                  </h3>

                  {/* Venue */}
                  <p className="font-body text-sm text-white/40 flex items-center gap-2 mb-6">
                    <MapPin size={13} className="text-gold/60" />
                    {show.venue}
                  </p>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-2 font-body text-xs tracking-[0.1em] uppercase text-gold font-semibold group-hover:gap-3 transition-all duration-300">
                    Get Tickets
                    <ChevronRight size={14} />
                  </span>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════
          SECTION 4: FEATURED INTERVIEW
          ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-noir">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="mb-10 md:mb-14"
          >
            <motion.p variants={fade} custom={0}
              className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-3"
            >
              The Podcast
            </motion.p>
            <motion.h2 variants={fade} custom={1}
              className="font-display text-3xl md:text-5xl font-bold text-white"
            >
              Featured Interview
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
          >
            {/* Thumbnail */}
            <motion.div variants={fade} custom={0} className="relative aspect-video lg:aspect-auto overflow-hidden group">
              <img
                src={PODCAST_IMG}
                alt="All Access Podcast Studio"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-noir/30 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold/90 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <Play size={28} className="text-noir ml-1" fill="currentColor" />
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div variants={fade} custom={1} className="flex flex-col justify-center">
              <span className="font-body text-[11px] tracking-[0.12em] uppercase text-gold/60 mb-3">
                Latest Episode · 58 min
              </span>
              <h3 className="font-display text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                All Access with<br />
                <span className="italic text-gold">Boys Noize</span>
              </h3>
              <p className="font-body text-base text-white/45 leading-relaxed mb-8 max-w-md">
                Grammy-winning producer on TRON: Ares, Nine Inch Noize at Coachella, and exclusive crate digging at Waterloo Records.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/podcast" className="btn-primary justify-center">
                  <Play size={15} />
                  Watch
                </Link>
                <a
                  href="https://open.spotify.com/show/theconcertqueen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary justify-center"
                >
                  <Music size={15} />
                  Listen
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════
          SECTION 5: VENUE GUIDE
          ═══════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={VENUE_IMG} alt="Venue interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-noir/75" />
        </div>

        <div className="relative container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="max-w-xl"
          >
            <motion.p variants={fade} custom={0}
              className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-3"
            >
              The Venue Guide
            </motion.p>
            <motion.h2 variants={fade} custom={1}
              className="font-display text-3xl md:text-5xl font-bold text-white mb-5 leading-tight"
            >
              Discover the<br />Best Venues
            </motion.h2>
            <motion.p variants={fade} custom={2}
              className="font-body text-base text-white/50 mb-8 leading-relaxed"
            >
              The definitive guide to every stage across Austin's 10 council districts.
            </motion.p>
            <motion.div variants={fade} custom={3}>
              <Link href="/city/austin" className="btn-primary">
                Explore Venue Guide
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════
          SECTION 6: MEET THE FOUNDER
          ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              variants={fade} custom={0}
              className="aspect-[4/3] overflow-hidden"
            >
              <img
                src={AUSTIN_SKYLINE}
                alt="Clarissa Cardenas"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            >
              <motion.p variants={fade} custom={0}
                className="font-body text-[11px] tracking-[0.2em] uppercase text-gold-dark mb-3"
              >
                The Founder
              </motion.p>
              <motion.h2 variants={fade} custom={1}
                className="font-display text-3xl md:text-5xl font-bold text-noir mb-5 leading-tight"
              >
                Meet Clarissa<br />
                <span className="italic">Cardenas</span>
              </motion.h2>
              <motion.p variants={fade} custom={2}
                className="font-body text-base text-noir/55 leading-relaxed mb-8 max-w-md"
              >
                Commissioner. Journalist. Coach. Brand partner. The convergence of these roles is what makes Concert Queen Media unlike anything else in music media.
              </motion.p>

              {/* Credential Badges */}
              <motion.div variants={fade} custom={3} className="flex flex-wrap gap-2.5 mb-8">
                {[
                  "Austin Music Commissioner",
                  "SPIN Podcast Host",
                  "Certified Life Coach",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-noir text-white font-body text-xs tracking-[0.04em] font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {badge}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fade} custom={4}>
                <Link href="/about" className="btn-primary">
                  Learn More
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════
          SECTION 7: TRUSTED BY
          ═══════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-white border-t border-noir/5">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
            className="text-center"
          >
            <motion.p variants={fade} custom={0}
              className="font-body text-[11px] tracking-[0.2em] uppercase text-noir/40 mb-8 md:mb-10"
            >
              Trusted By
            </motion.p>
            <motion.div variants={fade} custom={1}
              className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-14 gap-y-5"
            >
              {partners.map((name) => (
                <span
                  key={name}
                  className="font-display text-xl md:text-2xl font-bold text-noir/40 hover:text-noir/70 transition-colors duration-300 tracking-wide"
                >
                  {name}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════
          SECTION 8: EMAIL SIGNUP
          ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-noir">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="max-w-xl mx-auto text-center"
          >
            <motion.p variants={fade} custom={0}
              className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-3"
            >
              The Newsletter
            </motion.p>
            <motion.h2 variants={fade} custom={1}
              className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
            >
              Get Your<br />
              <span className="italic text-gold">All Access Pass</span>
            </motion.h2>
            <motion.p variants={fade} custom={2}
              className="font-body text-base text-white/45 mb-10 leading-relaxed"
            >
              Exclusive events, insider picks, and artist interviews delivered to your inbox every week.
            </motion.p>

            <motion.div variants={fade} custom={3}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/8 border border-white/12 px-5 py-3.5 font-body text-sm text-white placeholder:text-white/30 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all duration-300"
              />
              <a
                href="https://theconcertqueen.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center whitespace-nowrap"
              >
                Subscribe
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
