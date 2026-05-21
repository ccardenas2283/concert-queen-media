/**
 * FAVORITES PAGE: User's saved shows
 * Displays all favorited events with ability to remove them
 * Uses localStorage to persist favorites across sessions
 */

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart, MapPin, Trash2, ArrowRight } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

// Sample shows data (same as Home.tsx)
const allShows = [
  { id: "Seismic Dance Event 8.0-The Concourse Project", artist: "Seismic Dance Event 8.0", venue: "The Concourse Project", genre: "Electronic", ticketmasterUrl: "https://www.ticketmaster.com", stubhubUrl: "https://www.stubhub.com/search?q=" },
  { id: "Adam Beyer-Kingdom Austin", artist: "Adam Beyer", venue: "Kingdom Austin", genre: "Techno", ticketmasterUrl: "https://www.ticketmaster.com", stubhubUrl: "https://www.stubhub.com/search?q=" },
  { id: "Simon Doty-The Venue ATX", artist: "Simon Doty", venue: "The Venue ATX", genre: "Progressive House", ticketmasterUrl: "https://www.ticketmaster.com", stubhubUrl: "https://www.stubhub.com/search?q=" },
  { id: "Boys Noize-Empire Control Room", artist: "Boys Noize", venue: "Empire Control Room", genre: "Electronic", ticketmasterUrl: "https://www.ticketmaster.com", stubhubUrl: "https://www.stubhub.com/search?q=" },
];

export default function Favorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('concertFavorites');
    if (saved) setFavorites(JSON.parse(saved));
    setMounted(true);
  }, []);

  // Remove a favorite
  const removeFavorite = (eventId: string) => {
    const updated = favorites.filter(id => id !== eventId);
    setFavorites(updated);
    localStorage.setItem('concertFavorites', JSON.stringify(updated));
  };

  // Clear all favorites
  const clearAll = () => {
    setFavorites([]);
    localStorage.removeItem('concertFavorites');
  };

  // Get favorited shows
  const favoriteShows = allShows.filter(show => favorites.includes(show.id));

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-noir">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-cream to-white/95 py-20 md:py-24">
        <div className="container max-w-4xl text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-noir mb-4">
              My Favorites
            </h1>
            <p className="font-body text-lg text-noir/60 max-w-2xl mx-auto">
              {favoriteShows.length === 0
                ? "No saved shows yet. Explore concerts and add your favorites!"
                : `You have ${favoriteShows.length} saved ${favoriteShows.length === 1 ? "show" : "shows"}.`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Favorites List */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl px-6">
          {favoriteShows.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <Heart className="w-16 h-16 text-noir/20 mx-auto mb-6" />
              <h2 className="font-display text-2xl font-bold text-noir mb-4">
                No Favorites Yet
              </h2>
              <p className="font-body text-noir/60 mb-8 max-w-md mx-auto">
                Start exploring Austin's best concerts and save your favorites to keep track of shows you don't want to miss.
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-noir font-semibold rounded hover:bg-gold/90 transition-colors"
              >
                Explore Shows <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {favoriteShows.map((show, idx) => (
                  <motion.div
                    key={show.id}
                    custom={idx}
                    variants={fade}
                    initial="hidden"
                    animate="visible"
                    className="group flex items-center gap-4 p-4 md:p-6 bg-white/5 border border-noir/10 rounded hover:bg-white/10 hover:border-gold/30 transition-all"
                  >
                    {/* Heart Icon */}
                    <Heart className="w-5 h-5 text-gold fill-gold flex-shrink-0" />

                    {/* Show Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg md:text-xl font-bold text-white truncate group-hover:text-gold transition-colors">
                        {show.artist}
                      </h3>
                      <div className="flex items-center gap-2 text-white/60 text-sm mt-1">
                        <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="truncate">{show.venue}</span>
                      </div>
                      <span className="inline-block text-gold text-xs uppercase tracking-wider font-semibold mt-2">
                        {show.genre}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <a
                        href={show.ticketmasterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-noir font-semibold text-sm rounded hover:bg-gold/90 transition-colors whitespace-nowrap"
                      >
                        Get Tickets <ArrowRight className="w-3 h-3" />
                      </a>
                      <button
                        onClick={() => removeFavorite(show.id)}
                        className="p-2 hover:bg-noir/20 rounded transition-colors text-white/50 hover:text-red-400"
                        title="Remove from favorites"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Clear All Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex justify-center pt-8 border-t border-noir/10"
              >
                <button
                  onClick={clearAll}
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Clear all favorites
                </button>
              </motion.div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
