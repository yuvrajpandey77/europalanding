import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { EnhancedCorporate } from "@/components/enhanced-corporate"
import { StatsSection } from "@/components/stats-section"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <EnhancedCorporate />
      <StatsSection />
      <Testimonials />
      <FaqSection />
      <Footer />
    </main>
  )
}
