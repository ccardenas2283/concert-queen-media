/*
 * HOME PAGE: Velvet Frequency Design System
 * - Cinematic hero with parallax concert photo
 * - Event discovery focus with Ticketmaster affiliate CTA
 * - Featured podcast episodes
 * - Brand partner showcase
 * - Newsletter signup
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Play, MapPin, Calendar, Mic2, Star, ExternalLink } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/hero-concert-7Mabueq7uJitiCXb6NmUGd.webp";
const AUSTIN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/austin-skyline-VaS4wYUu5NeJeLNcGPH3zd.webp";
const PODCAST_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/podcast-studio-mXJ9r7KtGHA5N5Cboki4Fi.webp";
const VENUE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/venue-interior-ATXFmubS8U7nye2txhgMWE.webp";
const VINYL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/editorial-music-ZPEoSqP8hqRSYCZKdRRn9C.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7 },
  }),
};

const upcomingEvents = [
  {
    date: "APR 12",
    artist: "Seismic Dance Event 8.0",
    venue: "The Concourse Project",
    genre: "Electronic / Techno",
    ticketUrl: "https://www.ticketmaster.com",
  },
  {
    date: "APR 18",
    artist: "Adam Beyer",
    venue: "Kingdom Austin",
    genre: "Techno",
    ticketUrl: "https://www.ticketmaster.com",
  },
  {
    date: "MAY 03",
    artist: "Simon Doty",
    venue: "The Venue ATX",
    genre: "Progressive House",
    ticketUrl: "https://www.ticketmaster.com",
  },
  {
    date: "MAY 15",
    artist: "Boys Noize",
    venue: "Empire Control Room",
    genre: "Electronic",
    ticketUrl: "https://www.ticketmaster.com",
  },
];

const podcastEpisodes = [
  {
    title: "All Access with Boys Noize",
    subtitle: "Presented by SPIN",
    description: "Grammy-winning TRON: Ares soundtrack, Nine Inch Noize at Coachella, and exclusive crate digging at Waterloo Records.",
    image: PODCAST_IMG,
  },
  {
    title: "Adam Beyer: The Drumcode Legacy",
    subtitle: "Seismic Dance Event Preview",
    description: "The Swedish techno titan discusses 25 years of Drumcode, his Austin debut, and the future of warehouse raves.",
    image: VINYL_IMG,
  },
];

const partners = [
  "SPIN Magazine",
  "Live Nation",
  "HBO",
  "Capital One",
  "Verizon",
  "Honda",
  "Red Bull Music",
];

export default function Home() {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Live concert"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark via-burgundy-dark/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-burgundy-dark/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative container pb-20 md:pb-28 pt-32">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
            >
              <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Austin's Premier Music Media Brand
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-[0.95] mb-6"
            >
              Your Backstage
              <br />
              <span className="italic text-gold">Pass to Austin</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="font-body text-lg md:text-xl text-cream/80 max-w-xl mb-8 leading-relaxed"
            >
              Live music discovery, exclusive artist interviews, and the definitive venue guide for the Live Music Capital of the World.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/venues"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-burgundy-dark font-body font-semibold text-sm tracking-wide rounded-sm hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                <MapPin size={16} />
                Explore Venues
              </Link>
              <Link
                href="/podcast"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-cream/30 text-cream font-body font-semibold text-sm tracking-wide rounded-sm hover:bg-cream/10 transition-all duration-300"
              >
                <Play size={16} />
                Listen Now
              </Link>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <div className="w-5 h-8 border-2 border-cream/30 rounded-full flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1.5 bg-gold rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== UPCOMING EVENTS ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
          >
            <div>
              <span className="font-body text-xs tracking-[0.3em] uppercase text-gold-dark mb-2 block">
                What's Coming Up
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-burgundy-dark">
                Upcoming Events
              </h2>
            </div>
            <a
              href="https://www.ticketmaster.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-burgundy hover:text-gold-dark transition-colors duration-300"
            >
              View All on Ticketmaster
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingEvents.map((event, i) => (
              <motion.a
                key={event.artist}
                href={event.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="group flex gap-5 p-5 bg-white rounded-sm border border-border hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 transition-all duration-500"
              >
                {/* Date Block */}
                <div className="flex-shrink-0 w-16 h-16 bg-burgundy-dark rounded-sm flex flex-col items-center justify-center">
                  <span className="font-display text-xs text-gold uppercase tracking-wider">
                    {event.date.split(" ")[0]}
                  </span>
                  <span className="font-display text-xl font-bold text-cream leading-none">
                    {event.date.split(" ")[1]}
                  </span>
                </div>

                {/* Event Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg font-semibold text-charcoal group-hover:text-burgundy transition-colors duration-300 truncate">
                    {event.artist}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="font-body text-sm text-charcoal-light flex items-center gap-1">
                      <MapPin size={12} />
                      {event.venue}
                    </span>
                    <span className="font-body text-xs text-charcoal-light/60 px-2 py-0.5 bg-cream-dark rounded-sm">
                      {event.genre}
                    </span>
                  </div>
                </div>

                {/* Ticket CTA */}
                <div className="flex-shrink-0 self-center">
                  <span className="inline-flex items-center gap-1 px-4 py-2 bg-gold/10 text-gold-dark font-body text-xs font-semibold rounded-sm group-hover:bg-gold group-hover:text-burgundy-dark transition-all duration-300">
                    Get Tickets
                    <ExternalLink size={12} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VENUE GUIDE TEASER ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={VENUE_IMG}
            alt="Austin venue"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-burgundy-dark/80" />
        </div>

        <div className="relative container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                Concert Queen Venue Guide
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6"
              >
                Discover Austin's
                <br />
                <span className="italic text-gold">Best Stages</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="font-body text-lg text-cream/70 mb-8 max-w-lg leading-relaxed"
              >
                The definitive digital venue guide covering all 10 Austin council districts. From legendary honky-tonks to cutting-edge electronic warehouses — find your next unforgettable night out.
              </motion.p>
              <motion.div variants={fadeUp} custom={3}>
                <Link
                  href="/venues"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-burgundy-dark font-body font-semibold text-sm tracking-wide rounded-sm hover:bg-gold-light transition-all duration-300"
                >
                  <MapPin size={16} />
                  Explore the Guide
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={2}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {[
                { icon: MapPin, label: "250+ Venues", desc: "Across all 10 districts" },
                { icon: Calendar, label: "Live Events", desc: "Updated daily" },
                { icon: Star, label: "Curated Picks", desc: "Editor's selections" },
                { icon: Mic2, label: "Artist Spotlights", desc: "Local & touring" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  custom={i + 2}
                  className="glass-dark rounded-sm p-5 border border-cream/10"
                >
                  <item.icon size={24} className="text-gold mb-3" />
                  <h4 className="font-display text-lg font-semibold text-cream mb-1">
                    {item.label}
                  </h4>
                  <p className="font-body text-sm text-cream/50">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PODCAST SECTION ===== */}
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
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold-dark mb-2 block">
              All Access with Clarissa Cardenas
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-burgundy-dark mb-4">
              Latest Episodes
            </h2>
            <p className="font-body text-lg text-charcoal-light max-w-2xl mx-auto">
              Intimate conversations with breakthrough and legacy artists. Go beyond the music and into the untold stories that shaped your favorite artists.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {podcastEpisodes.map((ep, i) => (
              <motion.div
                key={ep.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="group bg-white rounded-sm overflow-hidden border border-border hover:shadow-xl hover:shadow-burgundy/5 transition-all duration-500"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={ep.image}
                    alt={ep.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 glass-dark rounded-sm text-cream font-body text-xs font-medium">
                      <Play size={12} className="text-gold" />
                      {ep.subtitle}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-charcoal group-hover:text-burgundy transition-colors duration-300 mb-2">
                    {ep.title}
                  </h3>
                  <p className="font-body text-sm text-charcoal-light leading-relaxed">
                    {ep.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="text-center mt-10"
          >
            <Link
              href="/podcast"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-burgundy hover:text-gold-dark transition-colors duration-300"
            >
              View All Episodes
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT / AUTHORITY SECTION ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={AUSTIN_IMG}
            alt="Austin skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-burgundy-dark/85" />
        </div>

        <div className="relative container">
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
                Meet the Founder
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-display text-4xl md:text-5xl font-bold text-cream mb-6"
              >
                Clarissa Cardenas
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="font-accent text-xl md:text-2xl italic text-cream/80 mb-8 leading-relaxed"
              >
                "Nobody else is the Commissioner AND the journalist AND the coach AND the brand partner AND the platform builder. That convergence is the moat."
              </motion.p>
              <motion.div
                variants={fadeUp}
                custom={3}
                className="flex flex-wrap justify-center gap-6 mb-10"
              >
                {[
                  "Austin Music Commissioner, D3",
                  "SPIN Magazine Podcast Host",
                  "iPEC Certified Life Coach",
                  "27K+ Instagram Community",
                ].map((role) => (
                  <span
                    key={role}
                    className="font-body text-sm text-cream/60 border border-cream/20 px-4 py-1.5 rounded-sm"
                  >
                    {role}
                  </span>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} custom={4}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-burgundy-dark font-body font-semibold text-sm tracking-wide rounded-sm hover:bg-gold-light transition-all duration-300"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== BRAND PARTNERS ===== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-10"
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light">
              Trusted By
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
          >
            {partners.map((partner, i) => (
              <motion.span
                key={partner}
                variants={fadeUp}
                custom={i * 0.5}
                className="font-display text-lg md:text-xl font-semibold text-charcoal/30 hover:text-burgundy transition-colors duration-500"
              >
                {partner}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== NEWSLETTER CTA ===== */}
      <section className="py-20 md:py-24 bg-burgundy-dark">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span
                variants={fadeUp}
                custom={0}
                className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3 block"
              >
                Never Miss a Show
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-display text-4xl md:text-5xl font-bold text-cream mb-4"
              >
                Get Your <span className="italic text-gold">All Access</span> Pass
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="font-body text-lg text-cream/60 mb-8"
              >
                Exclusive concert coverage, artist interviews, venue discoveries, and Austin music policy updates delivered to your inbox.
              </motion.p>
              <motion.div variants={fadeUp} custom={3}>
                <a
                  href="https://theconcertqueen.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-burgundy-dark font-body font-semibold text-sm tracking-wide rounded-sm hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                >
                  Subscribe on Substack
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
