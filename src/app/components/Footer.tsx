
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Footer Main Content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Task<span className="text-indigo-500">Flow</span>
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6">
              Organize your projects, manage your tasks, and achieve more
              with a simpler workflow.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white">Product</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/#features" className="transition hover:text-indigo-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#board" className="transition hover:text-indigo-400">
                  Kanban Board
                </Link>
              </li>
              <li>
                <Link href="/register" className="transition hover:text-indigo-400">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/#features" className="transition hover:text-indigo-400">
                  Features Guide
                </Link>
              </li>
              <li>
                <Link href="/login" className="transition hover:text-indigo-400">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/#home" className="transition hover:text-indigo-400">
                  About TaskFlow
                </Link>
              </li>
              <li>
                <a href="mailto:hello@taskflow.com" className="transition hover:text-indigo-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 text-sm md:flex-row">
          <p>
            © {new Date().getFullYear()} TaskFlow. All rights reserved.
          </p>

          <p>
            Built with ❤️ for better productivity.
          </p>
        </div>

      </div>
    </footer>
  );
}
