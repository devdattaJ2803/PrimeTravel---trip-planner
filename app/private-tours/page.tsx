import { TravelHeader } from "@/components/travel-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, MapPin, Star } from "lucide-react"
import Link from "next/link"

export default function PrivateToursPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
      <TravelHeader />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600&text=Private+Tours')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/30"></div>
          <div className="relative py-20 px-8 md:px-16 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Private <span className="text-teal-400">Tours</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Exclusive, personalized experiences with expert guides, tailored to your interests and preferences.
            </p>
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-slate-900 font-medium">
              Explore Private Tours
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">The Private Tour Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Itineraries",
                description: "Custom-designed experiences based on your interests, pace, and preferences.",
                icon: <Calendar className="h-10 w-10 text-teal-400" />,
              },
              {
                title: "Expert Local Guides",
                description: "Knowledgeable, professional guides who provide insider access and insights.",
                icon: <Users className="h-10 w-10 text-teal-400" />,
              },
              {
                title: "Exclusive Access",
                description: "Skip the lines and enjoy private viewings at major attractions and hidden gems.",
                icon: <Star className="h-10 w-10 text-teal-400" />,
              },
            ].map((benefit) => (
              <Card key={benefit.title} className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Tours */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Private Tours</h2>
            <Button variant="ghost" className="text-teal-400 hover:text-teal-300 hover:bg-white/5">
              View All Tours
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Ancient Rome After Hours",
                location: "Rome, Italy",
                duration: "4 hours",
                description: "Exclusive evening access to the Colosseum and Roman Forum with an archaeologist guide.",
                price: 1200,
                image: "/images/Rome.jpg",
              },
              {
                title: "Kyoto's Hidden Temples",
                location: "Kyoto, Japan",
                duration: "Full day",
                description:
                  "Discover secluded temples and gardens not found in guidebooks with a Zen Buddhist scholar.",
                price: 1500,
                image: "/images/Kyoto.jpg",
              },
              {
                title: "Santorini Sunset Yacht Tour",
                location: "Santorini, Greece",
                duration: "6 hours",
                description: "Private yacht cruise around Santorini with swimming, dining, and the famous sunset.",
                price: 2800,
                image: "/images/santorini.png",
              },
              {
                title: "Swiss Alps Helicopter Tour",
                location: "Swiss Alps",
                duration: "3 hours",
                description: "Soar over the majestic Alps with landing on a remote glacier for a champagne toast.",
                price: 3500,
                image: "/images/Swiss Alps Helicopter Tour.jpg",
              },
            ].map((tour) => (
              <div
                key={tour.title}
                className="group bg-slate-800/30 rounded-xl overflow-hidden hover:bg-slate-800/50 transition-colors"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-teal-400 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{tour.location}</span>
                    <span className="mx-2">•</span>
                    <span>{tour.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-teal-400 transition-colors">{tour.title}</h3>
                  <p className="text-slate-300 mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">
                      ${tour.price} <span className="text-sm font-normal text-slate-400">per group</span>
                    </span>
                    <Button className="bg-teal-500 hover:bg-teal-600 text-slate-900">Book Tour</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "Speak with our travel experts about your interests and preferences.",
              },
              {
                step: "2",
                title: "Custom Itinerary",
                description: "Receive a tailored tour proposal designed specifically for you.",
              },
              {
                step: "3",
                title: "Refinement",
                description: "Fine-tune the details until the tour is perfect for your needs.",
              },
              {
                step: "4",
                title: "Experience",
                description: "Enjoy your private tour with our expert guides and VIP service.",
              },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="h-16 w-16 rounded-full bg-teal-500 text-slate-900 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Our private tour of Rome was the highlight of our trip. Our guide's knowledge and passion brought history to life in a way no guidebook could.",
                name: "James & Sarah",
                location: "New York, USA",
                avatar: "/images/avatar1.png",
              },
              {
                quote:
                  "The exclusive access to temples in Kyoto was incredible. We experienced authentic Japanese culture without the crowds. Worth every penny.",
                name: "Michael Chen",
                location: "Toronto, Canada",
                avatar: "/images/avatar2.png",
              },
              {
                quote:
                  "The helicopter tour of the Swiss Alps was breathtaking. The remote glacier landing for champagne was an unforgettable experience.",
                name: "Emma & David",
                location: "London, UK",
                avatar: "/images/avatar3.png",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-16 w-16 rounded-full overflow-hidden mb-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="text-slate-300 mb-4 italic">"{testimonial.quote}"</p>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-3xl overflow-hidden bg-gradient-to-r from-teal-500 to-teal-700 p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Ready for Your Private Tour Experience?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-slate-800 max-w-2xl mx-auto">
            Contact our team to start planning your personalized journey with expert guides and exclusive access.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8">
              Request a Consultation
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
}
