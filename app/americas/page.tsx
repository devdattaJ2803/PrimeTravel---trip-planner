import { TravelHeader } from "@/components/travel-header"
import { DestinationCard } from "@/components/destination-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AmericasPage() {
  // For demo purposes, we'll create some placeholder American destinations
  const americanDestinations = [
    {
      id: "patagonia-lodge",
      title: "Patagonia Luxury Lodge",
      location: "Argentina & Chile",
      description:
        "Experience the breathtaking landscapes of Patagonia from this exclusive lodge with views of the Torres del Paine. Includes private guided hikes and gourmet dining.",
      price: 6800,
      priceUnit: "week",
      rating: 4.8,
      image: "images/Patagonia Luxury Lodge.png",
      amenities: [
        "Mountain Views",
        "Private Guides",
        "Gourmet Dining",
        "Spa Services",
        "Helicopter Tours",
        "Wine Cellar",
      ],
      featured: false,
      category: "adventure",
    },
    {
      id: "costa-rica-villa",
      title: "Costa Rica Rainforest Villa",
      location: "Costa Rica",
      description:
        "Immerse yourself in the lush rainforest from this private villa with infinity pool overlooking the Pacific Ocean. Includes wildlife experiences and beach access.",
      price: 5200,
      priceUnit: "week",
      rating: 4.9,
      image: "/images/Costa Rica Rainforest Villa.png",
      amenities: ["Ocean View", "Private Pool", "Wildlife Tours", "Beach Access", "Chef Service", "Yoga Pavilion"],
      featured: false,
      category: "luxury",
    },
    {
      id: "new-york-penthouse",
      title: "Manhattan Luxury Penthouse",
      location: "New York, USA",
      description:
        "Experience the ultimate urban luxury in this exclusive penthouse with panoramic views of the Manhattan skyline, private elevator, and concierge service.",
      price: 2800,
      priceUnit: "night",
      rating: 4.7,
      image: "/images/Manhattan Luxury Penthouse.jpeg",
      amenities: ["City Views", "Private Terrace", "Concierge", "Chef Service", "Car Service", "Art Collection"],
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
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600&text=Americas')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/30"></div>
          <div className="relative py-20 px-8 md:px-16 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Discover the <span className="text-teal-400">Americas</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              From the vibrant cities of North America to the pristine wilderness of Patagonia, experience the diverse
              landscapes and cultures of the Americas in unparalleled luxury.
            </p>
            <Link href="/destinations">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-slate-900 font-medium">
                Explore American Destinations
              </Button>
            </Link>
          </div>
        </section>

        {/* Featured American Destinations */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Premium American Destinations</h2>
              <p className="text-slate-400">Handpicked luxury locations across North, Central, and South America</p>
            </div>
            <Link href="/destinations">
              <Button variant="ghost" className="text-teal-400 hover:text-teal-300 hover:bg-white/5">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {americanDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </section>

        {/* American Regions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Explore American Regions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "North America",
                image: "/images/North America.jpg",
                description: "Urban luxury, mountain retreats, and coastal escapes",
              },
              {
                name: "Caribbean & Mexico",
                image: "/images/Caribbean & Mexico.jpg",
                description: "Pristine beaches, luxury resorts, and vibrant culture",
              },
              {
                name: "South America",
                image: "/images/South America.jpg",
                description: "Ancient wonders, natural spectacles, and rich traditions",
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

        {/* American Experiences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Exclusive American Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Private Wine Tours",
                description:
                  "Exclusive access to prestigious vineyards in Napa Valley, Mendoza, and Chile with private tastings and winemaker dinners.",
                image: "/images/vineyard-tour.png",
              },
              {
                title: "Wilderness Expeditions",
                description:
                  "Guided adventures through pristine national parks and remote wilderness with luxury camping or lodge accommodations.",
                image: "/images/historical-castle.png",
              },
              {
                title: "Cultural Immersion",
                description:
                  "Authentic experiences with indigenous communities and local artisans, with private demonstrations and workshops.",
                image: "/images/Michelin-Star Culinary Journeys.jpg",
              },
              {
                title: "Gastronomic Journeys",
                description:
                  "Culinary tours featuring the finest restaurants, private chef experiences, and local market explorations across the Americas.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-950">
            Ready to Experience the Americas in Style?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-navy-800 max-w-2xl mx-auto">
            Let our travel consultants create a bespoke American journey tailored to your preferences.
          </p>
          <Link href="/trip-planner">
            <Button size="lg" className="bg-navy-900 hover:bg-navy-800 text-white font-medium px-8">
              Plan Your American Adventure
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
}
