"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, CreditCard, Lock } from "lucide-react"
import { useRouter } from "next/navigation"
import { createBooking } from "@/lib/actions"

interface PaymentFormProps {
  bookingData: any
  onSuccess: () => void
}

export function PaymentForm({ bookingData, onSuccess }: PaymentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const router = useRouter()

  // Format card number with spaces
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, "")
    let formattedValue = ""

    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += " "
      }
      formattedValue += value[i]
    }

    if (formattedValue.length <= 19) {
      // 16 digits + 3 spaces
      setCardNumber(formattedValue)
    }
  }

  // Format expiry date (MM/YY)
  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    let formattedValue = ""

    if (value.length > 0) {
      formattedValue = value.substring(0, 2)
      if (value.length > 2) {
        formattedValue += "/" + value.substring(2, 4)
      }
    }

    if (formattedValue.length <= 5) {
      // MM/YY
      setExpiryDate(formattedValue)
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Create booking
      await createBooking({
        ...bookingData,
        paymentStatus: "paid",
        bookingStatus: "confirmed",
      })

      onSuccess()
    } catch (error) {
      console.error("Payment failed:", error)
      // Handle error
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-2">Payment Details</h2>
        <p className="text-slate-300 mb-6">Please enter your payment information to complete your booking.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-navy-800 rounded-lg p-6 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-navy-700">
            <h3 className="font-bold text-lg flex items-center">
              <CreditCard className="mr-2 h-5 w-5" />
              Credit or Debit Card
            </h3>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-12 bg-slate-700 rounded flex items-center justify-center text-xs font-bold">
                VISA
              </div>
              <div className="h-8 w-12 bg-slate-700 rounded flex items-center justify-center text-xs font-bold">MC</div>
              <div className="h-8 w-12 bg-slate-700 rounded flex items-center justify-center text-xs font-bold">
                AMEX
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="card-name">Cardholder Name</Label>
              <Input
                id="card-name"
                placeholder="Name as it appears on card"
                required
                className="bg-navy-700 border-navy-600 focus:border-teal-500 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="card-number">Card Number</Label>
              <div className="relative">
                <Input
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  required
                  className="bg-navy-700 border-navy-600 focus:border-teal-500 text-white"
                  maxLength={19}
                />
                <div className="absolute right-3 top-2.5 text-slate-400">
                  <Lock className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input
                  id="expiry"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                  required
                  className="bg-navy-700 border-navy-600 focus:border-teal-500 text-white"
                  maxLength={5}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">Security Code (CVV)</Label>
                <Input
                  id="cvv"
                  type="password"
                  placeholder="123"
                  required
                  className="bg-navy-700 border-navy-600 focus:border-teal-500 text-white"
                  maxLength={4}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-navy-800 rounded-lg p-6 space-y-4">
          <h3 className="font-bold mb-4">Billing Address</h3>

          <div className="space-y-2">
            <Label htmlFor="country">Country/Region</Label>
            <Select required>
              <SelectTrigger className="bg-navy-700 border-navy-600 focus:ring-teal-500 text-white">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent className="bg-navy-800 border-navy-700">
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="address1">Address Line 1</Label>
              <Input id="address1" required className="bg-navy-700 border-navy-600 focus:border-teal-500 text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address2">Address Line 2 (Optional)</Label>
              <Input id="address2" className="bg-navy-700 border-navy-600 focus:border-teal-500 text-white" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" required className="bg-navy-700 border-navy-600 focus:border-teal-500 text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State/Province</Label>
              <Input id="state" required className="bg-navy-700 border-navy-600 focus:border-teal-500 text-white" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="zip">Postal/ZIP Code</Label>
            <Input id="zip" required className="bg-navy-700 border-navy-600 focus:border-teal-500 text-white" />
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="save-card" />
          <div>
            <Label htmlFor="save-card" className="text-sm">
              Save this card for future bookings
            </Label>
            <p className="text-xs text-slate-400 mt-1">
              Your payment information will be stored securely for future transactions.
            </p>
          </div>
        </div>

        <div className="bg-navy-800/50 rounded-lg p-4 flex items-center space-x-3 text-sm">
          <Lock className="h-5 w-5 text-teal-400" />
          <p className="text-slate-300">
            Your payment information is encrypted and secure. We use industry-standard security measures to protect your
            data.
          </p>
        </div>

        <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-navy-900" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing Payment...
            </>
          ) : (
            "Complete Payment"
          )}
        </Button>
      </form>
    </div>
  )
}
