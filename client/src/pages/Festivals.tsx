/*
 * FESTIVALS PAGE: Austin Festival Guide
 * All major festivals with Ticketmaster links and insider coverage
 * Hover effect reveals lineup preview
 */

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, X } from "lucide-react";
import { useState } from "react";

const fade = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const festivals = [
  {
    name: "ACL Festival",
    date: "October 2-3, 9-10, 2026",
    month: "October",
    genre: "Multi-Genre",
    location: "Zilker Park",
    description: "Austin City Limits Music Festival. Three weekends of the biggest names in music across multiple stages.",
    lineup: "The Killers, Olivia Rodrigo, Coldplay, SZA, Tyler, The Creator, Billie Eilish, Radiohead",
    ticketmasterUrl: "https://www.ticketmaster.com/search?q=acl+festival+2026",
    stubhubUrl: "https://www.stubhub.com/search?q=acl+festival+2026",
    insiderTip: "Arrive early for Zilker Park spots. Bring sunscreen and a hydration pack.",
  },
  {
    name: "SXSW",
    date: "March 13-22, 2026",
    month: "March",
    genre: "Multi-Genre",
    location: "Downtown Austin",
    description: "South by Southwest. Film, interactive, and music conference. Thousands of showcases across the city.",
    lineup: "Phoebe Bridgers, Clairo, Vulfpeck, Thundercat, Snail Mail, Soccer Mommy, Japanese Breakfast",
    ticketmasterUrl: "https://www.ticketmaster.com/search?q=sxsw+2026",
    stubhubUrl: "https://www.stubhub.com/search?q=sxsw+2026",
    insiderTip: "SXSW badges grant access to official showcases. Unofficial shows are free.",
  },
  {
    name: "Levitation",
    date: "May 1-3, 2026",
    month: "May",
    genre: "Indie Rock",
    location: "Auditorium Shores",
    description: "Psychedelic and indie rock festival. Curated lineup of emerging and established artists.",
    lineup: "Tame Impala, Khruangbin, Ty Segall, Unknown Mortal Orchestra, Mild High Club, Osees, Acid Arab",
    ticketmasterUrl: "https://www.ticketmaster.com/search?q=levitation+festival+2026",
    stubhubUrl: "https://www.stubhub.com/search?q=levitation+festival+2026",
    insiderTip: "Levitation is known for surprise sets. Arrive early for best stage positions.",
  },
  {
    name: "Seismic Dance Event",
    date: "April 11-12, 2026",
    month: "April",
    genre: "Electronic",
    location: "The Concourse Project",
    description: "Electronic and techno festival. Multiple stages, top-tier DJs and producers.",
    lineup: "Adam Beyer, Charlotte de Witte, Amelie Lens, Richie Hawtin, Carl Cox, Amelie Lens, Green Velvet",
    ticketmasterUrl: "https://www.ticketmaster.com/search?q=seismic+dance+event+2026",
    stubhubUrl: "https://www.stubhub.com/search?q=seismic+dance+event+2026",
    insiderTip: "Seismic is outdoors. Bring layers for temperature changes.",
  },
  {
    name: "Float Fest",
    date: "July 18-19, 2026",
    month: "July",
    genre: "Electronic",
    location: "San Marcos",
    description: "Electronic music festival on the San Marcos River. Camping and day passes available.",
    lineup: "Deadmau5, Zeds Dead, Subtronics, Griz, Pretty Lights, Lettuce, Turkuaz",
    ticketmasterUrl: "https://www.ticketmaster.com/search?q=float+fest+2026",
    stubhubUrl: "https://www.stubhub.com/search?q=float+fest+2026",
    insiderTip: "Float Fest includes river access. Bring water shoes and sunscreen.",
  },
  {
    name: "Euphoria",
    date: "May 9-11, 2026",
    month: "May",
    genre: "Electronic",
    location: "Cedar Creek Lodges",
    description: "Boutique electronic festival. Intimate setting with top electronic artists.",
    lineup: "Jon Hopkins, Floating Points, Four Tet, Disclosure, Caribou, Bonobo, Bicep",
    ticketmasterUrl: "https://www.ticketmaster.com/search?q=euphoria+festival+2026",
    stubhubUrl: "https://www.stubhub.com/search?q=euphoria+festival+2026",
    insiderTip: "Euphoria is small and curated. Book lodging early.",
  },
  {
    name: "Oblivion Access",
    date: "June 6-7, 2026",
    month: "June",
    genre: "Electronic",
    location: "TBA",
    description: "Experimental and underground electronic festival. Cutting-edge music and art installations.",
    lineup: "Arca, Holly Herndon, Oneohtrix Point Never, Ryoji Ikeda, Fennesz, Eliane Radigue, Laurie Spiegel",
    ticketmasterUrl: "https://www.ticketmaster.com/search?q=oblivion+access+2026",
    stubhubUrl: "https://www.stubhub.com/search?q=oblivion+access+2026",
    insiderTip: "Oblivion Access is underground. Follow their socials for venue announcements.",
  }
];

const months = ["March", "April", "May", "June", "July", "October"];
const genres = ["Multi-Genre", "Indie Rock", "Electronic"];

