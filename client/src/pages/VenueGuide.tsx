/*
 * VENUE GUIDE PAGE: Velvet Frequency Design System
 * Austin venue listings with Ticketmaster affiliate integration
 * Searchable, filterable, district-by-district
 */

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, Search, ExternalLink, Music2, Users, Star } from "lucide-react";

const VENUE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/venue-interior-ATXFmubS8U7nye2txhgMWE.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7 },
  }),
};

type Venue = {
  name: string;
  district: number;
  neighborhood: string;
  genre: string;
  capacity: string;
  description: string;
  ticketmasterUrl: string;
  featured: boolean;
};

const venues: Venue[] = [
  {
    name: "The Concourse Project",
    district: 3,
    neighborhood: "Southeast Austin",
    genre: "Electronic / Techno",
    capacity: "5,000+",
    description: "Austin's premier electronic music complex featuring multiple stages, world-class sound systems, and a stunning outdoor amphitheater. Home to Seismic Dance Event.",
    ticketmasterUrl: "https://www.ticketmaster.com/the-concourse-project-tickets/artist/2836052",
    featured: true,
  },
  {
    name: "ACL Live at The Moody Theater",
    district: 9,
    neighborhood: "Downtown",
    genre: "Multi-Genre",
    capacity: "2,750",
    description: "The iconic home of Austin City Limits, offering world-class acoustics and intimate performances from legendary artists in the heart of downtown Austin.",
    ticketmasterUrl: "https://www.ticketmaster.com/acl-live-at-the-moody-theater-tickets/artist/1542857",
    featured: true,
  },
  {
    name: "Kingdom Austin",
    district: 9,
    neighborhood: "East 6th Street",
    genre: "Electronic / Dance",
    capacity: "500",
    description: "A dedicated electronic music venue on East 6th Street, known for its intimate atmosphere, state-of-the-art Funktion-One sound system, and world-class DJ bookings.",
    ticketmasterUrl: "https://www.ticketmaster.com",
    featured: false,
  },
  {
    name: "Empire Control Room & Garage",
    district: 9,
    neighborhood: "East 7th Street",
    genre: "Multi-Genre",
    capacity: "1,200",
    description: "A versatile dual-venue space featuring the indoor Control Room and outdoor Garage stage. A cornerstone of Austin's live music scene hosting everything from indie to electronic.",
    ticketmasterUrl: "https://www.ticketmaster.com",
    featured: false,
  },
  {
    name: "Stubb's BBQ",
    district: 9,
    neighborhood: "Red River Cultural District",
    genre: "Rock / Country / Blues",
    capacity: "2,100",
    description: "Legendary Austin venue combining world-famous barbecue with an iconic outdoor amphitheater. A must-visit institution in the Red River Cultural District.",
    ticketmasterUrl: "https://www.ticketmaster.com/stubbs-bar-b-q-tickets/artist/806344",
    featured: true,
  },
  {
    name: "Mohawk",
    district: 9,
    neighborhood: "Red River Cultural District",
    genre: "Indie / Punk / Rock",
    capacity: "800",
    description: "A beloved Red River venue with indoor and outdoor stages, known for discovering emerging talent and hosting some of Austin's most memorable shows.",
    ticketmasterUrl: "https://www.ticketmaster.com",
    featured: false,
  },
  {
    name: "The Venue ATX",
    district: 3,
    neighborhood: "East Austin",
    genre: "Electronic / House",
    capacity: "400",
    description: "An intimate East Austin space dedicated to underground electronic music, featuring a carefully curated lineup of local and international DJs.",
    ticketmasterUrl: "https://www.ticketmaster.com",
    featured: false,
  },
  {
    name: "Continental Club",
    district: 5,
    neighborhood: "South Congress",
    genre: "Blues / Country / Rock",
    capacity: "200",
    description: "A South Congress institution since 1957, the Continental Club is the beating heart of Austin's roots music scene. No cover, no pretense — just pure live music.",
    ticketmasterUrl: "https://www.ticketmaster.com",
    featured: false,
  },
  {
    name: "Emo's Austin",
    district: 1,
    neighborhood: "East Riverside",
    genre: "Rock / Punk / Metal",
    capacity: "1,900",
    description: "Austin's go-to venue for rock, punk, and metal acts. A spacious indoor venue with excellent sightlines and a loyal community of music fans.",
    ticketmasterUrl: "https://www.ticketmaster.com/emos-austin-tickets/artist/2261677",
    featured: false,
  },
  {
    name: "Antone's Nightclub",
    district: 9,
    neighborhood: "East 5th Street",
    genre: "Blues / Soul / R&B",
    capacity: "350",
    description: "Austin's legendary 'Home of the Blues' since 1975. Antone's has hosted everyone from Muddy Waters to Gary Clark Jr., preserving Austin's blues heritage.",
    ticketmasterUrl: "https://www.ticketmaster.com",
    featured: false,
  },
];

const districts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const genres = ["All Genres", "Electronic / Techno", "Electronic / Dance", "Electronic / House", "Multi-Genre", "Rock / Country / Blues", "Indie / Punk / Rock", "Blues / Soul / R&B", "Blues / Country / Rock", "Rock / Punk / Metal"];

