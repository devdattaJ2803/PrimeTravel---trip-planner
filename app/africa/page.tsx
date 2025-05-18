import { TravelHeader } from "@/components/travel-header"
import { DestinationCard } from "@/components/destination-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AfricaPage() {
  // For demo purposes, we'll create some placeholder African destinations
  const africanDestinations = [
    {
      id: "safari-lodge",
      title: "Luxury Safari Lodge",
      location: "Serengeti, Tanzania",
      description:
        "Experience the ultimate safari in this exclusive lodge overlooking the Serengeti plains. Includes private game drives, gourmet dining, and spa treatments.",
      price: 8500,
      priceUnit: "week",
      rating: 4.9,
      image: "/images/Luxury Safari Lodge.jpeg",
      amenities: [
        "Private Game Drives",
        "Infinity Pool",
        "Spa Services",
        "Gourmet Dining",
        "Helicopter Tours",
        "Conservation Activities",
      ],
      featured: false,
      category: "adventure",
    },
    {
      id: "marrakech-riad",
      title: "Marrakech Private Riad",
      location: "Morocco",
      description:
        "Stay in an exquisitely restored traditional riad in the heart of Marrakech's medina, with private courtyard, plunge pool, and personal staff.",
      price: 4800,
      priceUnit: "week",
      rating: 4.8,
      image: "/images/Marrakech Private Riad.jpeg",
      amenities: [
        "Private Courtyard",
        "Plunge Pool",
        "Personal Chef",
        "Rooftop Terrace",
        "Hammam",
        "Guided Medina Tours",
      ],
      featured: false,
      category: "cultural",
    },
    {
      id: "cape-town-villa",
      title: "Cape Town Clifftop Villa",
      location: "South Africa",
      description:
        "Perched on the cliffs of Cape Town's most exclusive neighborhood, this contemporary villa offers panoramic ocean views, infinity pool, and private wine cellar.",
      price: 6200,
      priceUnit: "week",
      rating: 4.7,
      image: "/images/Cape Town Clifftop Villa.jpg",
      amenities: ["Ocean Views", "Infinity Pool", "Wine Cellar", "Home Theater", "Private Chef", "Concierge Service"],
      featured: false,
      category: "luxury",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
      <TravelHeader />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600&text=Africa')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/30"></div>
          <div className="relative py-20 px-8 md:px-16 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Discover <span className="text-teal-400">Africa</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              From the vast savannas of East Africa to the vibrant medinas of Morocco, experience the diverse
              landscapes, wildlife, and cultures of Africa in unparalleled luxury.
            </p>
            <Link href="/destinations">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-slate-900 font-medium">
                Explore African Destinations
              </Button>
            </Link>
          </div>
        </section>

        {/* Featured African Destinations */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Premium African Destinations</h2>
              <p className="text-slate-400">Handpicked luxury locations across the African continent</p>
            </div>
            <Link href="/destinations">
              <Button variant="ghost" className="text-teal-400 hover:text-teal-300 hover:bg-white/5">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {africanDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </section>

        {/* African Regions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Explore African Regions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "East Africa",
                image: "/placeholder.svg?height=400&width=600&text=East+Africa",
                description: "Safari adventures and pristine beaches",
              },
              {
                name: "North Africa",
                image: "/placeholder.svg?height=400&width=600&text=North+Africa",
                description: "Ancient civilizations and desert landscapes",
              },
              {
                name: "Southern Africa",
                image: "/placeholder.svg?height=400&width=600&text=Southern+Africa",
                description: "Diverse wildlife and cosmopolitan cities",
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

        {/* African Experiences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Exclusive African Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Private Safari Expeditions",
                description:
                  "Exclusive wildlife encounters with expert guides, luxury mobile camps, and helicopter transfers to remote regions.",
                image: "/images/vineyard-tour.png",
              },
              {
                title: "Desert Adventures",
                description:
                  "Journey through the Sahara or Namib deserts with luxury desert camps, traditional entertainment, and stargazing.",
                image: "/images/historical-castle.png",
              },
              {
                title: "Cultural Immersion",
                description:
                  "Authentic experiences with local communities, private access to historical sites, and traditional ceremonies.",
                image: "/images/Michelin-Star Culinary Journeys.jpg",
              },
              {
                title: "Island Retreats",
                description:
                  "Exclusive access to pristine islands in Seychelles, Zanzibar, and Madagascar with private villas and water activities.",
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

        {/* Conservation Section */}
        <section className="mb-16 bg-navy-800/50 border border-navy-700 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Conservation & Community</h2>
              <p className="text-slate-300 mb-4">
                At PrimeTravels, our African journeys are designed with conservation and community support at their
                core. We partner with leading conservation organizations and community initiatives across the continent.
              </p>
              <p className="text-slate-300 mb-6">
                A portion of every African journey booking goes directly to supporting wildlife conservation efforts and
                community development projects in the regions you visit, creating a positive impact through travel.
              </p>
              <Button className="bg-teal-500 hover:bg-teal-600 text-slate-900">Our Conservation Partners</Button>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600&text=Conservation"
                alt="Conservation efforts"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Travel Planning CTA */}
        <section className="rounded-3xl overflow-hidden bg-gradient-to-r from-teal-500 to-ocean-600 p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-950">Ready to Experience Africa in Style?</h2>
          <p className="text-lg md:text-xl mb-8 text-navy-800 max-w-2xl mx-auto">
            Let our travel consultants create a bespoke African journey tailored to your preferences.
          </p>
          <Link href="/trip-planner">
            <Button size="lg" className="bg-navy-900 hover:bg-navy-800 text-white font-medium px-8">
              Plan Your African Adventure
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
}
