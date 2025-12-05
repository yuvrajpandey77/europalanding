import { Globe, Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"

export function Footer() {
  const homeLinks = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"]
  const appLinks = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
  const pageLinks = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Blob Background */}
      <div className="absolute inset-0 bg-[#0a1a12]">
        {/* Dark Green Blob - Top Left */}
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] opacity-60 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(26, 58, 42, 0.8) 0%, transparent 70%)",
          }}
        />
        {/* Light Green Blob - Top Right */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-40 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(159, 222, 20, 0.3) 0%, transparent 70%)",
          }}
        />
        {/* Dark Green Blob - Bottom Left */}
        <div
          className="absolute bottom-0 left-1/4 w-[700px] h-[700px] opacity-50 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(13, 31, 23, 0.9) 0%, transparent 70%)",
          }}
        />
        {/* Light Green Blob - Center Right */}
        <div
          className="absolute top-1/2 right-1/4 w-[400px] h-[400px] opacity-35 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(159, 222, 20, 0.25) 0%, transparent 70%)",
          }}
        />
        {/* Dark Green Blob - Bottom Right */}
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-45 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(26, 58, 42, 0.7) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo & Social */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-8 h-8 text-[#9FDE14]" />
              <span className="text-white text-xl font-bold">Chainlink</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit, sed
              <br />
              do eiusmod tempor incididunt.
            </p>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-[#1a2e23] rounded-full flex items-center justify-center hover:bg-[#2a3e33] transition-colors cursor-pointer">
                <Facebook className="w-4 h-4 text-white" />
              </div>
              <div className="w-10 h-10 bg-[#1a2e23] rounded-full flex items-center justify-center hover:bg-[#2a3e33] transition-colors cursor-pointer">
                <Twitter className="w-4 h-4 text-white" />
              </div>
              <div className="w-10 h-10 bg-[#1a2e23] rounded-full flex items-center justify-center hover:bg-[#2a3e33] transition-colors cursor-pointer">
                <Instagram className="w-4 h-4 text-white" />
              </div>
              <div className="w-10 h-10 bg-[#1a2e23] rounded-full flex items-center justify-center hover:bg-[#2a3e33] transition-colors cursor-pointer">
                <Youtube className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Home Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Lorem</h4>
            <ul className="space-y-3">
              {homeLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* App Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Ipsum</h4>
            <ul className="space-y-3">
              {appLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* All Pages Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Dolor</h4>
            <ul className="space-y-3">
              {pageLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-white font-semibold mb-4">Sit</h4>
            <p className="text-gray-400 text-sm mb-4 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="relative max-w-lg">
              <input
                type="email"
                placeholder="lorem@ipsum.com"
                className="w-full px-6 py-4 pr-36 rounded-full bg-card border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-[#9FDE14]/50"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-[#9FDE14] text-[#0d1f17] font-semibold hover:bg-[#8fce04] transition-colors text-sm">
                Lorem
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              <a href="#" className="text-gray-400 underline hover:text-white">
                Lorem Ipsum
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">Copyright © 2025 all rights reserved by Chainlink</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Lorem Ipsum
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Dolor Sit
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
