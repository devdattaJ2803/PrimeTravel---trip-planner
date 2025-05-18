"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { TravelHeader } from "@/components/travel-header"
import { PaymentForm } from "@/components/payment-form"
import { PaymentSuccess } from "@/components/payment-success"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { getBooking, processPayment } from "@/lib/actions"
import { ChevronLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import type { Booking, PaymentDetails } from "@/lib/types"

export default function PaymentPage() {
  const [booking, setBooking] = useState<Booking | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const bookingId = searchParams.get("bookingId")

  // Load booking data
  useEffect(() => {
    async function loadBooking() {
      if (!bookingId) {
        toast({
          title: "Error",
          description: "No booking ID provided",
          variant: "destructive",
        })
        router.push("/destinations")
        return
      }

      try {
        const bookingData = await getBooking(bookingId)
        if (bookingData) {
          setBooking(bookingData)
        } else {
          throw new Error("Booking not found")
        }
      } catch (error) {
        toast({
          title: "Error loading booking",
          description: error instanceof Error ? error.message : "An unexpected error occurred",
          variant: "destructive",
        })
        router.push("/destinations")
      } finally {
        setIsLoading(false)
      }
    }

    loadBooking()
  }, [bookingId, router])

  // Handle payment submission
  const handlePayment = async (paymentDetails: PaymentDetails) => {
    if (!booking) return

    setIsProcessing(true)

    try {
      const result = await processPayment(booking.id, paymentDetails)

      if (result.success) {
        setPaymentSuccess(true)
        toast({
          title: "Payment successful",
          description: "Your booking has been confirmed",
        })
      } else {
        throw new Error(result.error || "Payment processing failed")
      }
    } catch (error) {
      toast({
        title: "Payment failed",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
        <TravelHeader />
        <main className="container mx-auto px-4 py-12 flex items-center justify-center">
          <Card className="bg-navy-800/50 border-navy-700 w-full max-w-md">
            <CardContent className="pt-6 text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-teal-500" />
              <p>Loading booking details...</p>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  if (!booking) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
        <TravelHeader />
        <main className="container mx-auto px-4 py-12 flex items-center justify-center">
          <Card className="bg-navy-800/50 border-navy-700 w-full max-w-md">
            <CardContent className="pt-6 text-center">
              <p className="text-xl font-bold mb-4">Booking Not Found</p>
              <p className="text-slate-300 mb-6">The booking you're looking for could not be found.</p>
              <Link href="/destinations">
                <Button className="bg-teal-500 hover:bg-teal-600 text-slate-900">Browse Destinations</Button>
              </Link>
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
        {!paymentSuccess && (
          <Link
            href={`/booking/${booking.destinationId}`}
            className="inline-flex items-center text-slate-400 hover:text-teal-400 mb-8"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Booking
          </Link>
        )}

        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          {paymentSuccess ? "Payment Successful" : "Complete Your Payment"}
        </h1>

        {!paymentSuccess && (
          <p className="text-slate-300 mb-8 max-w-3xl">
            Secure your booking for {booking.destination.title} by completing the payment process below.
          </p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {paymentSuccess ? (
              <PaymentSuccess booking={booking} />
            ) : (
              <Card className="bg-navy-800/50 border-navy-700">
                <CardContent className="p-6">
                  <PaymentForm booking={booking} onSubmit={handlePayment} isProcessing={isProcessing} />
                </CardContent>
              </Card>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="bg-navy-800/50 border-navy-700 overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={booking.destination.image || "/placeholder.svg?height=300&width=500"}
                    alt={booking.destination.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-4">
                    <h2 className="text-xl font-bold">{booking.destination.title}</h2>
                    <p className="text-slate-300">{booking.destination.location}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Booking Summary</h3>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Booking ID</span>
                      <span className="font-medium">{booking.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Check-in</span>
                      <span className="font-medium">{new Date(booking.startDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Check-out</span>
                      <span className="font-medium">{new Date(booking.endDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Travelers</span>
                      <span className="font-medium">{booking.travelers}</span>
                    </div>

                    <div className="border-t border-navy-700 my-3 pt-3"></div>

                    <div className="flex justify-between font-bold">
                      <span>Total Amount</span>
                      <span>${booking.totalPrice.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Payment Status</span>
                      <span
                        className={`${
                          booking.paymentStatus === "paid"
                            ? "text-green-500"
                            : booking.paymentStatus === "failed"
                              ? "text-red-500"
                              : "text-teal-500"
                        }`}
                      >
                        {booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-navy-700 my-4 pt-4">
                    <h3 className="font-bold mb-2">Need Assistance?</h3>
                    <p className="text-slate-300 text-sm mb-4">
                      Our payment specialists are available 24/7 to help with any issues.
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