export default function VenueGuide() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const filteredVenues = useMemo(() => {
    return venues.filter((v) => {
      const matchesSearch =
        searchQuery === "" ||
        v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.neighborhood.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.genre.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDistrict = selectedDistrict === 0 || v.district === selectedDistrict;
      const matchesGenre = selectedGenre === "All Genres" || v.genre === selectedGenre;
      return matchesSearch && matchesDistrict && matchesGenre;
    });
  }, [searchQuery, selectedDistrict, selectedGenre]);

  const featuredVenues = venues.filter((v) => v.featured);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={VENUE_IMG} alt="Austin venue" className="w-full h-full object-cover" />
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
              Concert Queen Venue Guide
            </motion.span>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="font-display text-5xl md:text-7xl font-bold text-cream leading-tight mb-6"
            >
              Austin's Definitive
              <br />
              <span className="italic text-gold">Venue Guide</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="font-body text-lg text-cream/70 max-w-xl leading-relaxed"
            >
              Discover the best stages across all 10 Austin council districts. From legendary honky-tonks to cutting-edge electronic warehouses — find your next unforgettable night out.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Venues */}
      <section className="py-16 md:py-20 bg-cream">
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
              Editor's Picks
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-burgundy-dark">
              Featured Venues
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredVenues.map((venue, i) => (
              <motion.a
                key={venue.name}
                href={venue.ticketmasterUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="group bg-white rounded-sm border border-border hover:border-gold/30 hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Star size={14} className="text-gold fill-gold" />
                        <span className="font-body text-xs text-gold-dark font-semibold uppercase tracking-wider">
                          Featured
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-charcoal group-hover:text-burgundy transition-colors duration-300">
                        {venue.name}
                      </h3>
                    </div>
                    <ExternalLink size={16} className="text-charcoal-light group-hover:text-gold-dark transition-colors flex-shrink-0 mt-1" />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="flex items-center gap-1 font-body text-xs text-charcoal-light">
                      <MapPin size={12} />
                      District {venue.district} &middot; {venue.neighborhood}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="font-body text-xs px-2 py-0.5 bg-cream-dark rounded-sm text-charcoal-light">
                      {venue.genre}
                    </span>
                    <span className="flex items-center gap-1 font-body text-xs px-2 py-0.5 bg-cream-dark rounded-sm text-charcoal-light">
                      <Users size={10} />
                      {venue.capacity}
                    </span>
                  </div>

                  <p className="font-body text-sm text-charcoal-light leading-relaxed line-clamp-3">
                    {venue.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="inline-flex items-center gap-1.5 font-body text-xs font-semibold text-gold-dark group-hover:text-burgundy transition-colors">
                      Find Tickets on Ticketmaster
                      <ExternalLink size={12} />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-burgundy-dark mb-6">
              All Venues
            </h2>

            {/* Search & Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-light" />
                <input
                  type="text"
                  placeholder="Search venues, neighborhoods, genres..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-cream border border-border rounded-sm font-body text-sm text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
                />
              </div>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(Number(e.target.value))}
                className="px-4 py-3 bg-cream border border-border rounded-sm font-body text-sm text-charcoal focus:outline-none focus:border-gold/50 transition-all"
              >
                <option value={0}>All Districts</option>
                {districts.filter(d => d > 0).map((d) => (
                  <option key={d} value={d}>
                    District {d}
                  </option>
                ))}
              </select>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="px-4 py-3 bg-cream border border-border rounded-sm font-body text-sm text-charcoal focus:outline-none focus:border-gold/50 transition-all"
              >
                {genres.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Venue List */}
          <div className="space-y-4">
            {filteredVenues.length === 0 ? (
              <div className="text-center py-16">
                <Music2 size={48} className="text-charcoal-light/30 mx-auto mb-4" />
                <p className="font-body text-lg text-charcoal-light">
                  No venues match your search. Try adjusting your filters.
                </p>
              </div>
            ) : (
              filteredVenues.map((venue, i) => (
                <motion.a
                  key={venue.name}
                  href={venue.ticketmasterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={fadeUp}
                  custom={Math.min(i, 3)}
                  className="group flex flex-col md:flex-row md:items-center gap-4 p-5 bg-cream rounded-sm border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-500"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-semibold text-charcoal group-hover:text-burgundy transition-colors duration-300">
                      {venue.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                      <span className="flex items-center gap-1 font-body text-xs text-charcoal-light">
                        <MapPin size={12} />
                        District {venue.district} &middot; {venue.neighborhood}
                      </span>
                      <span className="font-body text-xs px-2 py-0.5 bg-white rounded-sm text-charcoal-light">
                        {venue.genre}
                      </span>
                      <span className="flex items-center gap-1 font-body text-xs text-charcoal-light">
                        <Users size={10} />
                        {venue.capacity}
                      </span>
                    </div>
                    <p className="font-body text-sm text-charcoal-light mt-2 line-clamp-2 hidden md:block">
                      {venue.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gold/10 text-gold-dark font-body text-xs font-semibold rounded-sm group-hover:bg-gold group-hover:text-burgundy-dark transition-all duration-300">
                      Get Tickets
                      <ExternalLink size={12} />
                    </span>
                  </div>
                </motion.a>
              ))
            )}
          </div>

          <div className="text-center mt-10">
            <p className="font-body text-sm text-charcoal-light">
              Ticket links powered by Ticketmaster. Concert Queen Media may earn a commission on qualifying purchases.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
