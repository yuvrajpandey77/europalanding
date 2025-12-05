import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Exceptional service, always reliable and supportive, highly recommend for all banking needs.",
    name: "Benjamin Foster",
    role: "Photographer",
    avatar: "/professional-bearded-man.png",
  },
  {
    quote: "Professional and efficient, consistently putting clients first, an outstanding banking experience.",
    name: "John Harris",
    role: "Marketing Manager",
    avatar: "/professional-man-dark-hair.jpg",
  },
  {
    quote: "Outstanding customer service, seamless and hassle-free banking, highly trustworthy institution.",
    name: "Alex Turner",
    role: "Architect",
    avatar: "/professional-man-glasses.jpg",
  },
  {
    quote: "Excellent services, easy and friendly approach.",
    name: "Sarah Wilson",
    role: "Designer",
    avatar: "/professional-woman-diverse.png",
  },
  {
    quote: "Personalized service, highly professional and trustworthy team, makes banking a pleasure.",
    name: "David Thompson",
    role: "Software Engineer",
    avatar: "/young-professional-man.png",
  },
  {
    quote: "Top-notch service, responsive and knowledgeable staff, always there when needed.",
    name: "Michael Carter",
    role: "Graphic Designer",
    avatar: "/professional-man-smiling.png",
  },
  {
    quote: "Friendly and helpful service, dependable banking experience.",
    name: "James Roberts",
    role: "Financial Analyst",
    avatar: "/professional-man-suit.png",
  },
]

export function Testimonials() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 100%, #1a3a2a 0%, #0d1f17 50%, #0a1810 100%)",
      }}
    >
      {/* Globe grid background effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 100% 100% at 50% 100%, transparent 40%, #0a1810 100%),
            repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(158, 222, 20, 0.1) 40px, rgba(158, 222, 20, 0.1) 41px),
            repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(158, 222, 20, 0.1) 40px, rgba(158, 222, 20, 0.1) 41px)
          `,
        }}
      />

      <div className="relative z-10 w-full px-6">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 text-xs tracking-widest text-gray-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-[#9FDE14]"></span>
            Client Testimonials
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif italic text-white text-center mb-4">
          What Our Client Say's About Us
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-sm">
          Our bank service is designed to empower your financial dreams with innovative solutions and unwavering
          commitment.
        </p>

        {/* Testimonials Grid - Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 max-w-7xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="rounded-2xl px-10 py-8 min-h-[280px] flex flex-col" style={{ backgroundColor: "#E8EBE4" }}>
              <p className="text-gray-800 font-medium mb-8 text-lg leading-relaxed flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-base">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid - Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[106rem] mx-auto md:-translate-x-28">
          {testimonials.slice(3, 7).map((testimonial, index) => (
            <div key={index} className="rounded-2xl px-10 py-8 min-h-[280px] flex flex-col" style={{ backgroundColor: "#E8EBE4" }}>
              <p className="text-gray-800 font-medium mb-8 text-lg leading-relaxed flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-base">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
