"use client";
import Link from "next/link";
import { Sparkles, PenLine, BookHeart } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-base-200 flex flex-col items-center px-6 pt-28 pb-16 space-y-24">
      {/* Heading */}
      <section className="text-center max-w-3xl space-y-6">
        <h1 className="text-5xl font-bold text-primary tracking-tight">
          about Aubade
        </h1>
        <p className="text-base-content/70 text-lg leading-relaxed">
          aubade began as a whisper — a place for those thoughts that never
          found a home. it's a space made for softness, for slow mornings, and
          for words that spill like sunlight through windowpanes.
        </p>
      </section>

      {/* Philosophy */}
      <section className="max-w-4xl w-full space-y-14">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <AboutCard
            icon={<PenLine className="w-6 h-6" />}
            title="gentle journaling"
            desc="write without pressure, expectation, or judgment."
          />
          <AboutCard
            icon={<BookHeart className="w-6 h-6" />}
            title="designed with care"
            desc="a minimalist space where your words take center stage."
          />
          <AboutCard
            icon={<Sparkles className="w-6 h-6" />}
            title="slow technology"
            desc="tools that invite reflection — not distraction."
          />
        </div>
      </section>

      {/* Creator */}
      <section className="text-center max-w-xl space-y-6 text-base-content/70">
        <p>
          created by someone who needed a softer internet. aubade isn't about
          followers or metrics — it's about feeling. it's about healing.
        </p>
        <p>
          if it becomes your morning ritual too, then maybe we’re doing
          something right.
        </p>
      </section>

      {/* CTA */}
      {/* CTA */}
      <section className="relative bg-base-100 border border-base-300 rounded-2xl px-8 py-14 text-center shadow-md max-w-3xl w-full space-y-6">
        <h2 className="text-3xl font-bold text-primary">
          ready to begin your soft ritual?
        </h2>
        <p className="text-base-content/70 text-lg leading-relaxed max-w-xl mx-auto">
          start your gentle journaling journey with aubade — a place to breathe,
          to feel, and to simply be.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/login"
            className="btn btn-primary rounded-full px-6 shadow-sm"
          >
            start writing
          </Link>
        </div>
        <p className="text-sm text-base-content/60 mt-4">
          no pressure. no performance. just presence.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-xs text-base-content/60 py-8 border-t border-base-300 w-full text-center">
        made with ink & warmth — aubade © {new Date().getFullYear()}
      </footer>
    </main>
  );
}

function AboutCard({ icon, title, desc }) {
  return (
    <div className="bg-base-100 p-6 rounded-xl border border-base-300 shadow-sm flex flex-col items-center space-y-4 hover:bg-base-200 transition-colors">
      <div className="p-3 rounded-full bg-base-300 text-primary">{icon}</div>
      <h3 className="text-lg font-semibold text-base-content">{title}</h3>
      <p className="text-sm text-base-content/70">{desc}</p>
    </div>
  );
}
