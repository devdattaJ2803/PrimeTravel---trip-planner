"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format, addDays, differenceInDays } from "date-fns"
import { cn } from "@/lib/utils"
import type { Destination } from "@/lib/types"

interface BookingFormProps {
  destination: Destination
  onSubmit: () => void
}

export function BookingForm({ destination, onSubmit }: BookingFormProps) {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [travelers, setTravelers] = useState(2)
  const [formValid, setFormValid] = useState(false)

  // Calculate minimum end date (day after start date)
  const minEndDate = startDate ? addDays(startDate, 1) : undefined

  // Calculate duration and price
  const calculatePrice = () => {
    if (!startDate || !endDate) return null

    const days = differenceInDays(endDate, startDate)

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

  // Check form validity
  const checkFormValidity = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    const isValid = form.checkValidity() && !!startDate && !!endDate
    setFormValid(isValid)
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formValid) {
      onSubmit()
    }
  }

  return (
    <form onSubmit={handleSubmit} onChange={checkFormValidity} className="space-y-6">
      <input type="hidden" name="destinationId" value={destination.id} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="check-in">Check-in Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal bg-navy-700 border-navy-600 hover:bg-navy-600 hover:text-white",
                  !startDate && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-navy-800 border-navy-700">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={(date) => {
                  setStartDate(date)
                  // If end date is before new start date, reset it
                  if (endDate && date && endDate <= date) {
                    setEndDate(undefined)
                  }
                }}
                initialFocus
                disabled={(date) => date < new Date()}
                className="bg-navy-800"
              />
            </PopoverContent>
          </Popover>
          <input type="hidden" name="startDate" value={startDate ? startDate.toISOString() : ""} required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="check-out">Check-out Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal bg-navy-700 border-navy-600 hover:bg-navy-600 hover:text-white",
                  !endDate && "text-muted-foreground",
                )}
                disabled={!startDate}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-navy-800 border-navy-700">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                initialFocus
                disabled={(date) => !startDate || date < minEndDate!}
                className="bg-navy-800"
              />
            </PopoverContent>
          </Popover>
          <input type="hidden" name="endDate" value={endDate ? endDate.toISOString() : ""} required />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Number of Travelers</Label>
        <div className="flex items-center space-x-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="bg-navy-700 border-navy-600 hover:bg-navy-600 hover:text-white"
            onClick={() => setTravelers(Math.max(1, travelers - 1))}
          >
            -
          </Button>
          <div className="w-full h-10 flex items-center justify-center bg-navy-700 rounded-md border border-navy-600">
            <span className="font-medium">{travelers}</span>
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="bg-navy-700 border-navy-600 hover:bg-navy-600 hover:text-white"
            onClick={() => setTravelers(travelers + 1)}
          >
            +
          </Button>
        </div>
        <input type="hidden" name="travelers" value={travelers} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            required
            className="bg-navy-700 border-navy-600 focus:border-teal-500 text-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="bg-navy-700 border-navy-600 focus:border-teal-500 text-white"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          className="bg-navy-700 border-navy-600 focus:border-teal-500 text-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
        <Textarea
          id="specialRequests"
          name="specialRequests"
          className="bg-navy-700 border-navy-600 focus:border-teal-500 min-h-[80px] text-white"
          placeholder="Let us know if you have any special requirements or preferences"
        />
      </div>

      {startDate && endDate && (
        <div className="rounded-lg bg-navy-700/50 p-4">
          <h4 className="font-medium mb-2">Price Summary</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-300">
                ${destination.price} ×{" "}
                {destination.priceUnit === "night"
                  ? `${differenceInDays(endDate, startDate)} nights`
                  : destination.priceUnit === "week"
                    ? `${Math.ceil(differenceInDays(endDate, startDate) / 7)} weeks`
                    : `${travelers} travelers`}
              </span>
              <span>${calculatePrice()?.toLocaleString()}</span>
            </div>
            <div className="border-t border-navy-600 my-2 pt-2 flex justify-between font-medium">
              <span>Base Total</span>
              <span>${calculatePrice()?.toLocaleString()}</span>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              * Additional fees and add-ons will be calculated in the next steps
            </p>
          </div>
        </div>
      )}

      <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-navy-900" disabled={!formValid}>
        Continue to Add-ons
      </Button>
    </form>
  )
}
