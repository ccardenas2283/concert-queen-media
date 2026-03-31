/*
 * CITY PAGE: Shared template for Austin, Miami, LA, NYC
 * Sections: Hero → Events → Venue Guide → Podcast/Interviews → Local Picks
 * Editorial Noir design — clean, minimal, premium
 */

import { motion } from "framer-motion";
import { useRoute } from "wouter";
import { MapPin, ArrowRight, ChevronRight, Play, Star } from "lucide-react";
import { Link } from "wouter";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

interface CityEvent {
  date: string;
  title: string;
  venue: string;
  genre: string;
}

interface CityVenue {
  name: string;
  district: string;
  type: string;
}

interface CityPick {
  title: string;
  category: string;
  description: string;
}

interface CityData {
  name: string;
  slug: string;
  tagline: string;
  heroImage: string;
  description: string;
  active: boolean;
  events: CityEvent[];
  venues: CityVenue[];
  picks: CityPick[];
  podcastEpisode?: {
    title: string;
    guest: string;
    duration: string;
    description: string;
  };
}

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/hero-concert-7Mabueq7uJitiCXb6NmUGd.webp";
const AUSTIN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/austin-skyline-VaS4wYUu5NeJeLNcGPH3zd.webp";
const VENUE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/venue-interior-ATXFmubS8U7nye2txhgMWE.webp";

