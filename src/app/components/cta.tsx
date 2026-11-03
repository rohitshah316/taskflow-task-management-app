
import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-indigo-600 px-8 py-16 text-center shadow-xl sm:px-16">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to take control of your projects?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-indigo-100 sm:text-lg">
          Start organizing your tasks, managing projects, and
          tracking your progress with TaskFlow.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-indigo-600 shadow-sm transition hover:bg-indigo-50"
          >
            Get Started Free
            <span className="ml-2">→</span>
          </Link>

          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-xl border border-indigo-300 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Sign In
          </Link>
        </div>

        <p className="mt-6 text-sm text-indigo-200">
          Simple project management. Better productivity.
        </p>
      </div>
    </section>
  );
}
