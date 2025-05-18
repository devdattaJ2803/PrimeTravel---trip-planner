import { TravelHeader } from "@/components/travel-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { destinations } from "@/lib/data"
import { Check, ChevronLeft, MapPin, Star } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BookingForm } from "@/components/booking-form"

export default function DestinationPage({ params }: { params: { id: string } }) {
  const destination = destinations.find((d) => d.id === params.id)

  if (!destination) {
    notFound()
  }

  // Find related destinations in the same category
  const relatedDestinations = destinations
    .filter((d) => d.category === destination.category && d.id !== destination.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
      <TravelHeader />

      <main className="container mx-auto px-4 py-12">
        <Link href="/destinations" className="inline-flex items-center text-slate-400 hover:text-teal-400 mb-8">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Destinations
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden mb-8">
              <img
                src={destination.image || "/placeholder.svg?height=600&width=1000"}
                alt={destination.title}
                className="w-full aspect-[16/9] object-cover"
              />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                ${destination.price.toLocaleString()}/{destination.priceUnit}
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center text-teal-400 mb-2">
                <Star className="h-5 w-5 fill-current mr-1" />
                <span className="font-medium">{destination.rating}</span>
                <span className="mx-2">•</span>
                <span className="text-slate-400">Premium Experience</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-2">{destination.title}</h1>

              <div className="flex items-center text-slate-400 mb-6">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{destination.location}</span>
              </div>

              <p className="text-slate-300 mb-6 text-lg leading-relaxed">{destination.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {destination.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-teal-500/20 text-teal-500 flex items-center justify-center mr-2 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="bg-navy-800 mb-6">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-teal-500 data-[state=active]:text-navy-900"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="location"
                  className="data-[state=active]:bg-teal-500 data-[state=active]:text-navy-900"
                >
                  Location
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="data-[state=active]:bg-teal-500 data-[state=active]:text-navy-900"
                >
                  Reviews
                </TabsTrigger>
                <TabsTrigger
                  value="policies"
                  className="data-[state=active]:bg-teal-500 data-[state=active]:text-navy-900"
                >
                  Policies
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-0">
                <Card className="bg-navy-800/50 border-navy-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-4">About this destination</h3>
                    <p className="text-slate-300 mb-4">{destination.description}</p>
                    <p className="text-slate-300 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit
                      arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut
                      in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                    </p>
                    <h4 className="text-lg font-medium mb-3 mt-6">What's included</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {destination.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-teal-500 mr-2" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="location" className="mt-0">
                <Card className="bg-navy-800/50 border-navy-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-4">Location Information</h3>
                    <div className="aspect-video bg-navy-700 rounded-lg mb-4 overflow-hidden">
                      <img
                        src="/placeholder.svg?height=400&width=800&text=Map"
                        alt="Location map"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-slate-300 mb-4">
                      Located in the heart of {destination.location}, this premium destination offers easy access to
                      local attractions while maintaining an exclusive and private atmosphere.
                    </p>
                    <div className="space-y-3 mt-6">
                      <h4 className="font-medium">Nearby Attractions</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Local Landmark</span>
                          <span className="text-slate-400">2.5 km</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Famous Restaurant</span>
                          <span className="text-slate-400">1.8 km</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Shopping District</span>
                          <span className="text-slate-400">3.2 km</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-0">
                <Card className="bg-navy-800/50 border-navy-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-medium">Guest Reviews</h3>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-teal-400 fill-current mr-1" />
                        <span className="font-medium">{destination.rating}</span>
                        <span className="text-slate-400 ml-1">/ 5</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {[1, 2, 3].map((review) => (
                        <div key={review} className="pb-6 border-b border-navy-700 last:border-0 last:pb-0">
                          <div className="flex justify-between mb-3">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full bg-navy-700 mr-3"></div>
                              <div>
                                <h4 className="font-medium">Premium Traveler</h4>
                                <p className="text-sm text-slate-400">Visited {new Date().getFullYear() - review}</p>
                              </div>
                            </div>
                            <div className="flex items-center text-teal-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < 5 ? "fill-current" : ""}`} />
                              ))}
                            </div>
                          </div>
                          <p className="text-slate-300">
                            "An exceptional experience from start to finish. The attention to detail and personalized
                            service exceeded our expectations. We will definitely be returning for our next vacation."
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="policies" className="mt-0">
                <Card className="bg-navy-800/50 border-navy-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-4">Booking Policies</h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-2">Cancellation Policy</h4>
                        <p className="text-slate-300">
                          Full refund if canceled at least 30 days before arrival. 50% refund if canceled at least 14
                          days before arrival. No refund if canceled less than 14 days before arrival.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Check-in & Check-out</h4>
                        <div className="flex justify-between text-slate-300">
                          <span>Check-in: 3:00 PM - 8:00 PM</span>
                          <span>Check-out: 11:00 AM</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">House Rules</h4>
                        <ul className="space-y-1 text-slate-300">
                          <li>• No smoking</li>
                          <li>• No parties or events</li>
                          <li>• Pets allowed (with restrictions)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingForm destination={destination} />

              <Card className="bg-navy-800/50 border-navy-700 mt-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Need Help?</h3>
                  <p className="text-slate-300 mb-4">
                    Our premium travel consultants are available 24/7 to assist with your booking and answer any
                    questions.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-navy-900"
                  >
                    Contact a Consultant
                  </Button>
                </CardContent>
              </Card>

              {relatedDestinations.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-4">Similar Destinations</h3>
                  <div className="space-y-4">
                    {relatedDestinations.map((related) => (
                      <Link key={related.id} href={`/destinations/${related.id}`}>
                        <div className="group flex items-center gap-3 p-3 rounded-lg hover:bg-navy-800/70 transition-colors">
                          <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                            <img
                              src={related.image || "/placeholder.svg?height=100&width=100"}
                              alt={related.title}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium group-hover:text-teal-400 transition-colors">{related.title}</h4>
                            <div className="flex items-center text-sm text-slate-400">
                              <MapPin className="h-3 w-3 mr-1" />
                              <span>{related.location}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