const cityDatabase: Record<string, CityData> = {
  austin: {
    name: "Austin",
    slug: "austin",
    tagline: "Live Music Capital of the World",
    heroImage: HERO_IMG,
    description: "Over 250 live music venues across 10 council districts. From Sixth Street honky-tonks to East Austin warehouses, this is where live music lives.",
    active: true,
    events: [
      { date: "APR 12", title: "Seismic Dance Event 8.0", venue: "The Concourse Project", genre: "Electronic" },
      { date: "APR 18", title: "Adam Beyer", venue: "Kingdom Austin", genre: "Techno" },
      { date: "MAY 03", title: "Simon Doty", venue: "The Venue ATX", genre: "Progressive House" },
      { date: "MAY 15", title: "Boys Noize", venue: "Empire Control Room", genre: "Electronic" },
      { date: "MAY 22", title: "Khruangbin", venue: "Moody Center", genre: "Psychedelic" },
      { date: "JUN 07", title: "Floating Points", venue: "The Concourse Project", genre: "Electronic" },
    ],
    venues: [
      { name: "The Concourse Project", district: "District 1", type: "Electronic / Warehouse" },
      { name: "Moody Center", district: "District 9", type: "Arena" },
      { name: "Empire Control Room", district: "District 9", type: "Indie / Electronic" },
      { name: "Kingdom Austin", district: "District 9", type: "Techno / Underground" },
      { name: "Stubb's BBQ", district: "District 9", type: "Rock / Americana" },
      { name: "Mohawk", district: "District 9", type: "Indie / Punk" },
      { name: "The Venue ATX", district: "District 3", type: "House / Progressive" },
      { name: "Antone's Nightclub", district: "District 9", type: "Blues / Soul" },
    ],
    picks: [
      { title: "Waterloo Records", category: "Record Store", description: "Iconic Austin record store. Perfect for crate digging before a show." },
      { title: "Hotel San José", category: "Stay", description: "Boutique hotel on South Congress. The unofficial HQ of Austin's music scene." },
      { title: "Franklin Barbecue", category: "Eat", description: "Worth the wait. Fuel up before a long night of live music." },
      { title: "Barton Springs Pool", category: "Experience", description: "Natural spring-fed pool. The perfect Austin afternoon before an evening show." },
    ],
    podcastEpisode: {
      title: "All Access with Boys Noize",
      guest: "Boys Noize",
      duration: "58 min",
      description: "Grammy-winning producer on TRON: Ares, Nine Inch Noize at Coachella, and exclusive crate digging at Waterloo Records.",
    },
  },
  miami: {
    name: "Miami",
    slug: "miami",
    tagline: "Where Bass Meets the Beach",
    heroImage: HERO_IMG,
    description: "From Wynwood warehouses to South Beach clubs, Miami's music scene pulses with Latin rhythms, electronic beats, and global sounds.",
    active: false,
    events: [
      { date: "TBA", title: "Ultra Music Festival 2026", venue: "Bayfront Park", genre: "Electronic" },
      { date: "TBA", title: "III Points Festival", venue: "Wynwood", genre: "Indie / Electronic" },
      { date: "TBA", title: "Rolling Loud Miami", venue: "Hard Rock Stadium", genre: "Hip-Hop" },
    ],
    venues: [
      { name: "Space Miami", district: "Downtown", type: "Electronic / Techno" },
      { name: "E11EVEN", district: "Downtown", type: "Nightlife / EDM" },
      { name: "Club Space", district: "Downtown", type: "House / Techno" },
      { name: "The Ground", district: "Wynwood", type: "Underground" },
    ],
    picks: [
      { title: "Wynwood Walls", category: "Experience", description: "World-famous street art district. Walk the murals before a warehouse show." },
      { title: "Sweat Records", category: "Record Store", description: "Independent record store and vegan café in Little Haiti." },
    ],
  },
  "los-angeles": {
    name: "Los Angeles",
    slug: "los-angeles",
    tagline: "Where Stars Are Born",
    heroImage: HERO_IMG,
    description: "From the Sunset Strip to Downtown warehouses, LA's music scene spans every genre and generation. The entertainment capital never sleeps.",
    active: false,
    events: [
      { date: "TBA", title: "Coachella 2026", venue: "Empire Polo Club", genre: "Multi-Genre" },
      { date: "TBA", title: "FYF Fest", venue: "Exposition Park", genre: "Indie / Electronic" },
      { date: "TBA", title: "HARD Summer", venue: "NOS Events Center", genre: "Electronic" },
    ],
    venues: [
      { name: "The Wiltern", district: "Koreatown", type: "Historic / Multi-Genre" },
      { name: "Hollywood Bowl", district: "Hollywood", type: "Amphitheater" },
      { name: "The Roxy", district: "Sunset Strip", type: "Rock / Indie" },
      { name: "Catch One", district: "Mid-Wilshire", type: "Underground / Electronic" },
    ],
    picks: [
      { title: "Amoeba Music", category: "Record Store", description: "The world's largest independent record store on Hollywood Blvd." },
      { title: "Griffith Observatory", category: "Experience", description: "Sunset views over the city before a night out." },
    ],
  },
  "new-york": {
    name: "New York",
    slug: "new-york",
    tagline: "The City That Never Stops Playing",
    heroImage: HERO_IMG,
    description: "From Brooklyn warehouses to Manhattan jazz clubs, New York is where every genre finds its audience and every night holds a discovery.",
    active: false,
    events: [
      { date: "TBA", title: "Governors Ball 2026", venue: "Flushing Meadows", genre: "Multi-Genre" },
      { date: "TBA", title: "Afropunk Brooklyn", venue: "Commodore Barry Park", genre: "Multi-Genre" },
      { date: "TBA", title: "Avant Gardner Season", venue: "Brooklyn", genre: "Electronic" },
    ],
    venues: [
      { name: "Brooklyn Mirage", district: "Brooklyn", type: "Electronic / Outdoor" },
      { name: "Webster Hall", district: "Manhattan", type: "Historic / Multi-Genre" },
      { name: "Elsewhere", district: "Brooklyn", type: "Indie / Electronic" },
      { name: "Blue Note", district: "Manhattan", type: "Jazz" },
    ],
    picks: [
      { title: "Rough Trade NYC", category: "Record Store", description: "Rockaway Beach location. Vinyl, coffee, and live in-stores." },
      { title: "Smalls Jazz Club", category: "Experience", description: "Legendary Greenwich Village jazz club. Late-night sets nightly." },
    ],
  },
};

