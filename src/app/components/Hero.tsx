
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">

        {/* Intro Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
          ✨ Your productivity starts here
        </div>

        {/* Main Heading */}
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Manage your work.
          <span className="block text-indigo-600">
            Achieve more.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Organize your projects, manage your tasks, and track your progress
          with TaskFlow. Everything you need to stay productive, all in one place.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/register"
            className="rounded-lg bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
          >
            Get Started Free →
          </Link>

          <Link
            href="/#features"
            className="rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-700 transition hover:border-indigo-300 hover:text-indigo-600"
          >
            Explore Features
          </Link>

        </div>

        {/* Supporting Text */}
        <p className="mt-6 text-sm text-gray-500">
          Simple. Organized. Productive.
        </p>

      </div>
    </section>
  );
}