export default function Festivals() {
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [hoveredFestival, setHoveredFestival] = useState<number | null>(null);

  const toggleMonth = (month: string) => {
    setSelectedMonths(prev =>
      prev.includes(month) ? prev.filter(m => m !== month) : [...prev, month]
    );
  };

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  const clearFilters = () => {
    setSelectedMonths([]);
    setSelectedGenres([]);
  };

  const filteredFestivals = festivals.filter(festival => {
    const monthMatch = selectedMonths.length === 0 || selectedMonths.includes(festival.month);
    const genreMatch = selectedGenres.length === 0 || selectedGenres.includes(festival.genre);
    return monthMatch && genreMatch;
  });

  const hasFilters = selectedMonths.length > 0 || selectedGenres.length > 0;

  return (
    <div className="min-h-screen bg-noir">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* HERO */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-noir border-b border-white/10">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
              Austin Festivals
            </h1>
            <p className="font-body text-lg text-white/70 leading-relaxed">
              Major festivals and events throughout the year. Get tickets, insider tips, and coverage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* FILTERS */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 border-b border-white/10">
        <div className="container">
          <div className="space-y-6">
            {/* Month Filters */}
            <div>
              <h3 className="font-body text-sm font-semibold text-gold uppercase tracking-wider mb-3">
                Filter by Month
              </h3>
              <div className="flex flex-wrap gap-2">
                {months.map(month => (
                  <button
                    key={month}
                    onClick={() => toggleMonth(month)}
                    className={`px-4 py-2 rounded-lg font-body text-sm font-medium transition-all ${
                      selectedMonths.includes(month)
                        ? "bg-gold text-noir"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>

            {/* Genre Filters */}
            <div>
              <h3 className="font-body text-sm font-semibold text-gold uppercase tracking-wider mb-3">
                Filter by Genre
              </h3>
              <div className="flex flex-wrap gap-2">
                {genres.map(genre => (
                  <button
                    key={genre}
                    onClick={() => toggleGenre(genre)}
                    className={`px-4 py-2 rounded-lg font-body text-sm font-medium transition-all ${
                      selectedGenres.includes(genre)
                        ? "bg-gold text-noir"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {hasFilters && (
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 font-body text-sm text-gold hover:text-gold/80 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* FESTIVALS GRID */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="container">
          {filteredFestivals.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-body text-lg text-white/60">
                No festivals match your filters. Try adjusting your selection.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8">
              {filteredFestivals.map((festival, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.6 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredFestival(idx)}
                  onMouseLeave={() => setHoveredFestival(null)}
                  className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-gold/50 hover:bg-white/8 transition-all cursor-pointer relative overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left: Festival Info */}
                    <div className="md:col-span-2">
                      <h2 className="font-display text-3xl font-bold text-white mb-4">
                        {festival.name}
                      </h2>

                      <div className="space-y-3 mb-6 text-white/70">
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="font-body">{festival.date}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="font-body">{festival.location}</span>
                        </div>
                      </div>

                      {/* Genre Badge */}
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-gold/20 text-gold rounded-full font-body text-xs font-semibold uppercase tracking-wider">
                          {festival.genre}
                        </span>
                      </div>

                      <p className="font-body text-base text-white/80 mb-6 leading-relaxed">
                        {festival.description}
                      </p>

                      <div className="bg-noir/50 border border-white/10 rounded-lg p-4 mb-6">
                        <p className="font-body text-sm text-white/60 mb-2">
                          <span className="text-gold font-semibold">Insider Tip:</span>
                        </p>
                        <p className="font-body text-white/80">
                          {festival.insiderTip}
                        </p>
                      </div>
                    </div>

                    {/* Right: Lineup & CTA */}
                    <div className="flex flex-col justify-between relative">
                      {/* Lineup - Visible by default, hidden on hover */}
                      {hoveredFestival !== idx && (
                        <motion.div
                          initial={{ opacity: 1 }}
                          animate={{ opacity: hoveredFestival === idx ? 0 : 1 }}
                          transition={{ duration: 0.3 }}
                          className="bg-noir/50 border border-white/10 rounded-lg p-4 mb-4"
                        >
                          <p className="font-body text-xs text-white/60 mb-2 uppercase tracking-wider">
                            Lineup
                          </p>
                          <p className="font-body text-sm text-white/80">
                            {festival.lineup}
                          </p>
                        </motion.div>
                      )}

                      {/* Hover Preview Overlay */}
                      {hoveredFestival === idx && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-gradient-to-br from-noir/95 via-noir/90 to-noir/95 rounded-lg p-8 flex flex-col justify-center backdrop-blur-sm border border-gold/30"
                        >
                          <h3 className="font-display text-2xl font-bold text-gold mb-4">
                            Lineup Preview
                          </h3>
                          <p className="font-body text-white/90 mb-6 leading-relaxed text-sm">
                            {festival.lineup}
                          </p>
                          <div className="flex items-center gap-2 text-gold font-body text-sm font-semibold">
                            <span>Hover to explore</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </motion.div>
                      )}

                      {/* Dual Ticket Links */}
                      <div className="space-y-2 relative z-10">
                        <a
                          href={festival.ticketmasterUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary justify-center w-full flex items-center gap-2"
                        >
                          Get Tickets <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                          href={festival.stubhubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-sm text-gold hover:text-gold/80 transition-colors text-center py-2 block"
                        >
                          Sold out? Find resale on StubHub →
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* EMAIL CTA */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white/5 border-t border-white/10">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Don't Miss a Festival
          </h2>
          <p className="font-body text-lg text-white/70 mb-8">
            Get festival announcements, lineup drops, and ticket presales in your inbox.
          </p>
          <a href="/#email" className="btn-primary">
            Subscribe to Updates
          </a>
        </div>
      </section>
    </div>
  );
}
