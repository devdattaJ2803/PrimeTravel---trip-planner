"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Download, Calendar, Share2 } from "lucide-react"
import Link from "next/link"
import type { Booking } from "@/lib/types"

interface PaymentSuccessProps {
  booking: Booking
}

export function PaymentSuccess({ booking }: PaymentSuccessProps) {
  return (
    <div className="space-y-8">
      <Card className="bg-navy-800/50 border-navy-700">
        <CardContent className="pt-6 text-center">
          <div className="h-16 w-16 rounded-full bg-teal-500/20 text-teal-500 flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
          <p className="text-slate-300 mb-6">
            Your booking for {booking.destination.title} has been confirmed. A confirmation email has been sent to{" "}
            <span className="text-teal-400">{booking.contactInfo.email}</span>.
          </p>
          <div className="bg-navy-700/50 rounded-lg p-4 mb-6">
            <div className="text-sm text-slate-300 mb-2">Booking Reference</div>
            <div className="text-xl font-mono font-bold text-teal-400">{booking.id}</div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-teal-500 hover:bg-teal-600 text-slate-900">
              <Download className="h-4 w-4 mr-2" />
              Download Receipt
            </Button>
            <Button variant="outline" className="border-navy-700">
              <Calendar className="h-4 w-4 mr-2" />
              Add to Calendar
            </Button>
            <Button variant="outline" className="border-navy-700">
              <Share2 className="h-4 w-4 mr-2" />
              Share Itinerary
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-navy-800/50 border-navy-700">
        <CardContent className="pt-6">
          <h3 className="font-bold text-lg mb-4">What's Next?</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-teal-500 text-slate-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                1
              </div>
              <div>
                <p className="font-medium">Check your email</p>
                <p className="text-sm text-slate-300">
                  We've sent a detailed confirmation to your email with all the booking details.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-teal-500 text-slate-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                2
              </div>
              <div>
                <p className="font-medium">Personal Travel Consultant</p>
                <p className="text-sm text-slate-300">
                  Your dedicated travel consultant will contact you within 24 hours to discuss your trip details.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-teal-500 text-slate-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                3
              </div>
              <div>
                <p className="font-medium">Prepare for your journey</p>
                <p className="text-sm text-slate-300">
                  Review our pre-departure checklist and travel tips to ensure a smooth experience.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/bookings">
          <Button className="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 text-slate-900">View My Bookings</Button>
        </Link>
        <Link href="/destinations">
          <Button variant="outline" className="w-full sm:w-auto border-navy-700">
            Explore More Destinations
          </Button>
        </Link>
      </div>
    </div>
  )
}
