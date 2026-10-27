const features = [
  {
    number: "01",
    title: "Organize your projects",
    description:
      "Keep your work organized with dedicated projects and a clear overview of what matters.",
  },
  {
    number: "02",
    title: "Visualize your workflow",
    description:
      "Use a Kanban-style board to see what's next, what's in progress, and what's done.",
  },
  {
    number: "03",
    title: "Stay focused",
    description:
      "Manage priorities and deadlines without losing sight of your bigger goals.",
  },
];

const tasks = [
  { title: "Design landing page", status: "Done", color: "bg-emerald-100 text-emerald-700" },
  { title: "Build project dashboard", status: "In progress", color: "bg-blue-100 text-blue-700" },
  { title: "Set up authentication", status: "To do", color: "bg-amber-100 text-amber-700" },
];

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 font-bold tracking-tight">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-lg text-white">
        T
      </span>
      <span className="text-xl">TaskFlow</span>
    </a>
  );
}

function BoardPreview() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-indigo-950/10 sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm text-slate-500">Workspace / Website redesign</p>
          <h2 className="mt-1 text-lg font-bold text-slate-900">
            Project overview
          </h2>
        </div>
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
          Demo board
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {[
          { title: "To do", count: 1, tasks: tasks.filter((task) => task.status === "To do") },
          { title: "In progress", count: 1, tasks: tasks.filter((task) => task.status === "In progress") },
          { title: "Done", count: 1, tasks: tasks.filter((task) => task.status === "Done") },
        ].map((column) => (
          <div key={column.title} className="rounded-xl bg-slate-50 p-3">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-700">{column.title}</h3>
              <span className="text-xs text-slate-400">{column.count}</span>
            </div>

            <div className="space-y-2">
              {column.tasks.map((task) => (
                <div
                  key={task.title}
                  className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm"
                >
                  <p className="text-sm font-medium text-slate-800">
                    {task.title}
                  </p>
                  <span className={`mt-3 inline-block rounded-md px-2 py-1 text-xs font-medium ${task.color}`}>
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-slate-400">
        Illustrative preview — sample data, not connected to a database.
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Logo />

          <div className="hidden items-center gap-8 text-sm text-slate-600 sm:flex">
            <a href="#features" className="transition hover:text-indigo-600">
              Features
            </a>
            <a href="#preview" className="transition hover:text-indigo-600">
              Preview
            </a>
          </div>

          <a
            href="/register"
            className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Get started
          </a>
        </nav>
      </header>

      <section className="overflow-hidden bg-gradient-to-b from-indigo-50/70 to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-medium text-indigo-700">
              A clearer way to get things done
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Less chaos.
              <span className="block text-indigo-600">More progress.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Plan projects, organize tasks, and track your progress in one
              simple workspace. Make your next great idea happen.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/register"
                className="rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                Start organizing <span aria-hidden="true">→</span>
              </a>
              <a
                href="#preview"
                className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-700"
              >
                Explore the board
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Simple workflows. Clear priorities. Better focus.
            </p>
          </div>

          <div id="preview" className="min-w-0">
            <BoardPreview />
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            Everything in one place
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Work smarter, one task at a time.
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            A simple workflow to help you move from planning to completing
            your most important work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-slate-900/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-700">
                {feature.number}
              </span>
              <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-7xl rounded-3xl bg-indigo-600 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to make progress?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-indigo-100">
            Start with one project, organize your tasks, and build momentum
            toward your goals.
          </p>
          <a
            href="/register"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3.5 font-semibold text-indigo-700 transition hover:bg-indigo-50"
          >
            Create your workspace
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <Logo />
          <p>© {new Date().getFullYear()} TaskFlow. Built one step at a time.</p>
        </div>
      </footer>
    </main>
  );
}