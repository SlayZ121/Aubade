"use client";
import {
  BookHeart,
  PenLine,
  Heart,
  Sparkles,
  Palette,
  Wand2,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-base-300 flex flex-col items-center px-4 pt-28 pb-10 space-y-24">
      {/* Hero */}
      <section className="w-full px-4 text-center pt-32 pb-24 relative overflow-hidden">
        {/* Floating decorative icons with different colors */}

        <h1 className="text-5xl sm:text-6xl font-extrabold text-primary tracking-tight leading-tight">
          welcome to Aubade.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-base-content/70 max-w-2xl mx-auto leading-relaxed">
          a soft place to hold your quietest thoughts.
          <br className="hidden sm:block" />
          write to remember. write to release. write to be.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <Link
            href="/login"
            className="btn btn-primary btn-lg rounded-full shadow-md"
          >
            start writing
          </Link>
          <Link
            href="/about"
            className="btn btn-outline btn-lg rounded-full shadow-sm"
          >
            learn more
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-4xl w-full text-center space-y-10">
        <h2 className="text-2xl font-semibold text-base-content">
          why you'll love aubade
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Sparkles className="w-5 h-5" />}
            title="distraction-free"
            desc="just you, your words, and the page."
          />
          <FeatureCard
            icon={<Palette className="w-5 h-5" />}
            title="personal themes"
            desc="soft pastels, moody nights, and more."
          />
          <FeatureCard
            icon={<Wand2 className="w-5 h-5" />}
            title="page-by-page flow"
            desc="flip through pages like a real diary."
          />
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-2xl text-center italic text-base-content/70 space-y-4">
        <p className="text-base">
          "aubade became my morning ritual — a place where i could just breathe
          and be me."
        </p>
        <span className="block text-sm font-medium text-base-content/50">
          — someone soft & healing
        </span>
      </section>

      {/* Footer */}
      <footer className="  text-xs text-base-content/60 py-8 border-t border-base-300 w-full text-center">
        made with ink & warmth — aubade © {new Date().getFullYear()}
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-base-100 p-6 rounded-xl border border-base-300 shadow-sm flex flex-col items-center space-y-3 hover:bg-base-200 transition-colors">
      <div className="p-3 rounded-full bg-base-300 text-primary">{icon}</div>
      <h3 className="font-semibold text-base-content">{title}</h3>
      <p className="text-sm text-base-content/70">{desc}</p>
    </div>
  );
}
