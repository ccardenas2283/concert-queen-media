/*
 * HOMEPAGE: High-Conversion Austin Event Discovery
 * Single focus: "What's happening in Austin this week?" → Get Tickets
 * 
 * Structure:
 * 1. Minimal Hero (5 sec read)
 * 2. Current/Upcoming Shows (THIS WEEK) — primary conversion driver
 * 3. City Selector (Austin featured, others coming soon)
 * 4. Festivals (ACL, SXSW, etc. with Ticketmaster links)
 * 5. Venue Guide
 * 6. Email Capture (aggressive)
 * 7. Footer
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, ArrowRight, ChevronRight, Music, Mail } from "lucide-react";
import { useState } from "react";

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
const VENUE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/venue-interior-ATXFmubS8U7nye2txhgMWE.webp";

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

const thisWeekShows = [
  {
    fullDate: "Saturday, April 12",
    dateShort: "Apr 12",
    events: [
      { artist: "Seismic Dance Event 8.0", venue: "The Concourse Project", genre: "Electronic", ticketmasterUrl: "https://www.ticketmaster.com" },
    ]
  },
  {
    fullDate: "Friday, April 18",
    dateShort: "Apr 18",
    events: [
      { artist: "Adam Beyer", venue: "Kingdom Austin", genre: "Techno", ticketmasterUrl: "https://www.ticketmaster.com" },
    ]
  },
  {
    fullDate: "Saturday, May 3",
    dateShort: "May 3",
    events: [
      { artist: "Simon Doty", venue: "The Venue ATX", genre: "Progressive House", ticketmasterUrl: "https://www.ticketmaster.com" },
    ]
  },
  {
    fullDate: "Wednesday, May 15",
    dateShort: "May 15",
    events: [
      { artist: "Boys Noize", venue: "Empire Control Room", genre: "Electronic", ticketmasterUrl: "https://www.ticketmaster.com" },
    ]
  },
];

const festivals = [
  { name: "ACL Festival", date: "Oct 2026", ticketmasterUrl: "https://www.ticketmaster.com" },
  { name: "SXSW", date: "Mar 2026", ticketmasterUrl: "https://www.ticketmaster.com" },
  { name: "Levitation", date: "May 2026", ticketmasterUrl: "https://www.ticketmaster.com" },
  { name: "Seismic Dance Event", date: "Apr 2026", ticketmasterUrl: "https://www.ticketmaster.com" },
  { name: "Float Fest", date: "Jul 2026", ticketmasterUrl: "https://www.ticketmaster.com" },
  { name: "Euphoria", date: "May 2026", ticketmasterUrl: "https://www.ticketmaster.com" },
  { name: "Oblivion Access", date: "Jun 2026", ticketmasterUrl: "https://www.ticketmaster.com" },
];

const partners = ["SPIN", "Live Nation", "HBO", "Capital One", "Verizon", "Honda", "Red Bull"];

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-noir">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 1: MINIMAL HERO — "What's happening this week?" */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen max-h-[900px] flex items-center justify-center overflow-hidden bg-noir">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMG}
            alt="Austin Live Music"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-noir/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container max-w-3xl text-center px-6 py-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            What's Happening
            <br />
            <span className="text-gold italic">This Week</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-lg text-white/70 mb-10 leading-relaxed"
          >
            Austin's best concerts, festivals, and live music. Get tickets instantly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#shows" className="btn-primary justify-center">
              <MapPin className="w-5 h-5" />
              See This Week's Shows
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 2: THIS WEEK'S SHOWS — PRIMARY CONVERSION DRIVER */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="shows" className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-noir mb-3">
              This Week in Austin
            </h2>
            <p className="font-body text-lg text-noir/60 mb-12">
              Current and upcoming shows. Get tickets now.
            </p>
          </motion.div>

          <div className="space-y-12">
            {thisWeekShows.map((dateGroup, dateIdx) => (
              <motion.div
                key={dateIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: dateIdx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Date Header */}
                <div className="border-b border-white/20 pb-4 mb-6">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                    {dateGroup.fullDate}
                  </h3>
                </div>

                {/* Events for this date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {dateGroup.events.map((event, eventIdx) => (
                    <motion.div
                      key={eventIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: eventIdx * 0.08, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="bg-noir text-white p-8 rounded-lg hover:shadow-lg hover:border-gold/50 border border-white/10 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-2">
                            {event.genre}
                          </p>
                          <h4 className="font-display text-2xl font-bold mb-2">
                            {event.artist}
                          </h4>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 mb-6 text-white/70 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gold" />
                          {event.venue}
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <a
                          href={event.ticketmasterUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary justify-center w-full"
                        >
                          Get Tickets
                        </a>
                        <a
                          href="https://www.stubhub.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold text-sm hover:text-gold/80 transition-colors text-center flex items-center justify-center gap-1"
                        >
                          Sold out? Find resale on StubHub <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link href="/city/austin" className="btn-secondary inline-flex items-center gap-2">
              View All Austin Shows <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 3: CHOOSE YOUR CITY */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-noir">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
              Choose Your City
            </h2>
            <p className="font-body text-lg text-white/60 mb-12">
              Austin is our home. Coming soon: Miami, LA, NYC.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href={`/city/${city.slug}`}>
                  <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                    <img
                      src={city.image}
                      alt={city.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-noir/40 group-hover:bg-noir/50 transition-colors"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <h3 className="font-display text-3xl font-bold text-white mb-2">
                        {city.name}
                      </h3>
                      <p className="text-gold text-sm font-semibold">
                        {city.label}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 4: FESTIVALS */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-noir mb-3">
              Austin Festivals
            </h2>
            <p className="font-body text-lg text-noir/60 mb-12">
              Major festivals and events. Get tickets and insider coverage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivals.map((festival, idx) => (
              <motion.a
                key={idx}
                href={festival.ticketmasterUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-noir text-white p-8 rounded-lg hover:shadow-lg hover:bg-noir/90 transition-all group"
              >
                <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-gold transition-colors">
                  {festival.name}
                </h3>
                <p className="text-white/60 mb-4">{festival.date}</p>
                <div className="flex items-center gap-2 text-gold text-sm font-semibold">
                  Get Tickets <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 5: VENUE GUIDE */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-noir">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Discover the Best Venues
              </h2>
              <p className="font-body text-lg text-white/70 mb-8 leading-relaxed">
                The definitive guide to every stage across Austin. Capacity, acoustics, history, and what's coming.
              </p>
              <Link href="/city/austin" className="btn-primary inline-flex items-center gap-2">
                Explore Venue Guide <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden"
            >
              <img
                src={VENUE_IMG}
                alt="Austin Venues"
                className="w-full h-96 object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 6: EMAIL CAPTURE — AGGRESSIVE */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-noir mb-4">
              Get the Austin Concert Calendar
            </h2>
            <p className="font-body text-lg text-noir/60 mb-10">
              Every Monday morning: what's happening this week, insider picks, and exclusive content.
            </p>

            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 bg-white border-2 border-noir/20 rounded-lg font-body text-noir placeholder-noir/40 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="btn-primary px-8 py-4 whitespace-nowrap justify-center flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Subscribe
              </button>
            </form>

            {subscribed && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gold font-semibold mt-4"
              >
                ✓ Check your email to confirm
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 7: TRUSTED BY */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-noir border-t border-white/10">
        <div className="container">
          <p className="font-body text-sm text-white/50 uppercase tracking-widest text-center mb-8">
            Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-white/40 font-semibold text-sm hover:text-gold transition-colors"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
