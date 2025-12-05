import { Layers, Settings, Shield, CreditCard, Cloud, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: Settings,
    title: "Dolor Sit",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: Shield,
    title: "Amet Consectetur",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    icon: CreditCard,
    title: "Adipiscing Elit",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    icon: Cloud,
    title: "Sed Do Eiusmod",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    icon: BarChart3,
    title: "Tempor Incididunt",
    description: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
]

export function EnhancedCorporate() {
  return (
    <section className="bg-[#F5F5F5] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#9FDE14]"></span>
          <span className="text-sm text-gray-500 tracking-wide">LOREM IPSUM</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-4">Lorem Ipsum Dolor Sit Amet</h2>

        {/* Subtext */}
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-gray-700" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
