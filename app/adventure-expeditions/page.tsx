import { TravelHeader } from "@/components/travel-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Compass, Mountain, Waves, Cloud, Tent, Shield } from "lucide-react"
import Link from "next/link"

export default function AdventureExpeditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
      <TravelHeader />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-[url('/images/swiss-alps.png')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/30"></div>
          <div className="relative py-20 px-8 md:px-16 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Adventure <span className="text-teal-400">Expeditions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Extraordinary journeys to the world's most remote and spectacular destinations, combining luxury with
              authentic adventure.
            </p>
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-slate-900 font-medium">
              Explore Expeditions
            </Button>
          </div>
        </section>

        {/* Featured Expeditions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Premium Adventure Expeditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Himalayan Summit Expedition",
                location: "Nepal",
                duration: "18 days",
                difficulty: "Challenging",
                description:
                  "Summit one of the world's most iconic peaks with expert guides, premium equipment, and luxury base camps with gourmet meals and spa recovery.",
                price: 15800,
                image: "/placeholder.svg?height=400&width=800&text=Himalayan+Expedition",
              },
              {
                title: "Antarctic Luxury Exploration",
                location: "Antarctica",
                duration: "12 days",
                difficulty: "Moderate",
                description:
                  "Journey to the white continent aboard a luxury expedition vessel with helicopter excursions, submarine dives, and expert naturalist guides.",
                price: 22500,
                image: "/placeholder.svg?height=400&width=800&text=Antarctic+Expedition",
              },
              {
                title: "Amazon Rainforest Immersion",
                location: "Brazil & Peru",
                duration: "10 days",
                difficulty: "Moderate",
                description:
                  "Explore the world's most biodiverse ecosystem with expert naturalists, staying in luxury eco-lodges and a private chartered riverboat.",
                price: 12800,
                image: "/placeholder.svg?height=400&width=800&text=Amazon+Expedition",
              },
              {
                title: "African Safari & Conservation",
                location: "Kenya & Tanzania",
                duration: "14 days",
                difficulty: "Easy to Moderate",
                description:
                  "Experience the ultimate safari with exclusive wildlife access, conservation activities, and luxury tented camps with personal butlers.",
                price: 18500,
                image: "/placeholder.svg?height=400&width=800&text=African+Safari",
              },
            ].map((expedition) => (
              <div
                key={expedition.title}
                className="group bg-slate-800/30 rounded-xl overflow-hidden hover:bg-slate-800/50 transition-colors"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={expedition.image || "/placeholder.svg"}
                    alt={expedition.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-teal-400 mb-2">
                    <Compass className="h-4 w-4 mr-1" />
                    <span>{expedition.location}</span>
                    <span className="mx-2">•</span>
                    <span>{expedition.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{expedition.difficulty}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-teal-400 transition-colors">
                    {expedition.title}
                  </h3>
                  <p className="text-slate-300 mb-4">{expedition.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">
                      ${expedition.price} <span className="text-sm font-normal text-slate-400">per person</span>
                    </span>
                    <Button className="bg-teal-500 hover:bg-teal-600 text-slate-900">Book Expedition</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Adventure Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Adventure Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Mountain Expeditions",
                description:
                  "From the Himalayas to the Andes, summit iconic peaks with world-class mountaineers and luxury base camps.",
                icon: <Mountain className="h-10 w-10 text-teal-400" />,
                image: "/images/swiss-alps.png",
              },
              {
                title: "Polar Explorations",
                description:
                  "Journey to the Arctic and Antarctic with luxury expedition vessels, helicopter excursions, and wildlife encounters.",
                icon: <Cloud className="h-10 w-10 text-teal-400" />,
                image: "/placeholder.svg?height=300&width=400&text=Polar",
              },
              {
                title: "Ocean Adventures",
                description:
                  "Dive pristine reefs, sail remote archipelagos, and explore marine ecosystems with expert guides and luxury vessels.",
                icon: <Waves className="h-10 w-10 text-teal-400" />,
                image: "/images/maldives.png",
              },
              {
                title: "Desert Expeditions",
                description:
                  "Cross vast dunes and ancient landscapes with luxury desert camps, gourmet dining, and cultural encounters.",
                icon: <Compass className="h-10 w-10 text-teal-400" />,
                image: "/placeholder.svg?height=300&width=400&text=Desert",
              },
              {
                title: "Jungle Explorations",
                description:
                  "Discover the world's most biodiverse rainforests with naturalist guides and premium eco-lodges.",
                icon: <Tent className="h-10 w-10 text-teal-400" />,
                image: "/images/bali.png",
              },
              {
                title: "Wildlife Safaris",
                description:
                  "Encounter magnificent wildlife in their natural habitats with conservation experts and luxury accommodations.",
                icon: <Shield className="h-10 w-10 text-teal-400" />,
                image: "/placeholder.svg?height=300&width=400&text=Safari",
              },
            ].map((category) => (
              <div key={category.title} className="group relative rounded-xl overflow-hidden h-64">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="mb-2">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{category.description}</p>
                  <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm">Explore</Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Premium Difference */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">The Premium Adventure Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Expert Expedition Leaders",
                description:
                  "World-renowned guides with decades of experience and intimate knowledge of each destination.",
                icon: <Compass className="h-10 w-10 text-teal-400" />,
              },
              {
                title: "Luxury in the Wild",
                description:
                  "Premium accommodations from luxury tented camps to expedition vessels with five-star amenities.",
                icon: <Tent className="h-10 w-10 text-teal-400" />,
              },
              {
                title: "Exclusive Access",
                description:
                  "Special permits and private access to restricted areas away from crowds and tourist routes.",
                icon: <Shield className="h-10 w-10 text-teal-400" />,
              },
            ].map((feature) => (
              <Card key={feature.title} className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Adventure Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "The Antarctic expedition exceeded all expectations. From helicopter flights over vast ice fields to encounters with emperor penguins, every day brought new wonders.",
                name: "Jonathan Pierce",
                expedition: "Antarctic Luxury Exploration",
                avatar: "/images/avatar1.png",
              },
              {
                quote:
                  "Summiting with PrimeTravels was a perfect balance of challenge and comfort. The expedition team's expertise made a difficult climb feel safe, while the luxury base camps provided incredible recovery.",
                name: "Sophia Rodriguez",
                expedition: "Himalayan Summit Expedition",
                avatar: "/images/avatar3.png",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-slate-300 mb-4 italic">"{testimonial.quote}"</p>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-teal-400">{testimonial.expedition}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-3xl overflow-hidden bg-gradient-to-r from-teal-500 to-teal-700 p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Ready for Your Next Adventure?</h2>
          <p className="text-lg md:text-xl mb-8 text-slate-800 max-w-2xl mx-auto">
            Our adventure specialists will create a bespoke expedition that balances authentic adventure with premium
            comfort.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8">
              Plan Your Expedition
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
}
