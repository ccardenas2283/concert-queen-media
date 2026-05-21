/*
 * HOMEPAGE: High-Conversion Austin Event Discovery
 * Single focus: "What's happening in Austin this week?" → Get Tickets
 * 
 * Structure:
 * 1. Clean Hero (Austin Tourism style) — professional, elegant
 * 2. Current/Upcoming Shows (THIS WEEK) — primary conversion driver
 * 3. Austin Festivals (ACL, SXSW, etc. with Ticketmaster links)
 * 4. Venue Guide
 * 5. Email Capture (aggressive)
 * 6. Footer
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, ArrowRight, ChevronRight, Music, Mail, Calendar, Heart, Share2 } from "lucide-react";
import { useState, useEffect } from "react";

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

/* ── Data ── */
const thisWeekShows = [
  {
    fullDate: "Wednesday, May 20",
    dateShort: "May 20",
    events: [
      { artist: "Seismic Dance Event 8.0", venue: "The Concourse Project", genre: "Electronic", ticketmasterUrl: "https://www.ticketmaster.com", stubhubUrl: "https://www.stubhub.com/search?q=" },
    ]
  },
  {
    fullDate: "Thursday, May 21",
    dateShort: "May 21",
    events: [
      { artist: "Adam Beyer", venue: "Kingdom Austin", genre: "Techno", ticketmasterUrl: "https://www.ticketmaster.com", stubhubUrl: "https://www.stubhub.com/search?q=" },
    ]
  },
  {
    fullDate: "Friday, May 22",
    dateShort: "May 22",
    events: [
      { artist: "Simon Doty", venue: "The Venue ATX", genre: "Progressive House", ticketmasterUrl: "https://www.ticketmaster.com", stubhubUrl: "https://www.stubhub.com/search?q=" },
    ]
  },
  {
    fullDate: "Saturday, May 23",
    dateShort: "May 23",
    events: [
      { artist: "Boys Noize", venue: "Empire Control Room", genre: "Electronic", ticketmasterUrl: "https://www.ticketmaster.com", stubhubUrl: "https://www.stubhub.com/search?q=" },
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
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedVenue, setSelectedVenue] = useState<string | null>(null);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('concertFavorites');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  // Save favorites to localStorage
  const toggleFavorite = (eventId: string) => {
    const updated = favorites.includes(eventId)
      ? favorites.filter(id => id !== eventId)
      : [...favorites, eventId];
    setFavorites(updated);
    localStorage.setItem('concertFavorites', JSON.stringify(updated));
  };

  const isFavorited = (eventId: string) => favorites.includes(eventId);

  // Extract unique genres and venues from thisWeekShows
  const allGenres = Array.from(new Set(
    thisWeekShows.flatMap(day => day.events.map(e => e.genre))
  )).sort();
  
  const allVenues = Array.from(new Set(
    thisWeekShows.flatMap(day => day.events.map(e => e.venue))
  )).sort();

  // Filter events based on selected genre and venue
  const filteredShows = thisWeekShows.map(day => ({
    ...day,
    events: day.events.filter(event => {
      const genreMatch = !selectedGenre || event.genre === selectedGenre;
      const venueMatch = !selectedVenue || event.venue === selectedVenue;
      return genreMatch && venueMatch;
    })
  })).filter(day => day.events.length > 0);

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
      {/* SECTION 1: CLEAN HERO — Austin Tourism style, elegant & professional */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-cream to-white/95 py-24 md:py-32">
        {/* Content */}
        <div className="container max-w-4xl text-center px-6">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
              Live Music Discovery
            </p>
            <h1 className="font-display text-6xl md:text-7xl font-bold text-noir mb-4 leading-tight">
              Concert Queen
            </h1>
            <div className="h-1 w-24 bg-gold mx-auto mb-8"></div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-2xl md:text-3xl text-noir/80 mb-6 leading-relaxed font-light"
          >
            Discover Austin's best concerts, festivals, and live music.
          </motion.p>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-base text-noir/60 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Curated by Clarissa Cardenas, Austin Music Commissioner & SPIN Podcast Host. Get tickets instantly.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
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
      {/* SECTION 2: JUST ANNOUNCED — NEW SHOWS */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-noir">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
              New Releases
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Just Announced
            </h2>
            <p className="font-body text-base text-white/60">
              Fresh announcements. Get tickets before they sell out.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { artist: "[ARTIST 1]", venue: "[VENUE 1]", date: "[DATE]", genre: "[GENRE]", ticketmasterUrl: "https://www.ticketmaster.com" },
              { artist: "[ARTIST 2]", venue: "[VENUE 2]", date: "[DATE]", genre: "[GENRE]", ticketmasterUrl: "https://www.ticketmaster.com" },
              { artist: "[ARTIST 3]", venue: "[VENUE 3]", date: "[DATE]", genre: "[GENRE]", ticketmasterUrl: "https://www.ticketmaster.com" },
              { artist: "[ARTIST 4]", venue: "[VENUE 4]", date: "[DATE]", genre: "[GENRE]", ticketmasterUrl: "https://www.ticketmaster.com" },
            ].map((show, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-gold/50 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="font-display text-lg font-bold text-white group-hover:text-gold transition-colors">
                      {show.artist}
                    </h4>
                    <p className="text-white/60 text-sm flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" />
                      {show.venue}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleFavorite(`announced-${idx}`)}
                    className="text-white/40 hover:text-gold transition-colors"
                    aria-label="Add to favorites"
                  >
                    <Heart className={`w-5 h-5 ${isFavorited(`announced-${idx}`) ? 'fill-gold text-gold' : ''}`} />
                  </button>
                </div>
                <p className="text-gold text-xs uppercase tracking-wider font-semibold mb-4">
                  {show.date} • {show.genre}
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={show.ticketmasterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-semibold text-sm"
                  >
                    Get Tickets <ArrowRight className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => {
                      const shareText = `Check out ${show.artist} at ${show.venue} on Concert Queen! Get tickets now.`;
                      if (navigator.share) {
                        navigator.share({
                          title: show.artist,
                          text: shareText,
                          url: window.location.href
                        });
                      } else {
                        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.href)}`;
                        window.open(url, '_blank');
                      }
                    }}
                    className="text-gold/60 hover:text-gold transition-colors flex items-center gap-1"
                    title="Share this event"
                  >
                    <Share2 className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 3: THIS WEEK'S SHOWS — PRIMARY CONVERSION DRIVER */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="shows" className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
              Current Events
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-noir mb-4">
              This Week in Austin
            </h2>
            <p className="font-body text-base text-noir/60">
              Current and upcoming shows. Get tickets now.
            </p>
          </motion.div>

          {/* Filter Controls */}
          <div className="mt-8 flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-noir/50 font-semibold mb-3">Filter by Genre</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedGenre(null)}
                  className={`px-3 py-1 text-sm border transition-all ${
                    selectedGenre === null
                      ? 'bg-gold text-noir border-gold'
                      : 'border-noir/20 text-noir/60 hover:border-gold'
                  }`}
                >
                  All
                </button>
                {allGenres.map(genre => (
                  <button
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    className={`px-3 py-1 text-sm border transition-all ${
                      selectedGenre === genre
                        ? 'bg-gold text-noir border-gold'
                        : 'border-noir/20 text-noir/60 hover:border-gold'
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-noir/50 font-semibold mb-3">Filter by Venue</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedVenue(null)}
                  className={`px-3 py-1 text-sm border transition-all ${
                    selectedVenue === null
                      ? 'bg-gold text-noir border-gold'
                      : 'border-noir/20 text-noir/60 hover:border-gold'
                  }`}
                >
                  All
                </button>
                {allVenues.map(venue => (
                  <button
                    key={venue}
                    onClick={() => setSelectedVenue(venue)}
                    className={`px-3 py-1 text-sm border transition-all ${
                      selectedVenue === venue
                        ? 'bg-gold text-noir border-gold'
                        : 'border-noir/20 text-noir/60 hover:border-gold'
                    }`}
                  >
                    {venue}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-0 mt-8">
            {filteredShows.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-noir/60">No events match your filters. Try adjusting your selection.</p>
              </div>
            ) : (
              filteredShows.map((dateGroup, dateIdx) => (
                <motion.div
                  key={dateIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: dateIdx * 0.08, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Date Header */}
                  <div className="bg-white/5 border-t border-b border-noir/10 py-4 px-6 sticky top-0 z-10">
                    <p className="text-gold font-semibold text-xs uppercase tracking-widest mb-1">
                      {dateGroup.fullDate}
                    </p>
                  </div>

                {/* Events for this date */}
                <div className="divide-y divide-noir/10">
                  {dateGroup.events.map((event, eventIdx) => (
                    <motion.div
                      key={eventIdx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: eventIdx * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="py-5 px-6 hover:bg-noir/5 transition-colors group"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        {/* Left: Artist & Venue */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display text-lg md:text-xl font-bold text-noir truncate group-hover:text-gold transition-colors">
                            {event.artist}
                          </h4>
                          <div className="flex items-center gap-2 text-noir/60 text-sm mt-1">
                            <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                            <span className="truncate">{event.venue}</span>
                          </div>
                        </div>

                        {/* Right: Genre & CTA */}
                        <div className="flex flex-col items-start md:items-end gap-2 md:justify-end">
                          <div className="flex items-center gap-3">
                            <span className="text-gold text-xs uppercase tracking-wider font-semibold whitespace-nowrap">
                              {event.genre}
                            </span>
                            <button
                              onClick={() => toggleFavorite(`${event.artist}-${event.venue}`)}
                              className="p-1.5 hover:bg-noir/5 rounded transition-colors flex-shrink-0"
                              title={isFavorited(`${event.artist}-${event.venue}`) ? "Remove from favorites" : "Add to favorites"}
                            >
                              <Heart
                                className={`w-4 h-4 transition-colors ${
                                  isFavorited(`${event.artist}-${event.venue}`)
                                    ? 'fill-gold text-gold'
                                    : 'text-noir/30 hover:text-gold'
                                }`}
                              />
                            </button>
                            <a
                              href={event.ticketmasterUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2 bg-gold text-noir font-semibold text-sm rounded hover:bg-gold/90 transition-colors whitespace-nowrap"
                            >
                              Get Tickets <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                          {/* StubHub Resale Fallback & Save to Calendar */}
                          <div className="flex flex-col items-start md:items-end gap-2">
                            <a
                              href={event.stubhubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-noir/50 hover:text-gold text-xs transition-colors flex items-center gap-1"
                            >
                              Sold out? Find resale on StubHub →
                            </a>
                            <button
                              onClick={() => {
                                const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.artist + ' at ' + event.venue)}&dates=20260415T190000Z/20260415T220000Z`;
                                window.open(googleCalendarUrl, '_blank');
                              }}
                              className="text-noir/50 hover:text-gold text-xs transition-colors flex items-center gap-1"
                            >
                              <Calendar className="w-3 h-3" />
                              Save to Calendar
                            </button>
                            <button
                              onClick={() => {
                                const shareText = `Check out ${event.artist} at ${event.venue} on Concert Queen! Get tickets now.`;
                                if (navigator.share) {
                                  navigator.share({
                                    title: event.artist,
                                    text: shareText,
                                    url: window.location.href
                                  });
                                } else {
                                  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.href)}`;
                                  window.open(url, '_blank');
                                }
                              }}
                              className="text-noir/50 hover:text-gold text-xs transition-colors flex items-center gap-1"
                              title="Share this event"
                            >
                              <Share2 className="w-3 h-3" />
                              Share
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
            )}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center border-t border-noir/10 pt-12"
          >
            <Link href="/city/austin" className="btn-secondary inline-flex items-center gap-2">
              View All Austin Shows <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 3: AUSTIN FESTIVALS (MOVED UP) */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-noir">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
              Major Events
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Austin Festivals
            </h2>
            <p className="font-body text-base text-white/60 max-w-2xl mx-auto">
              Major festivals and events. Get tickets and insider coverage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivals.map((festival, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 text-white p-8 rounded-lg hover:shadow-lg border border-white/10 hover:border-gold/50 transition-all"
              >
                <h3 className="font-display text-2xl font-bold mb-3">
                  {festival.name}
                </h3>
                <p className="text-gold text-sm uppercase tracking-wider font-semibold mb-6">
                  {festival.date}
                </p>
                <a
                  href={festival.ticketmasterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-semibold"
                >
                  Get Tickets <ArrowRight className="w-4 h-4" />
                </a>
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
            <Link href="/festivals" className="btn-primary inline-flex items-center gap-2">
              View All Festivals <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 4: VENUE GUIDE */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <img
                src={VENUE_IMG}
                alt="Austin Venues"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
                Discovery
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-noir mb-6">
                Discover the Best Venues
              </h2>
              <p className="font-body text-base text-noir/70 mb-8 leading-relaxed">
                The definitive guide to every stage across Austin. Capacity, acoustics, history, and what's coming.
              </p>
              <Link href="/city/austin" className="btn-primary inline-flex items-center gap-2">
                Explore Venue Guide <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 5: EMAIL CAPTURE */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-noir">
        <div className="container max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
              Stay Connected
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Get the Austin Concert Calendar
            </h2>
            <p className="font-body text-base text-white/60">
              Every Monday morning: what's happening this week, insider picks, and exclusive content.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleEmailSubmit}
            className="flex flex-col sm:flex-row gap-3 mb-6"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/40 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gold text-noir font-semibold rounded hover:bg-gold/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </motion.form>

          {subscribed && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gold text-sm font-semibold"
            >
              ✓ Check your email to confirm
            </motion.p>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 6: TRUSTED BY */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-t border-noir/10">
        <div className="container">
          <p className="text-center text-noir/50 text-sm uppercase tracking-widest font-semibold mb-12">
            Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-noir/40 font-semibold text-sm md:text-base"
              >
                {partner}
              </motion.p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