export default function CityPage() {
  const [, params] = useRoute("/city/:slug");
  const slug = params?.slug || "austin";
  const city = cityDatabase[slug] || cityDatabase.austin;

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={city.heroImage} alt={city.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-noir/20" />
        </div>

        <div className="relative container pb-12 md:pb-20 pt-32">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            <motion.p variants={fade} custom={0}
              className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-4 flex items-center gap-2"
            >
              <MapPin size={14} />
              {city.name}
            </motion.p>
            <motion.h1 variants={fade} custom={1}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-4"
            >
              {city.name}
            </motion.h1>
            <motion.p variants={fade} custom={2}
              className="font-body text-xl md:text-2xl italic text-gold/80 mb-4"
            >
              {city.tagline}
            </motion.p>
            <motion.p variants={fade} custom={3}
              className="font-body text-base text-white/50 max-w-lg leading-relaxed"
            >
              {city.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Banner for inactive cities */}
      {!city.active && (
        <section className="py-10 bg-gold/10 border-b border-gold/20">
          <div className="container text-center">
            <p className="font-body text-sm text-gold-dark font-medium">
              Full coverage for {city.name} is coming soon. Here's a preview of what to expect.
            </p>
          </div>
        </section>
      )}

      {/* ===== EVENTS ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fade} custom={0}
            className="flex items-end justify-between gap-4 mb-10 md:mb-14"
          >
            <div>
              <p className="font-body text-[11px] tracking-[0.2em] uppercase text-deep-red mb-3">
                {city.name}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-noir">
                Upcoming Events
              </h2>
            </div>
            {city.active && (
              <a
                href="https://www.ticketmaster.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-noir/40 hover:text-gold-dark hidden md:flex"
              >
                View All <ArrowRight size={14} />
              </a>
            )}
          </motion.div>

          <div className="space-y-0">
            {city.events.map((event, i) => (
              <motion.a
                key={event.title}
                href="https://www.ticketmaster.com"
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}
                variants={fade} custom={i * 0.3}
                className="group flex items-center gap-5 md:gap-8 py-5 md:py-6 border-b border-noir/8 hover:bg-cream/50 transition-all duration-300 -mx-4 px-4 md:-mx-6 md:px-6"
              >
                <div className="shrink-0 w-14 md:w-16 text-center">
                  <span className="font-display text-2xl md:text-3xl font-bold text-noir leading-none block">
                    {event.date.split(" ")[1] || "—"}
                  </span>
                  <span className="font-body text-[10px] tracking-[0.15em] uppercase text-noir/40">
                    {event.date.split(" ")[0]}
                  </span>
                </div>
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
                <ChevronRight size={18} className="shrink-0 text-noir/20 group-hover:text-gold transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VENUE GUIDE ===== */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fade} custom={0}
            className="mb-10 md:mb-14"
          >
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold-dark mb-3">
              Venue Guide
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-noir">
              Where to Go in {city.name}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {city.venues.map((venue, i) => (
              <motion.div
                key={venue.name}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}
                variants={fade} custom={i * 0.2}
                className="group bg-white p-5 md:p-6 border border-noir/5 hover:border-gold/30 hover:shadow-lg hover:shadow-noir/5 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg font-semibold text-noir group-hover:text-deep-red transition-colors duration-300">
                    {venue.name}
                  </h3>
                  <ChevronRight size={16} className="text-noir/15 group-hover:text-gold transition-colors duration-300 mt-1" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-body text-xs text-noir/40 flex items-center gap-1">
                    <MapPin size={11} />
                    {venue.district}
                  </span>
                  <span className="font-body text-[11px] text-noir/30 bg-cream px-2 py-0.5">
                    {venue.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PODCAST / INTERVIEW ===== */}
      {city.podcastEpisode && (
        <section className="py-16 md:py-24 bg-noir text-white">
          <div className="container">
            <div className="max-w-2xl">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              >
                <motion.p variants={fade} custom={0}
                  className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-4"
                >
                  Featured from {city.name}
                </motion.p>
                <motion.h2 variants={fade} custom={1}
                  className="font-display text-3xl md:text-4xl font-bold text-white mb-5"
                >
                  {city.podcastEpisode.title}
                </motion.h2>
                <motion.p variants={fade} custom={2}
                  className="font-body text-base text-white/50 mb-3 leading-relaxed"
                >
                  {city.podcastEpisode.description}
                </motion.p>
                <motion.p variants={fade} custom={2.5}
                  className="font-body text-xs text-white/30 mb-8"
                >
                  {city.podcastEpisode.duration} · Presented by SPIN
                </motion.p>
                <motion.div variants={fade} custom={3} className="flex gap-3">
                  <Link href="/podcast" className="btn-primary">
                    <Play size={15} />
                    Listen Now
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ===== LOCAL PICKS ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fade} custom={0}
            className="mb-10 md:mb-14"
          >
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold-dark mb-3">
              Insider Picks
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-noir">
              The {city.name} Edit
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {city.picks.map((pick, i) => (
              <motion.div
                key={pick.title}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}
                variants={fade} custom={i * 0.2}
                className="group p-5 md:p-6 border border-noir/5 hover:border-gold/30 transition-all duration-500"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Star size={14} className="text-gold" />
                  <span className="font-body text-[11px] tracking-[0.12em] uppercase text-gold-dark font-medium">
                    {pick.category}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-noir mb-2">
                  {pick.title}
                </h3>
                <p className="font-body text-sm text-noir/45 leading-relaxed">
                  {pick.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
