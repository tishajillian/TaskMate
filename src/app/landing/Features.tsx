import { Bot, ClipboardList, Zap } from "lucide-react"

const features = [
  {
    icon: ClipboardList,
    title: "Smart Project Management",
    description: "Intelligent task organization and team coordination that adapts to your workflow. Keep everyone aligned without the hassle.",
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Save 40% of your time on repetitive admin tasks. Smart automation handles the busywork so you can focus on what matters.",
  },
  {
    icon: Bot,
    title: "24/7 AI Assistant",
    description: "Your intelligent chatbot companion answers questions, manages tasks, and provides insights whenever you need them.",
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need to manage projects efficiently
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to help remote teams and freelancers ship faster
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="inline-flex p-3 rounded-2xl bg-gray-900 dark:bg-white mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white dark:text-black" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute inset-0 rounded-3xl bg-gray-900 dark:bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
