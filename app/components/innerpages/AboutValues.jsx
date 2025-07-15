import { Sparkles, BookHeart, PenLine } from "lucide-react";

const values = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Soft Design",
    desc: "Every pixel serves a purpose — calm, clarity, and comfort.",
  },
  {
    icon: <BookHeart className="w-6 h-6" />,
    title: "Privacy First",
    desc: "No tracking. No algorithms. Just your thoughts, kept sacred.",
  },
  {
    icon: <PenLine className="w-6 h-6" />,
    title: "Intentional Writing",
    desc: "Write to slow down, not to perform. Reflect without noise.",
  },
];

export default function AboutValues() {
  return (
    <section className="py-24 bg-base-200 px-6">
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-3 text-center">
        {values.map((val, idx) => (
          <div
            key={idx}
            className="bg-base-100 p-6 rounded-xl border border-base-300 shadow-sm space-y-4 hover:bg-base-300/20 transition"
          >
            <div className="p-3 rounded-full bg-base-300 text-primary mx-auto w-fit">
              {val.icon}
            </div>
            <h3 className="text-xl font-semibold text-base-content">
              {val.title}
            </h3>
            <p className="text-sm text-base-content/70">{val.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
