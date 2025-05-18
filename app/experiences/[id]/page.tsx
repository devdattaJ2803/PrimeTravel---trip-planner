import { TravelHeader } from "@/components/travel-header"
import { Button } from "@/components/ui/button"
import { experiences } from "@/lib/data"
import { MapPin, Star, Calendar, Users, Clock, Check } from "lucide-react"
import Link from "next/link"

interface ExperiencePageProps {
  params: {
    id: string
  }
}

export default function ExperiencePage({ params }: ExperiencePageProps) {
  // Find the experience by ID
  const experience = experiences.find((exp) => exp.id === params.id)

  // If experience not found, show a message
  if (!experience) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
        <TravelHeader />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Experience Not Found</h1>
          <p className="mb-8">The experience you're looking for doesn't exist or has been removed.</p>
          <Link href="/experiences">
            <Button>Back to Experiences</Button>
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
        <div className="relative h-[50vh] min-h-[400px] rounded-3xl overflow-hidden mb-12">
          <img
            src={experience.image || "/placeholder.svg"}
            alt={experience.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <div className="flex items-center text-teal-400 mb-2">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="text-lg">{experience.location}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{experience.title}</h1>
            <div className="flex items-center">
              <div className="flex items-center bg-navy-800/80 backdrop-blur-sm rounded-full px-4 py-1">
                <Star className="h-5 w-5 text-teal-400 mr-1" />
                <span className="font-medium">{experience.rating}</span>
                <span className="mx-2">•</span>
                <span>Premium Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">About This Experience</h2>
              <p className="text-slate-300 mb-6">{experience.description}</p>
              <p className="text-slate-300">
                This exclusive experience has been carefully curated for discerning travelers seeking extraordinary
                moments. Our team handles all the details, from transportation and accommodations to exclusive access
                and personalized itineraries.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Luxury accommodations",
                  "Private transportation",
                  "Expert guides",
                  "Exclusive access",
                  "Personalized itinerary",
                  "24/7 concierge service",
                  "Premium amenities",
                  "VIP treatment",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Experience Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-navy-800/50 rounded-xl p-6">
                  <div className="flex items-start">
                    <Calendar className="h-6 w-6 text-teal-400 mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Availability</h3>
                      <p className="text-slate-300">
                        Available year-round with seasonal variations. Contact us for specific dates.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-navy-800/50 rounded-xl p-6">
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-teal-400 mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Group Size</h3>
                      <p className="text-slate-300">
                        Customizable for individuals, couples, families, or small groups.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-navy-800/50 rounded-xl p-6">
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-teal-400 mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Duration</h3>
                      <p className="text-slate-300">Typically 7-14 days, but can be customized to your preferences.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-navy-800/50 rounded-xl p-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-teal-400 mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Location</h3>
                      <p className="text-slate-300">
                        {experience.location}. Specific locations will be provided upon booking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-navy-800/50 rounded-xl p-6 sticky top-8">
              <div className="text-3xl font-bold mb-2">
                ${experience.price.toLocaleString()}
                <span className="text-lg font-normal text-slate-400">/{experience.priceUnit}</span>
              </div>
              <p className="text-slate-300 mb-6">Starting price per person, based on double occupancy</p>

              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-slate-900 font-medium mb-4">
                Book This Experience
              </Button>

              <Button variant="outline" className="w-full border-teal-500 text-teal-400 hover:bg-teal-500/10">
                Contact a Travel Consultant
              </Button>

              <div className="mt-6 pt-6 border-t border-navy-700">
                <h3 className="font-bold mb-4">Why Book With Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-teal-400 mr-3" />
                    <span className="text-slate-300">Personalized service</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-teal-400 mr-3" />
                    <span className="text-slate-300">Exclusive access</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-teal-400 mr-3" />
                    <span className="text-slate-300">Luxury accommodations</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-teal-400 mr-3" />
                    <span className="text-slate-300">24/7 concierge support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
