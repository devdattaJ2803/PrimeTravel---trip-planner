"use server"

import { revalidatePath } from "next/cache"
import { destinations } from "./data"
import { bookingAddons } from "./booking-data"
import type { PaymentDetails, Booking, BookingStatus } from "./types"

// Simulate a database of bookings
const bookings: Booking[] = []

export async function createBooking(
  formData: FormData,
): Promise<{ success: boolean; bookingId?: string; error?: string }> {
  try {
    // Extract booking data from form
    const destinationId = formData.get("destinationId") as string
    const startDate = formData.get("startDate") as string
    const endDate = formData.get("endDate") as string
    const travelers = Number.parseInt(formData.get("travelers") as string)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const specialRequests = formData.get("specialRequests") as string

    // Get selected addons
    const selectedAddons = formData.getAll("addons") as string[]

    // Validate required fields
    if (!destinationId || !startDate || !endDate || !travelers || !name || !email) {
      return { success: false, error: "Missing required booking information" }
    }

    // Find destination
    const destination = destinations.find((d) => d.id === destinationId)
    if (!destination) {
      return { success: false, error: "Destination not found" }
    }

    // Calculate duration in days or weeks
    const start = new Date(startDate)
    const end = new Date(endDate)
    const durationInDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))

    // Calculate base price based on duration and price unit
    let basePrice = 0
    if (destination.priceUnit === "night") {
      basePrice = destination.price * durationInDays
    } else if (destination.priceUnit === "week") {
      const weeks = Math.ceil(durationInDays / 7)
      basePrice = destination.price * weeks
    } else {
      // per person
      basePrice = destination.price * travelers
    }

    // Calculate addon costs
    let addonsCost = 0
    if (selectedAddons.length > 0) {
      addonsCost = selectedAddons.reduce((total, addonId) => {
        const addon = bookingAddons.find((a) => a.id === addonId)
        return total + (addon ? addon.price : 0)
      }, 0)
    }

    // Calculate total price
    const totalPrice = basePrice + addonsCost

    // Create booking ID
    const bookingId = `BK-${Date.now()}-${Math.floor(Math.random() * 1000)}`

    // Create booking object
    const booking: Booking = {
      id: bookingId,
      userId: "user-123", // In a real app, this would be the authenticated user's ID
      destinationId,
      destination,
      startDate,
      endDate,
      travelers,
      totalPrice,
      status: "pending",
      paymentStatus: "pending",
      createdAt: new Date().toISOString(),
      specialRequests,
      addons: selectedAddons,
      contactInfo: {
        name,
        email,
        phone,
      },
    }

    // Save booking (in a real app, this would be saved to a database)
    bookings.push(booking)

    // Return success with booking ID
    return { success: true, bookingId }
  } catch (error) {
    console.error("Booking error:", error)
    return { success: false, error: "Failed to process booking request" }
  }
}

export async function processPayment(
  bookingId: string,
  paymentDetails: PaymentDetails,
): Promise<{ success: boolean; error?: string }> {
  try {
    // Find the booking
    const bookingIndex = bookings.findIndex((b) => b.id === bookingId)
    if (bookingIndex === -1) {
      return { success: false, error: "Booking not found" }
    }

    // Simulate payment processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Update booking status
    bookings[bookingIndex] = {
      ...bookings[bookingIndex],
      status: "confirmed" as BookingStatus,
      paymentStatus: "paid",
    }

    // In a real app, you would:
    // 1. Process payment through a payment gateway (Stripe, PayPal, etc.)
    // 2. Update the booking in the database
    // 3. Send confirmation emails
    // 4. Generate invoices/receipts

    return { success: true }
  } catch (error) {
    console.error("Payment error:", error)
    return { success: false, error: "Failed to process payment" }
  }
}

export async function getBooking(bookingId: string): Promise<Booking | null> {
  // In a real app, this would fetch from a database
  const booking = bookings.find((b) => b.id === bookingId)
  return booking || null
}

export async function getUserBookings(userId: string): Promise<Booking[]> {
  // In a real app, this would fetch from a database
  return bookings.filter((b) => b.userId === userId)
}

export async function cancelBooking(bookingId: string): Promise<{ success: boolean; error?: string }> {
  try {
    const bookingIndex = bookings.findIndex((b) => b.id === bookingId)
    if (bookingIndex === -1) {
      return { success: false, error: "Booking not found" }
    }

    // Update booking status
    bookings[bookingIndex] = {
      ...bookings[bookingIndex],
      status: "cancelled" as BookingStatus,
    }

    // In a real app, you would:
    // 1. Process refund if applicable
    // 2. Update the booking in the database
    // 3. Send cancellation confirmation

    revalidatePath("/bookings")
    return { success: true }
  } catch (error) {
    console.error("Cancellation error:", error)
    return { success: false, error: "Failed to cancel booking" }
  }
}
