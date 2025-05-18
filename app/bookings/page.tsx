"use client"

import { useState, useEffect } from "react"
import { TravelHeader } from "@/components/travel-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { getUserBookings, cancelBooking } from "@/lib/actions"
import { Calendar, MapPin, Users, Loader2 } from "lucide-react"
import Link from "next/link"
import type { Booking } from "@/lib/types"

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isCancelling, setIsCancelling] = useState<string | null>(null)

  // Load user bookings
  useEffect(() => {
    async function loadBookings() {
      try {
        // In a real app, this would use the authenticated user's ID
        const userBookings = await getUserBookings("user-123")
        setBookings(userBookings)
      } catch (error) {
        toast({
          title: "Error loading bookings",
          description: "Failed to load your bookings. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadBookings()
  }, [])

  // Handle booking cancellation
  const handleCancelBooking = async (bookingId: string) => {
    if (window.confirm("Are you sure you want to cancel this booking? This action cannot be undone.")) {
      setIsCancelling(bookingId)

      try {
        const result = await cancelBooking(bookingId)

        if (result.success) {
          // Update bookings list
          setBookings((prev) =>
            prev.map((booking) => (booking.id === bookingId ? { ...booking, status: "cancelled" } : booking)),
          )

          toast({
            title: "Booking cancelled",
            description: "Your booking has been successfully cancelled.",
          })
        } else {
          throw new Error(result.error || "Failed to cancel booking")
        }
      } catch (error) {
        toast({
          title: "Cancellation failed",
          description: error instanceof Error ? error.message : "An unexpected error occurred",
          variant: "destructive",
        })
      } finally {
        setIsCancelling(null)
      }
    }
  }

  // Filter bookings by status
  const upcomingBookings = bookings.filter(
    (booking) =>
      booking.status !== "cancelled" && booking.status !== "completed" && new Date(booking.startDate) > new Date(),
  )

  const pastBookings = bookings.filter(
    (booking) => booking.status === "completed" || new Date(booking.endDate) < new Date(),
  )

  const cancelledBookings = bookings.filter((booking) => booking.status === "cancelled")

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
      <TravelHeader />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">My Bookings</h1>
        <p className="text-slate-300 mb-8 max-w-3xl">
          Manage your travel bookings, view upcoming trips, and access your booking history.
        </p>

        {isLoading ? (
          <Card className="bg-navy-800/50 border-navy-700">
            <CardContent className="p-6 text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-teal-500" />
              <p>Loading your bookings...</p>
            </CardContent>
          </Card>
        ) : bookings.length === 0 ? (
          <Card className="bg-navy-800/50 border-navy-700">
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-navy-700 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-slate-400" />
              </div>
              <h2 className="text-xl font-bold mb-2">No Bookings Found</h2>
              <p className="text-slate-300 mb-6">
                You don't have any bookings yet. Start planning your next premium travel experience.
              </p>
              <Link href="/destinations">
                <Button className="bg-teal-500 hover:bg-teal-600 text-slate-900">Explore Destinations</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="bg-navy-800 mb-6">
              <TabsTrigger
                value="upcoming"
                className="data-[state=active]:bg-teal-500 data-[state=active]:text-slate-900"
              >
                Upcoming ({upcomingBookings.length})
              </TabsTrigger>
              <TabsTrigger value="past" className="data-[state=active]:bg-teal-500 data-[state=active]:text-slate-900">
                Past ({pastBookings.length})
              </TabsTrigger>
              <TabsTrigger
                value="cancelled"
                className="data-[state=active]:bg-teal-500 data-[state=active]:text-slate-900"
              >
                Cancelled ({cancelledBookings.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingBookings.length === 0 ? (
                  <Card className="bg-navy-800/50 border-navy-700 col-span-full">
                    <CardContent className="p-6 text-center">
                      <p className="text-slate-300">You don't have any upcoming bookings.</p>
                    </CardContent>
                  </Card>
                ) : (
                  upcomingBookings.map((booking) => (
                    <Card key={booking.id} className="bg-navy-800/50 border-navy-700 overflow-hidden">
                      <div className="aspect-[3/1] relative">
                        <img
                          src={booking.destination.image || "/placeholder.svg?height=200&width=600"}
                          alt={booking.destination.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                          <h2 className="text-xl font-bold">{booking.destination.title}</h2>
                          <div className="flex items-center text-slate-300">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{booking.destination.location}</span>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-slate-400">Check-in</p>
                            <p className="font-medium">{new Date(booking.startDate).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-slate-400">Check-out</p>
                            <p className="font-medium">{new Date(booking.endDate).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-slate-400">Travelers</p>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1 text-slate-400" />
                              <span>{booking.travelers}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-slate-400">Booking ID</p>
                            <p className="font-medium text-teal-400">{booking.id}</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-slate-400">Total Price</p>
                            <p className="text-lg font-bold">${booking.totalPrice.toLocaleString()}</p>
                          </div>
                          <div className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-medium">
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap gap-3">
                        <Link href={`/booking/details?bookingId=${booking.id}`} className="flex-1">
                          <Button variant="outline" className="w-full border-slate-600">
                            View Details
                          </Button>
                        </Link>
                        <Button
                          variant="destructive"
                          className="flex-1"
                          onClick={() => handleCancelBooking(booking.id)}
                          disabled={isCancelling === booking.id}
                        >
                          {isCancelling === booking.id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            "Cancel Booking"
                          )}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>

            <TabsContent value="past" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pastBookings.length === 0 ? (
                  <Card className="bg-navy-800/50 border-navy-700 col-span-full">
                    <CardContent className="p-6 text-center">
                      <p className="text-slate-300">You don't have any past bookings.</p>
                    </CardContent>
                  </Card>
                ) : (
                  pastBookings.map((booking) => (
                    <Card key={booking.id} className="bg-navy-800/50 border-navy-700 overflow-hidden">
                      <div className="aspect-[3/1] relative">
                        <img
                          src={booking.destination.image || "/placeholder.svg?height=200&width=600"}
                          alt={booking.destination.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                          <h2 className="text-xl font-bold">{booking.destination.title}</h2>
                          <div className="flex items-center text-slate-300">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{booking.destination.location}</span>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-slate-400">Check-in</p>
                            <p className="font-medium">{new Date(booking.startDate).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-slate-400">Check-out</p>
                            <p className="font-medium">{new Date(booking.endDate).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-slate-400">Travelers</p>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1 text-slate-400" />
                              <span>{booking.travelers}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-slate-400">Booking ID</p>
                            <p className="font-medium text-teal-400">{booking.id}</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-slate-400">Total Price</p>
                            <p className="text-lg font-bold">${booking.totalPrice.toLocaleString()}</p>
                          </div>
                          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                            Completed
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap gap-3">
                        <Link href={`/booking/details?bookingId=${booking.id}`} className="flex-1">
                          <Button variant="outline" className="w-full border-slate-600">
                            View Details
                          </Button>
                        </Link>
                        <Button className="flex-1 bg-teal-500 hover:bg-teal-600 text-slate-900">Book Again</Button>
                      </CardFooter>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>

            <TabsContent value="cancelled" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cancelledBookings.length === 0 ? (
                  <Card className="bg-navy-800/50 border-navy-700 col-span-full">
                    <CardContent className="p-6 text-center">
                      <p className="text-slate-300">You don't have any cancelled bookings.</p>
                    </CardContent>
                  </Card>
                ) : (
                  cancelledBookings.map((booking) => (
                    <Card key={booking.id} className="bg-navy-800/50 border-navy-700 overflow-hidden">
                      <div className="aspect-[3/1] relative">
                        <img
                          src={booking.destination.image || "/placeholder.svg?height=200&width=600"}
                          alt={booking.destination.title}
                          className="w-full h-full object-cover opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                          <h2 className="text-xl font-bold">{booking.destination.title}</h2>
                          <div className="flex items-center text-slate-300">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{booking.destination.location}</span>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-slate-400">Check-in</p>
                            <p className="font-medium">{new Date(booking.startDate).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-slate-400">Check-out</p>
                            <p className="font-medium">{new Date(booking.endDate).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-slate-400">Travelers</p>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1 text-slate-400" />
                              <span>{booking.travelers}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-slate-400">Booking ID</p>
                            <p className="font-medium text-teal-400">{booking.id}</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-slate-400">Total Price</p>
                            <p className="text-lg font-bold">${booking.totalPrice.toLocaleString()}</p>
                          </div>
                          <div className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                            Cancelled
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="px-6 pb-6 pt-0">
                        <Button className="w-full bg-teal-500 hover:bg-teal-600 text-slate-900">Book Again</Button>
                      </CardFooter>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  )
}
