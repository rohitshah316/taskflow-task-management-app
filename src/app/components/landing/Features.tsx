
const features = [
  {
    icon: "📋",
    title: "Task Management",
    description:
      "Create, organize, and manage your tasks in one simple workspace.",
  },
  {
    icon: "📊",
    title: "Kanban Board",
    description:
      "Visualize your workflow and move tasks between different stages.",
  },
  {
    icon: "🎯",
    title: "Project Tracking",
    description:
      "Keep your projects organized and track progress from start to finish.",
  },
  {
    icon: "⚡",
    title: "Stay Productive",
    description:
      "Focus on important work with priorities and due dates.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-gray-50 px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Features
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Everything you need to manage your work
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            TaskFlow gives you the tools to organize tasks,
            manage projects, and stay productive.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
