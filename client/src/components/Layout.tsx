/*
 * LAYOUT: Velvet Frequency Design System
 * - Warm luxury navigation with burgundy/gold/cream palette
 * - Playfair Display for logo, DM Sans for nav links
 * - Smooth transitions, editorial authority feel
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Music2, Mail } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/concert_queen_logo_70a4f60f.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/podcast", label: "Podcast" },
  { href: "/venues", label: "Venue Guide" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isHome = location === "/";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled || !isHome
            ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-gold/20"
            : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-3 group">
            <img
              src={LOGO_URL}
              alt="Concert Queen"
              className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-body text-sm tracking-wide uppercase transition-colors duration-300 ${
                  location === link.href
                    ? scrolled || !isHome
                      ? "text-burgundy font-semibold"
                      : "text-white font-semibold"
                    : scrolled || !isHome
                    ? "text-charcoal hover:text-burgundy"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.instagram.com/theconcertqueen"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${
                scrolled || !isHome ? "text-charcoal-light hover:text-burgundy" : "text-white/70 hover:text-white"
              }`}
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@theconcertqueen"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${
                scrolled || !isHome ? "text-charcoal-light hover:text-burgundy" : "text-white/70 hover:text-white"
              }`}
              aria-label="TikTok"
            >
              <Music2 size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden relative z-10 p-2 transition-colors duration-300 ${
              mobileOpen
                ? "text-cream"
                : scrolled || !isHome
                ? "text-charcoal"
                : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-burgundy-dark z-40 lg:hidden"
            >
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className={`font-display text-3xl tracking-wide transition-colors duration-300 ${
                        location === link.href
                          ? "text-gold"
                          : "text-cream/80 hover:text-gold"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-6 mt-8"
                >
                  <a
                    href="https://www.instagram.com/theconcertqueen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/60 hover:text-gold transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://open.spotify.com/show/theconcertqueen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/60 hover:text-gold transition-colors"
                  >
                    <Music2 size={24} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <motion.div
          key={location}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-burgundy-dark text-cream">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <img
                src={LOGO_URL}
                alt="Concert Queen"
                className="h-16 w-auto object-contain mb-4 brightness-0 invert"
              />
              <p className="font-body text-sm text-cream/70 leading-relaxed">
                Austin's premier music media brand. Live music discovery, exclusive artist interviews, and civic advocacy for the Live Music Capital of the World.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-display text-lg text-gold mb-4">Navigate</h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-body text-sm text-cream/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-display text-lg text-gold mb-4">Connect</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/theconcertqueen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-cream/60 hover:text-gold transition-colors duration-300"
                >
                  Instagram
                </a>
                <a
                  href="https://open.spotify.com/show/theconcertqueen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-cream/60 hover:text-gold transition-colors duration-300"
                >
                  Spotify
                </a>
                <a
                  href="https://www.tiktok.com/@theconcertqueen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-cream/60 hover:text-gold transition-colors duration-300"
                >
                  TikTok
                </a>
                <a
                  href="https://www.youtube.com/@theconcertqueen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-cream/60 hover:text-gold transition-colors duration-300"
                >
                  YouTube
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-display text-lg text-gold mb-4">Stay in the Loop</h4>
              <p className="font-body text-sm text-cream/60 mb-4">
                Subscribe to the Concert Queen newsletter for exclusive coverage and backstage access.
              </p>
              <a
                href="https://theconcertqueen.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-burgundy-dark font-body text-sm font-semibold rounded-sm hover:bg-gold-light transition-colors duration-300"
              >
                <Mail size={16} />
                Subscribe on Substack
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="gold-rule mt-12 mb-6" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-cream/40">
              &copy; {new Date().getFullYear()} Concert Queen Media LLC. All rights reserved.
            </p>
            <p className="font-body text-xs text-cream/40">
              Founded by Clarissa Cardenas &mdash; Austin Music Commissioner, District 3
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
