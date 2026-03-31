import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
      <div className="text-center max-w-md px-4">
        <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold-dark mb-3">
          Page Not Found
        </p>
        <h1 className="font-display text-7xl md:text-9xl font-bold text-noir mb-4">
          404
        </h1>
        <p className="font-body text-base text-noir/50 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn-primary inline-flex">
          <ArrowLeft size={15} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
