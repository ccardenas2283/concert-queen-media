/*
 * LAYOUT: Editorial Noir Design System
 * - Premium black/gold/cream navigation
 * - City selector dropdown in nav
 * - Clean, minimal footer
 */

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497210246/cD3sEqPdYNiYcnDcSXSGe9/concert_queen_logo_70a4f60f.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/podcast", label: "Podcast" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

const cities = [
  { slug: "austin", label: "Austin", tagline: "Live Music Capital" },
  { slug: "miami", label: "Miami", tagline: "Coming Soon" },
  { slug: "los-angeles", label: "Los Angeles", tagline: "Coming Soon" },
  { slug: "new-york", label: "New York", tagline: "Coming Soon" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const cityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setCityOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Close city dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (cityRef.current && !cityRef.current.contains(e.target as Node)) {
        setCityOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isHome = location === "/";
  const isHeroPage = isHome || location.startsWith("/city/");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-noir/95 backdrop-blur-lg shadow-lg shadow-black/10"
            : isHeroPage
            ? "bg-transparent"
            : "bg-noir"
        }`}
      >
        <nav className="container flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-3 group shrink-0">
            <img
              src={LOGO_URL}
              alt="Concert Queen"
              className="h-9 md:h-12 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-body text-[13px] tracking-[0.08em] uppercase transition-colors duration-300 ${
                  location === link.href
                    ? "text-gold font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* City Selector */}
            <div ref={cityRef} className="relative">
              <button
                onClick={() => setCityOpen(!cityOpen)}
                className="flex items-center gap-1.5 font-body text-[13px] tracking-[0.08em] uppercase text-white/70 hover:text-white transition-colors duration-300"
              >
                <MapPin size={14} className="text-gold" />
                Austin
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${cityOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {cityOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-3 w-56 bg-noir border border-white/10 shadow-2xl shadow-black/40 overflow-hidden"
                  >
                    {cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={city.slug === "austin" ? "/city/austin" : `/city/${city.slug}`}
                        className={`flex items-center justify-between px-4 py-3 transition-colors duration-200 ${
                          city.slug === "austin"
                            ? "bg-gold/10 text-gold"
                            : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className="font-body text-sm font-medium">{city.label}</span>
                        <span className="font-body text-[11px] text-white/30">
                          {city.tagline}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-10 p-2 text-white"
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
              className="fixed inset-0 bg-noir z-40 lg:hidden"
            >
              <div className="flex flex-col items-center justify-center h-full gap-7">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className={`font-display text-3xl tracking-wide transition-colors duration-300 ${
                        location === link.href
                          ? "text-gold"
                          : "text-white/70 hover:text-gold"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile City Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 pt-6 border-t border-white/10 w-48"
                >
                  <p className="font-body text-[11px] tracking-[0.15em] uppercase text-white/30 text-center mb-4">
                    Cities
                  </p>
                  <div className="flex flex-col items-center gap-3">
                    {cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/city/${city.slug}`}
                        className={`font-body text-sm transition-colors duration-300 ${
                          city.slug === "austin" ? "text-gold font-medium" : "text-white/50 hover:text-white"
                        }`}
                      >
                        {city.label}
                      </Link>
                    ))}
                  </div>
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
          transition={{ duration: 0.35 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-noir text-white">
        <div className="container py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-4">
              <img
                src={LOGO_URL}
                alt="Concert Queen"
                className="h-14 w-auto object-contain brightness-0 invert mb-5"
              />
              <p className="font-body text-sm text-white/50 leading-relaxed max-w-xs">
                Your backstage pass to live music. Curated events, exclusive interviews, and insider access to the world's best music cities.
              </p>
            </div>

            {/* Navigate */}
            <div className="md:col-span-2">
              <h4 className="font-body text-[11px] tracking-[0.15em] uppercase text-gold mb-5">
                Navigate
              </h4>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-body text-sm text-white/50 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Cities */}
            <div className="md:col-span-2">
              <h4 className="font-body text-[11px] tracking-[0.15em] uppercase text-gold mb-5">
                Cities
              </h4>
              <div className="flex flex-col gap-3">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/city/${city.slug}`}
                    className="font-body text-sm text-white/50 hover:text-gold transition-colors duration-300"
                  >
                    {city.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="md:col-span-4">
              <h4 className="font-body text-[11px] tracking-[0.15em] uppercase text-gold mb-5">
                Stay Connected
              </h4>
              <p className="font-body text-sm text-white/50 mb-5">
                Get exclusive coverage and backstage access delivered weekly.
              </p>
              <a
                href="https://theconcertqueen.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex text-xs"
              >
                Subscribe
              </a>
              <div className="flex gap-5 mt-6">
                <a
                  href="https://www.instagram.com/theconcertqueen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-white/40 hover:text-gold transition-colors duration-300 uppercase tracking-wider"
                >
                  Instagram
                </a>
                <a
                  href="https://open.spotify.com/show/theconcertqueen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-white/40 hover:text-gold transition-colors duration-300 uppercase tracking-wider"
                >
                  Spotify
                </a>
                <a
                  href="https://www.tiktok.com/@theconcertqueen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-white/40 hover:text-gold transition-colors duration-300 uppercase tracking-wider"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="gold-rule mt-14 mb-6" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-body text-xs text-white/30">
              &copy; {new Date().getFullYear()} Concert Queen Media LLC. All rights reserved.
            </p>
            <p className="font-body text-xs text-white/30">
              Founded by Clarissa Cardenas
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
