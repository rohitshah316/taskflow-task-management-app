
const columns = [
  {
    title: "To Do",
    color: "bg-gray-400",
    tasks: [
      { title: "Design landing page", priority: "High", priorityColor: "bg-red-100 text-red-600" },
      { title: "Create project structure", priority: "Medium", priorityColor: "bg-yellow-100 text-yellow-700" },
    ],
  },
  {
    title: "In Progress",
    color: "bg-indigo-500",
    tasks: [
      { title: "Build dashboard UI", priority: "High", priorityColor: "bg-red-100 text-red-600" },
      { title: "Setup authentication", priority: "Low", priorityColor: "bg-green-100 text-green-600" },
    ],
  },
  {
    title: "Done",
    color: "bg-green-500",
    tasks: [
      { title: "Initialize project", priority: "Low", priorityColor: "bg-green-100 text-green-600" },
    ],
  },
];

export default function KanbanPreview() {
  return (
    <section className="bg-gray-50 px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Visualize Your Workflow
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            See your productivity at a glance
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Organize your work visually, track task progress, and keep
            everything moving forward.
          </p>
        </div>

        {/* Kanban board */}
        <div className="grid gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-3">
          {columns.map((column) => (
            <div
              key={column.title}
              className="rounded-xl bg-gray-50 p-4"
            >
              {/* Column heading */}
              <div className="mb-5 flex items-center gap-3">
                <span className={`h-3 w-3 rounded-full ${column.color}`} />

                <h3 className="font-semibold text-gray-900">
                  {column.title}
                </h3>

                <span className="ml-auto rounded-full bg-gray-200 px-2.5 py-1 text-xs font-medium text-gray-600">
                  {column.tasks.length}
                </span>
              </div>

              {/* Task cards */}
              <div className="space-y-3">
                {column.tasks.map((task) => (
                  <div
                    key={task.title}
                    className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                  >
                    <h4 className="mb-3 text-sm font-semibold text-gray-800">
                      {task.title}
                    </h4>

                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${task.priorityColor}`}
                    >
                      {task.priority} Priority
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
