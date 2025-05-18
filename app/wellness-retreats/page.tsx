import { TravelHeader } from "@/components/travel-header"
import { Button } from "@/components/ui/button"
import { destinations, experiences } from "@/lib/data"
import { DestinationCard } from "@/components/destination-card"
import { ExperienceCard } from "@/components/experience-card"
import Link from "next/link"

export default function WellnessRetreatsPage() {
  // Filter wellness destinations and experiences
  const wellnessDestinations = destinations.filter((dest) => dest.category === "wellness")
  const wellnessExperiences = experiences.filter((exp) => exp.category === "wellness")

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
      <TravelHeader />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-[url('/images/bali.png')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/30"></div>
          <div className="relative py-24 px-8 md:px-16 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Wellness <span className="text-teal-400">Retreats</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Rejuvenate your mind, body, and spirit with our exclusive wellness retreats in the world's most serene
              locations. Experience transformative practices, healing therapies, and mindful living.
            </p>
            <Link href="/destinations/bali-retreat">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-slate-900 font-medium">
                Explore Bali Retreat
              </Button>
            </Link>
          </div>
        </section>

        {/* Wellness Destinations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Wellness Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wellnessDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </section>

        {/* Wellness Experiences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Wellness Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wellnessExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>

        {/* Wellness Philosophy */}
        <section className="mb-16">
          <div className="bg-navy-800/50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Our Wellness Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-300 mb-4">
                  Our wellness retreats are designed to provide a holistic approach to health and wellbeing. We believe
                  in the power of nature, mindfulness, and traditional healing practices to restore balance and
                  vitality.
                </p>
                <p className="text-slate-300">
                  Each retreat is carefully curated to offer a perfect blend of relaxation, rejuvenation, and
                  transformation. From yoga and meditation to spa treatments and nutritious cuisine, every element is
                  designed to nurture your wellbeing.
                </p>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mr-3 mt-1">
                      1
                    </div>
                    <p className="text-slate-300">
                      <span className="font-medium text-white">Mindful Movement</span> - Daily yoga, tai chi, and
                      meditation practices to center the mind and strengthen the body.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mr-3 mt-1">
                      2
                    </div>
                    <p className="text-slate-300">
                      <span className="font-medium text-white">Healing Therapies</span> - Traditional and modern
                      treatments designed to release tension and promote healing.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mr-3 mt-1">
                      3
                    </div>
                    <p className="text-slate-300">
                      <span className="font-medium text-white">Nourishing Cuisine</span> - Organic, plant-focused meals
                      that delight the senses while supporting optimal health.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mr-3 mt-1">
                      4
                    </div>
                    <p className="text-slate-300">
                      <span className="font-medium text-white">Nature Connection</span> - Immersive experiences in
                      beautiful natural settings to restore and inspire.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-3xl overflow-hidden bg-gradient-to-r from-teal-500 to-ocean-600 p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Begin Your Wellness Journey</h2>
          <p className="text-lg md:text-xl mb-8 text-slate-800 max-w-2xl mx-auto">
            Transform your life with our exclusive wellness retreats. Our wellness consultants are ready to help you
            choose the perfect retreat for your needs.
          </p>
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8">
            Contact a Wellness Consultant
          </Button>
        </section>
      </main>
    </div>
  )
}
