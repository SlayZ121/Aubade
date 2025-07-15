import Link from "next/link";

export default function CtaAubade() {
  return (
    <section className="py-24 text-center px-4">
      <h2 className="text-4xl font-bold text-primary mb-4">
        ready to begin your story?
      </h2>
      <p className="text-base-content/70 mb-8">
        write without noise. write for yourself.
      </p>
      <Link
        href="/login"
        className="btn btn-primary btn-wide rounded-full shadow-md"
      >
        start writing
      </Link>
    </section>
  );
}
