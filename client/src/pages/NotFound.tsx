import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
      <div className="text-center max-w-md px-4">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-gold-dark mb-2 block">
          Page Not Found
        </span>
        <h1 className="font-display text-6xl md:text-8xl font-bold text-burgundy-dark mb-4">
          404
        </h1>
        <p className="font-body text-lg text-charcoal-light mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-burgundy-dark text-cream font-body font-semibold text-sm tracking-wide rounded-sm hover:bg-burgundy transition-all duration-300"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
