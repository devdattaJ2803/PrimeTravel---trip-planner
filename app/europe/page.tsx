import { TravelHeader } from "@/components/travel-header"
import { DestinationCard } from "@/components/destination-card"
import { Button } from "@/components/ui/button"
import { destinations } from "@/lib/data"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EuropePage() {
  // Filter destinations in Europe
  const europeanDestinations = destinations.filter(
    (dest) => dest.location === "Greece" || dest.location === "Italy" || dest.location === "Switzerland",
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
      <TravelHeader />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-[url('/images/santorini.png')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/30"></div>
          <div className="relative py-20 px-8 md:px-16 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Discover <span className="text-teal-400">Europe</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Experience the rich history, stunning landscapes, and exquisite cuisine of Europe's most exclusive
              destinations.
            </p>
            <Link href="/destinations">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-slate-900 font-medium">
                Explore European Destinations
              </Button>
            </Link>
          </div>
        </section>

        {/* Featured European Destinations */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Premium European Destinations</h2>
              <p className="text-slate-400">Handpicked luxury locations across Europe</p>
            </div>
            <Link href="/destinations">
              <Button variant="ghost" className="text-teal-400 hover:text-teal-300 hover:bg-white/5">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {europeanDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </section>

        {/* European Regions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Explore European Regions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Mediterranean",
                image: "/images/santorini.png",
                description: "Sun-drenched coastlines and azure waters",
              },
              {
                name: "Alpine",
                image: "/images/swiss-alps.png",
                description: "Majestic mountains and pristine lakes",
              },
              {
                name: "Cultural Capitals",
                image: "/images/amalfi.png",
                description: "Historic cities with rich artistic heritage",
              },
            ].map((region) => (
              <div key={region.name} className="group relative rounded-xl overflow-hidden h-64">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${region.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold mb-2">{region.name}</h3>
                  <p className="text-slate-300 mb-4">{region.description}</p>
                  <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm">Explore Region</Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* European Experiences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Exclusive European Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Private Vineyard Tours",
                description: "Exclusive access to renowned vineyards with private tastings and gourmet meals.",
                image: "/images/vineyard-tour.png",
              },
              {
                title: "Historical Castle Stays",
                description: "Spend the night in meticulously restored medieval castles with modern luxury amenities.",
                image: "/images/historical-castle.png",
              },
              {
                title: "Michelin-Star Culinary Journeys",
                description: "Curated dining experiences at Europe's most celebrated restaurants.",
                image: "/images/Michelin-Star Culinary Journeys.jpg",
              },
              {
                title: "Private Yacht Charters",
                description: "Navigate the Mediterranean coastline on a luxury yacht with a personal crew.",
                image: "/images/yacht-charter.png",
              },
            ].map((experience) => (
              <div
                key={experience.title}
                className="flex flex-col md:flex-row gap-6 bg-slate-800/30 rounded-xl overflow-hidden hover:bg-slate-800/50 transition-colors"
              >
                <div className="md:w-1/3 h-48 md:h-auto">
                  <img
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                    <p className="text-slate-300 mb-4">{experience.description}</p>
                  </div>
                  <Button className="self-start bg-teal-500 hover:bg-teal-600 text-slate-900">Learn More</Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Travel Planning CTA */}
        <section className="rounded-3xl overflow-hidden bg-gradient-to-r from-teal-500 to-ocean-600 p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-950">Ready to Experience Europe in Style?</h2>
          <p className="text-lg md:text-xl mb-8 text-navy-800 max-w-2xl mx-auto">
            Let our travel consultants create a bespoke European journey tailored to your preferences.
          </p>
          <Link href="/trip-planner">
            <Button size="lg" className="bg-navy-900 hover:bg-navy-800 text-white font-medium px-8">
              Plan Your European Adventure
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
}
