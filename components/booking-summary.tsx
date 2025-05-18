"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { differenceInDays } from "date-fns"
import { Loader2 } from "lucide-react"
import { bookingAddons } from "@/lib/booking-data"
import type { Destination } from "@/lib/types"

interface BookingSummaryProps {
  destination: Destination
  selectedAddons: string[]
  addonsCost: number
  onSubmit: (formData: FormData) => void
  isSubmitting: boolean
}

export function BookingSummary({
  destination,
  selectedAddons,
  addonsCost,
  onSubmit,
  isSubmitting,
}: BookingSummaryProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [startDate, setStartDate] = useState<string>("")
  const [endDate, setEndDate] = useState<string>("")
  const [travelers, setTravelers] = useState<number>(2)
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [specialRequests, setSpecialRequests] = useState<string>("")

  // Calculate base price
  const calculateBasePrice = () => {
    if (!startDate || !endDate) return 0

    const start = new Date(startDate)
    const end = new Date(endDate)
    const days = differenceInDays(end, start)

    if (destination.priceUnit === "night") {
      return days * destination.price
    } else if (destination.priceUnit === "week") {
      const weeks = Math.ceil(days / 7)
      return weeks * destination.price
    } else {
      // per person
      return travelers * destination.price
    }
  }

  // Calculate total price
  const basePrice = calculateBasePrice()
  const serviceFee = Math.round(basePrice * 0.1) // 10% service fee
  const totalPrice = basePrice + addonsCost + serviceFee

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formRef.current) {
      const formData = new FormData(formRef.current)
      onSubmit(formData)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-2">Review Your Booking</h2>
        <p className="text-slate-300 mb-6">Please review your booking details before proceeding to payment.</p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        {/* Hidden fields to store booking data */}
        <input type="hidden" name="destinationId" value={destination.id} />
        <input type="hidden" name="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <input type="hidden" name="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <input
          type="hidden"
          name="travelers"
          value={travelers}
          onChange={(e) => setTravelers(Number(e.target.value))}
        />
        <input type="hidden" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="hidden" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="hidden" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input
          type="hidden"
          name="specialRequests"
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
        />

        <div className="navy-800 rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-center pb-4 border-b navy-700">
            <div>
              <h3 className="font-bold text-lg">{destination.title}</h3>
              <p className="text-slate-300">{destination.location}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400">Base Price</p>
              <p className="font-bold">
                ${destination.price} / {destination.priceUnit}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-slate-400">Check-in</p>
              <p className="font-medium">{startDate ? new Date(startDate).toLocaleDateString() : "Not selected"}</p>
            </div>
            <div>
              <p className="text-slate-400">Check-out</p>
              <p className="font-medium">{endDate ? new Date(endDate).toLocaleDateString() : "Not selected"}</p>
            </div>
            <div>
              <p className="text-slate-400">Travelers</p>
              <p className="font-medium">
                {travelers} {travelers === 1 ? "person" : "people"}
              </p>
            </div>
            <div>
              <p className="text-slate-400">Contact</p>
              <p className="font-medium">{name || "Not provided"}</p>
            </div>
          </div>
        </div>

        {selectedAddons.length > 0 && (
          <div className="navy-800 rounded-lg p-6">
            <h3 className="font-bold mb-4">Selected Add-ons</h3>
            <div className="space-y-3">
              {selectedAddons.map((addonId) => {
                const addon = bookingAddons.find((a) => a.id === addonId)
                if (!addon) return null
                return (
                  <div key={addon.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{addon.name}</p>
                      <p className="text-sm text-slate-400">{addon.description}</p>
                    </div>
                    <p className="font-bold">${addon.price}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <div className="navy-800 rounded-lg p-6">
          <h3 className="font-bold mb-4">Price Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-300">Base Price</span>
              <span>${basePrice.toLocaleString()}</span>
            </div>
            {addonsCost > 0 && (
              <div className="flex justify-between">
                <span className="text-slate-300">Add-ons</span>
                <span>${addonsCost.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-slate-300">Service Fee</span>
              <span>${serviceFee.toLocaleString()}</span>
            </div>
            <div className="border-t border-slate-700 my-2 pt-2 flex justify-between font-bold">
              <span>Total</span>
              <span>${totalPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="navy-800 rounded-lg p-6">
          <h3 className="font-bold mb-4">Booking Policies</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium">Cancellation Policy</p>
              <p className="text-slate-300">
                Full refund if canceled at least 30 days before check-in. 50% refund if canceled at least 14 days before
                check-in. No refund if canceled less than 14 days before check-in.
              </p>
            </div>
            <div>
              <p className="font-medium">Payment</p>
              <p className="text-slate-300">
                A deposit of 25% is required to secure your booking. The remaining balance is due 30 days before your
                arrival.
              </p>
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-slate-900" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            `Proceed to Payment ($${totalPrice.toLocaleString()})`
          )}
        </Button>
      </form>
    </div>
  )
}
