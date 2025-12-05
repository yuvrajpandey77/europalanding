import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem Ipsum",
    role: "Lorem",
    avatar: "/professional-bearded-man.png",
  },
  {
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Lorem Ipsum",
    role: "Lorem",
    avatar: "/professional-man-dark-hair.jpg",
  },
  {
    quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Lorem Ipsum",
    role: "Lorem",
    avatar: "/professional-man-glasses.jpg",
  },
  {
    quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Lorem Ipsum",
    role: "Lorem",
    avatar: "/professional-woman-diverse.png",
  },
  {
    quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Lorem Ipsum",
    role: "Lorem",
    avatar: "/young-professional-man.png",
  },
  {
    quote: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    name: "Lorem Ipsum",
    role: "Lorem",
    avatar: "/professional-man-smiling.png",
  },
  {
    quote: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    name: "Lorem Ipsum",
    role: "Lorem",
    avatar: "/professional-man-suit.png",
  },
  {
    quote: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    name: "Lorem Ipsum",
    role: "Lorem",
    avatar: "/professional-man-with-glasses-wearing-beige-jacket.jpg",
  },
]

export function Testimonials() {
  return (
    <section
      className="relative py-32 overflow-x-visible"
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

      <div className="relative z-10 w-full px-6 overflow-x-visible">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 text-xs tracking-widest text-gray-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-[#9FDE14]"></span>
            Lorem Ipsum
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif italic text-white text-center mb-4">
          Lorem Ipsum Dolor Sit Amet
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
        <div className="flex flex-col md:flex-row gap-6 w-full md:justify-end">
          {testimonials.slice(3, 8).map((testimonial, index) => (
            <div key={index} className="rounded-2xl px-10 py-8 min-h-[280px] flex flex-col flex-shrink-0 md:w-[410px]" style={{ backgroundColor: "#E8EBE4" }}>
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
