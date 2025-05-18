"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { TravelHeader } from "@/components/travel-header"
import { BookingForm } from "@/components/booking-form"
import { BookingAddons } from "@/components/booking-addons"
import { BookingSummary } from "@/components/booking-summary"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { createBooking } from "@/lib/actions"
import { destinations } from "@/lib/data"
import { bookingAddons } from "@/lib/booking-data"
import { ChevronLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import type { Destination } from "@/lib/types"

export default function BookingPage({ params }: { params: { destinationId: string } }) {
  const [destination, setDestination] = useState<Destination | null>(null)
  const [activeTab, setActiveTab] = useState("details")
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  // Load destination data
  useEffect(() => {
    const dest = destinations.find((d) => d.id === params.destinationId)
    if (dest) {
      setDestination(dest)
    }
  }, [params.destinationId])

  // Handle addon selection
  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) => (prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]))
  }

  // Calculate addon cost
  const calculateAddonsCost = () => {
    return selectedAddons.reduce((total, addonId) => {
      const addon = bookingAddons.find((a) => a.id === addonId)
      return total + (addon ? addon.price : 0)
    }, 0)
  }

  // Handle form submission
  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)

    try {
      // Add selected addons to form data
      selectedAddons.forEach((addonId) => {
        formData.append("addons", addonId)
      })

      const result = await createBooking(formData)

      if (result.success && result.bookingId) {
        toast({
          title: "Booking created successfully",
          description: "Proceeding to payment...",
        })
        router.push(`/booking/payment?bookingId=${result.bookingId}`)
      } else {
        throw new Error(result.error || "Failed to create booking")
      }
    } catch (error) {
      toast({
        title: "Booking failed",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!destination) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
        <TravelHeader />
        <main className="container mx-auto px-4 py-12 flex items-center justify-center">
          <Card className="bg-navy-800/50 border-navy-700 w-full max-w-md">
            <CardContent className="pt-6 text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-teal-500" />
              <p>Loading destination details...</p>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
      <TravelHeader />

      <main className="container mx-auto px-4 py-12">
        <Link
          href={`/destinations/${destination.id}`}
          className="inline-flex items-center text-slate-400 hover:text-teal-400 mb-8"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Destination
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">Book Your Premium Experience</h1>
        <p className="text-slate-300 mb-8 max-w-3xl">
          Complete your booking for {destination.title} in {destination.location}. Customize your experience with
          premium add-ons and special requests.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="bg-navy-800 mb-6">
                <TabsTrigger
                  value="details"
                  className="data-[state=active]:bg-teal-500 data-[state=active]:text-slate-900"
                >
                  Booking Details
                </TabsTrigger>
                <TabsTrigger
                  value="addons"
                  className="data-[state=active]:bg-teal-500 data-[state=active]:text-slate-900"
                >
                  Premium Add-ons
                </TabsTrigger>
                <TabsTrigger
                  value="review"
                  className="data-[state=active]:bg-teal-500 data-[state=active]:text-slate-900"
                >
                  Review & Confirm
                </TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="mt-0">
                <Card className="bg-navy-800/50 border-navy-700">
                  <CardContent className="p-6">
                    <BookingForm destination={destination} onSubmit={() => setActiveTab("addons")} />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="addons" className="mt-0">
                <Card className="bg-navy-800/50 border-navy-700">
                  <CardContent className="p-6">
                    <BookingAddons selectedAddons={selectedAddons} onToggleAddon={toggleAddon} />
                    <div className="flex justify-between mt-8">
                      <Button variant="outline" onClick={() => setActiveTab("details")}>
                        Back to Details
                      </Button>
                      <Button
                        className="bg-teal-500 hover:bg-teal-600 text-slate-900"
                        onClick={() => setActiveTab("review")}
                      >
                        Continue to Review
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="review" className="mt-0">
                <Card className="bg-navy-800/50 border-navy-700">
                  <CardContent className="p-6">
                    <BookingSummary
                      destination={destination}
                      selectedAddons={selectedAddons}
                      addonsCost={calculateAddonsCost()}
                      onSubmit={handleSubmit}
                      isSubmitting={isSubmitting}
                    />
                    <Button
                      variant="outline"
                      onClick={() => setActiveTab("addons")}
                      className="mt-4"
                      disabled={isSubmitting}
                    >
                      Back to Add-ons
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="bg-navy-800/50 border-navy-700 overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={destination.image || "/placeholder.svg?height=300&width=500"}
                    alt={destination.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900 to-transparent p-4">
                    <h2 className="text-xl font-bold">{destination.title}</h2>
                    <p className="text-slate-300">{destination.location}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between mb-4">
                    <span className="text-slate-300">Price</span>
                    <span className="font-bold">
                      ${destination.price.toLocaleString()} / {destination.priceUnit}
                    </span>
                  </div>

                  {selectedAddons.length > 0 && (
                    <div className="flex justify-between mb-4">
                      <span className="text-slate-300">Add-ons</span>
                      <span className="font-bold">${calculateAddonsCost().toLocaleString()}</span>
                    </div>
                  )}

                  <div className="border-t border-navy-700 my-4 pt-4">
                    <h3 className="font-bold mb-2">Included Amenities</h3>
                    <ul className="space-y-2">
                      {destination.amenities.map((amenity, index) => (
                        <li key={index} className="flex items-center text-slate-300">
                          <div className="h-2 w-2 rounded-full bg-teal-500 mr-2"></div>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-navy-700 my-4 pt-4">
                    <h3 className="font-bold mb-2">Need Assistance?</h3>
                    <p className="text-slate-300 text-sm mb-4">
                      Our travel consultants are available 24/7 to help with your booking.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-slate-900"
                    >
                      Contact Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
