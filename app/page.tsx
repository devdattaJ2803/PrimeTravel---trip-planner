import Link from "next/link"
import { DestinationCard } from "@/components/destination-card"
import { ExperienceCard } from "@/components/experience-card"
import { TravelHeader } from "@/components/travel-header"
import { PremiumFeatures } from "@/components/premium-features"
import { Button } from "@/components/ui/button"
import { destinations, experiences } from "@/lib/data"

export default function Home() {
  // Get featured destinations
  const featuredDestinations = destinations.filter((d) => d.featured).slice(0, 3)

  // Get featured experiences
  const featuredExperiences = experiences.filter((e) => e.featured).slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
      <TravelHeader />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 to-navy-900/80"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Extraordinary <span className="text-teal-400">Destinations</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Experience the world's most exclusive locations with personalized service and unparalleled luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/destinations">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-slate-900 font-medium px-8">
                Explore Destinations
              </Button>
            </Link>
            <Link href="/experiences">
              <Button size="lg" variant="outline" className="border-teal-500 text-teal-400 hover:bg-teal-500/10 px-8">
                View Experiences
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">
            Featured <span className="text-teal-400">Destinations</span>
          </h2>
          <Link href="/destinations">
            <Button variant="ghost" className="text-teal-400 hover:text-teal-300 hover:bg-white/5">
              View All Destinations
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </section>

      {/* Premium Features */}
      <PremiumFeatures />

      {/* Featured Experiences */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">
            Exclusive <span className="text-teal-400">Experiences</span>
          </h2>
          <Link href="/experiences">
            <Button variant="ghost" className="text-teal-400 hover:text-teal-300 hover:bg-white/5">
              View All Experiences
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="bg-gradient-to-r from-teal-600 to-teal-400 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-navy-900">Ready for Your Premium Travel Experience?</h2>
          <p className="text-navy-800 mb-8 max-w-2xl mx-auto">
            Our travel consultants are ready to design your perfect luxury getaway with personalized service and
            exclusive access.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-navy-800 hover:bg-navy-700 text-white font-medium px-8">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
