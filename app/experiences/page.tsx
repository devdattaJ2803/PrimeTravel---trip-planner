import { TravelHeader } from "@/components/travel-header"
import { ExperienceCard } from "@/components/experience-card"
import { experiences } from "@/lib/data"

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
      <TravelHeader />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Premium <span className="text-teal-400">Experiences</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Discover our collection of exclusive experiences designed for the discerning traveler. From historical
            castle stays to private yacht charters, each experience is curated to provide unforgettable memories and
            unparalleled luxury.
          </p>
        </section>

        {/* Experiences Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-teal-600 to-teal-400 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-navy-900">Looking for a Custom Experience?</h2>
          <p className="text-navy-800 mb-6 max-w-2xl mx-auto">
            Our travel consultants can design a bespoke experience tailored to your preferences and interests.
          </p>
          <button className="bg-navy-800 hover:bg-navy-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            Contact a Travel Consultant
          </button>
        </section>
      </main>
    </div>
  )
}
