
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          TaskFlow
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-gray-600 hover:text-indigo-600">
            Home
          </Link>

          <Link href="/#features" className="text-gray-600 hover:text-indigo-600">
            Features
          </Link>
        </div>

        {/* Authentication Links */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="font-medium text-gray-600 hover:text-indigo-600"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-indigo-600 px-5 py-2.5 font-medium text-white transition hover:bg-indigo-700"
          >
            Get Started
          </Link>
        </div>

      </nav>
    </header>
  );
}
