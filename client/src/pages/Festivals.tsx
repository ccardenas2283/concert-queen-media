/*
 * FESTIVALS PAGE: Austin Festival Guide
 * All major festivals with Ticketmaster links and insider coverage
 */

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

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
    location: "Zilker Park",
    description: "Austin City Limits Music Festival. Three weekends of the biggest names in music across multiple stages.",
    ticketmasterUrl: "https://www.ticketmaster.com",
    insiderTip: "Arrive early for Zilker Park spots. Bring sunscreen and a hydration pack.",
  },
  {
    name: "SXSW",
    date: "March 13-22, 2026",
    location: "Downtown Austin",
    description: "South by Southwest. Film, interactive, and music conference. Thousands of showcases across the city.",
    ticketmasterUrl: "https://www.ticketmaster.com",
    insiderTip: "SXSW badges grant access to official showcases. Unofficial shows are free.",
  },
  {
    name: "Levitation",
    date: "May 1-3, 2026",
    location: "Auditorium Shores",
    description: "Psychedelic and indie rock festival. Curated lineup of emerging and established artists.",
    ticketmasterUrl: "https://www.ticketmaster.com",
    insiderTip: "Levitation is known for surprise sets. Arrive early for best stage positions.",
  },
  {
    name: "Seismic Dance Event",
    date: "April 11-12, 2026",
    location: "The Concourse Project",
    description: "Electronic and techno festival. Multiple stages, top-tier DJs and producers.",
    ticketmasterUrl: "https://www.ticketmaster.com",
    insiderTip: "Seismic is outdoors. Bring layers for temperature changes.",
  },
  {
    name: "Float Fest",
    date: "July 18-19, 2026",
    location: "San Marcos",
    description: "Electronic music festival on the San Marcos River. Camping and day passes available.",
    ticketmasterUrl: "https://www.ticketmaster.com",
    insiderTip: "Float Fest includes river access. Bring water shoes and sunscreen.",
  },
  {
    name: "Euphoria",
    date: "May 9-11, 2026",
    location: "Cedar Creek Lodges",
    description: "Boutique electronic festival. Intimate setting with top electronic artists.",
    ticketmasterUrl: "https://www.ticketmaster.com",
    insiderTip: "Euphoria is small and curated. Book lodging early.",
  },
  {
    name: "Oblivion Access",
    date: "June 6-7, 2026",
    location: "TBA",
    description: "Experimental and underground electronic festival. Cutting-edge music and art installations.",
    ticketmasterUrl: "https://www.ticketmaster.com",
    insiderTip: "Oblivion Access is underground. Follow their socials for venue announcements.",
  },
];

export default function Festivals() {
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
      {/* FESTIVALS GRID */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-8">
            {festivals.map((festival, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-gold/50 hover:bg-white/8 transition-all"
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

                  {/* Right: CTA */}
                  <div className="flex flex-col justify-between">
                    <div></div>
                    <a
                      href={festival.ticketmasterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary justify-center w-full flex items-center gap-2"
                    >
                      Get Tickets <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* EMAIL CTA */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white/5 border-t border-white/10">
        <div className="container max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Don't Miss a Festival
            </h2>
            <p className="font-body text-white/70 mb-8">
              Get festival announcements, lineup drops, and ticket presales in your inbox.
            </p>
            <a href="/#email" className="btn-primary inline-flex items-center gap-2">
              Subscribe to Updates <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
