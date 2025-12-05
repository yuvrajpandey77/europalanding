import { Star, ChevronUp, Info } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0a1810]">
      {/* Background with grid pattern */}
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-8 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-8">
            <Star className="w-4 h-4 text-[#9FDE14] fill-[#9FDE14]" />
            <span className="text-sm text-foreground/80">SAAS TEMPLATE</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] tracking-tight mb-6">
            <span className="text-[#9FDE14] italic">Enhance</span> <span className="text-foreground">The Way You</span>
            <br />
            <span className="text-foreground">Present Your </span>
            <span className="text-[#9FDE14] italic">SAAS</span> <span className="text-foreground">Business</span>
          </h1>

          {/* Subtext */}
          <p className="text-foreground/50 text-sm max-w-lg mb-8">
            Welcome to Europa Welcome to Europa Welcome to Europa Welcome to Europa Welcome to Europa Welcome to Europa
            Welcome to Europa
          </p>

          <div className="relative w-full max-w-md mb-12">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-6 py-4 pr-36 rounded-full bg-card border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-[#9FDE14]/50"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 rounded-full bg-[#9FDE14] text-[#0d1f17] font-semibold hover:bg-[#8fce04] transition-colors">
              Get Started
            </button>
          </div>

          <div className="relative w-full max-w-4xl">
            {/* Say Badge - top right */}
            <div className="absolute top-0 right-12 md:right-24 z-20">
              <div className="px-4 py-1.5 rounded-full bg-[#9FDE14] text-[#0d1f17] text-sm font-medium">Say</div>
            </div>

            <div className="absolute left-0 md:left-8 bottom-24 md:bottom-32 z-20">
              <div className="bg-[#E0EAE9] rounded-2xl p-4 min-w-[140px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-3xl font-bold text-[#0d1f17]">4.9</span>
                  <Star className="w-5 h-5 text-[#9FDE14] fill-[#9FDE14]" />
                </div>
                <p className="text-[#0d1f17]/60 text-sm">2.6k+ Feedback</p>
              </div>
            </div>

            {/* Chart element - above income card */}
            <div className="absolute top-16 right-8 md:right-20 z-20">
              <div className="bg-[#E0EAE9] rounded-xl p-3">
                <svg width="60" height="30" viewBox="0 0 60 30" className="text-[#9FDE14]">
                  <path d="M0 25 Q15 20 20 15 T40 10 T60 5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="60" cy="5" r="3" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className="absolute right-0 md:right-8 bottom-32 md:bottom-40 z-20">
              <div className="bg-[#E0EAE9] rounded-2xl p-4 min-w-[160px]">
                <div className="flex items-center gap-1 text-[#0d1f17]/60 text-xs mb-2">
                  <span>TotalIncome</span>
                  <Info className="w-3 h-3" />
                </div>
                <div className="text-2xl font-bold text-[#0d1f17] mb-2">$234.98K</div>
                <div className="flex items-center gap-1 text-xs">
                  <div className="w-5 h-5 rounded-full bg-[#9FDE14]/20 flex items-center justify-center">
                    <ChevronUp className="w-3 h-3 text-[#9FDE14]" />
                  </div>
                  <span className="text-[#0d1f17]/60">254.45%</span>
                </div>
              </div>
            </div>

            {/* Rank Badge - bottom right */}
            <div className="absolute bottom-16 right-4 md:right-16 z-20">
              <div className="px-4 py-1.5 rounded-full bg-[#3b82f6] text-white text-sm font-medium">Rank</div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                {/* Decorative dashed circle */}
                <div className="absolute -inset-6 rounded-full border border-dashed border-[#9FDE14]/30" />

                {/* Person Image */}
                <div className="relative w-[280px] h-[350px] md:w-[340px] md:h-[420px]">
                  <img
                    src="/professional-man-with-glasses-wearing-beige-jacket.jpg"
                    alt="Professional using Europa"
                    className="w-full h-full object-cover rounded-b-[160px]"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d1f17] to-transparent rounded-b-[160px]" />
                </div>

                {/* Rohman Badge - bottom center of image */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-4 py-1.5 rounded-full bg-[#E0EAE9] text-[#0d1f17] text-sm">Rohman</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
