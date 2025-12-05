import { Layers, Settings, Shield, CreditCard, Cloud, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Extremely Flexible",
    description: "Our platform offers extreme flexibility, allowing users to tailor it to their specific needs.",
  },
  {
    icon: Settings,
    title: "Easy To Customize",
    description: "We prioritize concrete security, implementing robust encryption and protection.",
  },
  {
    icon: Shield,
    title: "Concrete Security",
    description: "We provide easy payment options, allowing you to handle transactions with just a few clicks.",
  },
  {
    icon: CreditCard,
    title: "Easy Payment",
    description: "With an intuitive interface and a wide range of options, it is designed to be easy to customize.",
  },
  {
    icon: Cloud,
    title: "Cloud based access",
    description: "Whether you're processing sensitive information or simply browsing, your data is fully secure.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Additionally, our platform is cloud-based, meaning you can access your data from anywhere.",
  },
]

export function EnhancedCorporate() {
  return (
    <section className="bg-[#F5F5F5] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#9FDE14]"></span>
          <span className="text-sm text-gray-500 tracking-wide">HOW IT WORKS</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-4">Enhanced Corporate Framework</h2>

        {/* Subtext */}
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12 text-sm">
          Fintech (Financial Technology) combines innovative technology with financial services to streamline processes
          like payments, lending, investments, and banking.
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
