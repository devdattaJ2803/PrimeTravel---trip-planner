import { TravelHeader } from "@/components/travel-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Globe, Star, Clock } from "lucide-react"
import Link from "next/link"

export default function CulinaryJourneysPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
      <TravelHeader />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600&text=Culinary+Journeys')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/30"></div>
          <div className="relative py-20 px-8 md:px-16 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Culinary <span className="text-teal-400">Journeys</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Embark on extraordinary gastronomic adventures around the world, from Michelin-starred restaurants to
              authentic local cuisine.
            </p>
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-slate-900 font-medium">
              Explore Culinary Experiences
            </Button>
          </div>
        </section>

        {/* Featured Culinary Experiences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Signature Culinary Journeys</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Mediterranean Flavors",
                location: "Italy & Greece",
                duration: "12 days",
                description:
                  "Journey through the olive groves of Tuscany and the vineyards of Santorini, with private cooking classes and exclusive winery visits.",
                price: 8500,
                image: "/images/Italy & Greece.jpg",
              },
              {
                title: "Japanese Gastronomy",
                location: "Tokyo, Kyoto & Osaka",
                duration: "10 days",
                description:
                  "Discover the art of Japanese cuisine with sushi masterclasses, sake tastings, and dining experiences at Michelin-starred restaurants.",
                price: 9200,
                image: "/images/Japanese Gastronomy.jpg",
              },
              {
                title: "French Culinary Heritage",
                location: "Paris, Lyon & Bordeaux",
                duration: "14 days",
                description:
                  "Explore the birthplace of haute cuisine with private chef experiences, market tours, and exclusive access to renowned French wineries.",
                price: 10500,
                image: "/images/French Culinary Heritage.jpg",
              },
              {
                title: "Southeast Asian Spice Trail",
                location: "Thailand, Vietnam & Singapore",
                duration: "15 days",
                description:
                  "Follow the ancient spice routes through Southeast Asia, with street food tours, cooking classes, and dining at Asia's 50 Best Restaurants.",
                price: 7800,
                image: "/images/Southeast Asian Spice Trail.jpg",
              },
            ].map((journey) => (
              <div
                key={journey.title}
                className="group bg-slate-800/30 rounded-xl overflow-hidden hover:bg-slate-800/50 transition-colors"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={journey.image || "/placeholder.svg"}
                    alt={journey.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-teal-400 mb-2">
                    <Globe className="h-4 w-4 mr-1" />
                    <span>{journey.location}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{journey.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-teal-400 transition-colors">
                    {journey.title}
                  </h3>
                  <p className="text-slate-300 mb-4">{journey.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">
                      ${journey.price} <span className="text-sm font-normal text-slate-400">per person</span>
                    </span>
                    <Button className="bg-teal-500 hover:bg-teal-600 text-slate-900">Book Journey</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Culinary Experiences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Exclusive Culinary Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Private Chef Dinners",
                description:
                  "Intimate dining experiences with world-renowned chefs in exclusive venues or your private villa.",
                icon: <Utensils className="h-10 w-10 text-teal-400" />,
              },
              {
                title: "Michelin Star Tours",
                description:
                  "Curated dining itineraries featuring multiple Michelin-starred restaurants with priority reservations.",
                icon: <Star className="h-10 w-10 text-teal-400" />,
              },
              {
                title: "Vineyard Experiences",
                description:
                  "Private tours of prestigious vineyards with tastings of rare vintages and meetings with winemakers.",
                icon: <Globe className="h-10 w-10 text-teal-400" />,
              },
              {
                title: "Market Tours with Chefs",
                description:
                  "Explore local markets with expert chefs, selecting ingredients for a personalized cooking class.",
                icon: <Utensils className="h-10 w-10 text-teal-400" />,
              },
              {
                title: "Food & Culture Immersion",
                description:
                  "Deep dive into regional cuisines with cultural context, history, and traditional preparation methods.",
                icon: <Globe className="h-10 w-10 text-teal-400" />,
              },
              {
                title: "Exclusive Restaurant Access",
                description:
                  "Skip the waitlist for the world's most sought-after restaurants with our VIP concierge service.",
                icon: <Star className="h-10 w-10 text-teal-400" />,
              },
            ].map((experience) => (
              <Card key={experience.title} className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="mb-4">{experience.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                  <p className="text-slate-300">{experience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Culinary Journey Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "The private cooking class in Tuscany was the highlight of our trip. Learning family recipes passed down for generations while overlooking the rolling hills was magical.",
                name: "Elizabeth & James",
                journey: "Mediterranean Flavors",
                avatar: "/images/avatar1.png",
              },
              {
                quote:
                  "The access to Japan's most exclusive restaurants was unparalleled. Dining at the chef's table and having dishes explained personally by the masters was an experience we'll never forget.",
                name: "Robert Chen",
                journey: "Japanese Gastronomy",
                avatar: "/images/avatar2.png",
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
                        <p className="text-sm text-teal-400">{testimonial.journey}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Ready to Embark on a Culinary Adventure?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-slate-800 max-w-2xl mx-auto">
            Let our culinary experts design a bespoke gastronomic journey tailored to your tastes and preferences.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8">
              Plan Your Culinary Journey
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
}
