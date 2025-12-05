import { Globe } from "lucide-react"

export function Header() {
  return (
    <header className="w-full py-5 px-6 md:px-12 lg:px-20" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Globe className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold text-foreground">Europa</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground/80 hover:text-foreground transition-colors text-sm">
            Home
          </a>
          <a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
            Features
          </a>
          <a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
            Pricing
          </a>
          <a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
            Blog
          </a>
          <a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
            About
          </a>
        </nav>

        <button className="px-5 py-2.5 rounded-full bg-[#9FDE14] text-[#0d1f17] text-sm font-medium hover:bg-[#8fce04] transition-colors">
          Contact Us
        </button>
      </div>
    </header>
  )
}
