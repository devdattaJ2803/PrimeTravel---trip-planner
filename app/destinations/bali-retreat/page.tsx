import { TravelHeader } from "@/components/travel-header"
import { Button } from "@/components/ui/button"
import { destinations } from "@/lib/data"
import { MapPin, Star, Check } from "lucide-react"
import Link from "next/link"

export default function BaliRetreatPage() {
  // Find the Bali retreat destination
  const destination = destinations.find((dest) => dest.id === "bali-retreat")

  if (!destination) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
        <TravelHeader />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
          <p className="mb-8">The destination you're looking for doesn't exist or has been removed.</p>
          <Link href="/destinations">
            <Button>Back to Destinations</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
      <TravelHeader />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Image */}
        <div className="relative h-[60vh] min-h-[500px] rounded-3xl overflow-hidden mb-12">
          <img
            src={destination.image || "/placeholder.svg"}
            alt={destination.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <div className="flex items-center text-teal-400 mb-2">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="text-lg">{destination.location}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{destination.title}</h1>
            <div className="flex items-center">
              <div className="flex items-center bg-navy-800/80 backdrop-blur-sm rounded-full px-4 py-1">
                <Star className="h-5 w-5 text-teal-400 mr-1" />
                <span className="font-medium">{destination.rating}</span>
                <span className="mx-2">•</span>
                <span>Premium Destination</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">About This Retreat</h2>
              <p className="text-slate-300 mb-6">{destination.description}</p>
              <p className="text-slate-300 mb-6">
                Nestled in the lush tropical landscape of Ubud, our Bali Wellness Retreat offers a sanctuary for those
                seeking rejuvenation and transformation. The private villa features a serene pool surrounded by verdant
                gardens, creating the perfect environment for meditation and relaxation.
              </p>
              <p className="text-slate-300">
                Each day begins with a sunrise yoga session followed by a nutritious organic breakfast. Our wellness
                program includes traditional Balinese healing treatments, guided meditation sessions, and personalized
                wellness consultations. In the evenings, enjoy farm-to-table dinners prepared by our resident chef using
                locally-sourced ingredients.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Retreat Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                    <span className="text-slate-300">{amenity}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Wellness Activities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-navy-800/50 rounded-xl p-6">
                  <h3 className="font-bold mb-3">Daily Yoga & Meditation</h3>
                  <p className="text-slate-300">
                    Morning and evening sessions led by experienced instructors in our open-air pavilion overlooking the
                    rice terraces.
                  </p>
                </div>
                <div className="bg-navy-800/50 rounded-xl p-6">
                  <h3 className="font-bold mb-3">Balinese Healing Treatments</h3>
                  <p className="text-slate-300">
                    Traditional healing therapies including Balinese massage, reflexology, and energy healing sessions.
                  </p>
                </div>
                <div className="bg-navy-800/50 rounded-xl p-6">
                  <h3 className="font-bold mb-3">Culinary Experiences</h3>
                  <p className="text-slate-300">
                    Plant-based cooking classes and nutrition workshops using fresh ingredients from our organic garden.
                  </p>
                </div>
                <div className="bg-navy-800/50 rounded-xl p-6">
                  <h3 className="font-bold mb-3">Cultural Immersion</h3>
                  <p className="text-slate-300">
                    Guided visits to local temples, traditional water purification ceremonies, and artisan workshops.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <div className="aspect-video rounded-xl overflow-hidden bg-navy-800/50">
                <img
                  src="/placeholder.svg?height=400&width=800&text=Map+of+Ubud,+Bali"
                  alt="Map of Bali Wellness Retreat location"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-slate-300">
                Located just 15 minutes from central Ubud, our retreat offers the perfect balance of seclusion and
                accessibility. The property is surrounded by rice terraces and tropical forests, yet close to Ubud's
                cultural attractions, restaurants, and shops.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-navy-800/50 rounded-xl p-6 sticky top-8">
              <div className="text-3xl font-bold mb-2">
                ${destination.price.toLocaleString()}
                <span className="text-lg font-normal text-slate-400">/{destination.priceUnit}</span>
              </div>
              <p className="text-slate-300 mb-6">All-inclusive wellness package for two guests</p>

              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-slate-900 font-medium mb-4">
                Book This Retreat
              </Button>

              <Button variant="outline" className="w-full border-teal-500 text-teal-400 hover:bg-teal-500/10">
                Contact a Wellness Consultant
              </Button>

              <div className="mt-6 pt-6 border-t border-navy-700">
                <h3 className="font-bold mb-4">Package Includes</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-teal-400 mr-3" />
                    <span className="text-slate-300">7 nights luxury accommodation</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-teal-400 mr-3" />
                    <span className="text-slate-300">Daily yoga & meditation sessions</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-teal-400 mr-3" />
                    <span className="text-slate-300">3 organic meals per day</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-teal-400 mr-3" />
                    <span className="text-slate-300">2 spa treatments per person</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-teal-400 mr-3" />
                    <span className="text-slate-300">Cultural excursions</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-teal-400 mr-3" />
                    <span className="text-slate-300">Airport transfers</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-navy-700">
                <h3 className="font-bold mb-4">Available Dates</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-300">June 15-22, 2023</span>
                    <span className="text-teal-400">Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">July 8-15, 2023</span>
                    <span className="text-teal-400">Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">August 5-12, 2023</span>
                    <span className="text-orange-400">Limited</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">September 10-17, 2023</span>
                    <span className="text-teal-400">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Retreat Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img src="/images/bali.png" alt="Bali retreat pool" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=300&text=Yoga+Pavilion"
                alt="Yoga pavilion"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=300&text=Spa+Treatment"
                alt="Spa treatment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=300&text=Dining+Area"
                alt="Dining area"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
