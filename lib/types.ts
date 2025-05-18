export interface Destination {
  id: string
  title: string
  location: string
  description: string
  price: number
  priceUnit: string
  rating: number
  image: string
  amenities: string[]
  featured: boolean
  category: string
}

export interface Experience {
  id: string
  title: string
  location: string
  description: string
  price: number
  priceUnit: string
  rating: number
  image: string
  category: string
  featured: boolean
}

export type Testimonial = {
  id: string
  name: string
  title: string
  avatar: string
  content: string
  rating: number
}

export type BookingRequest = {
  destinationId: string
  startDate: string
  endDate: string
  travelers: number
  email: string
  name: string
  specialRequests?: string
  cabinClass?: string
  addons?: string[]
}

export type PaymentMethod = "credit_card" | "paypal" | "bank_transfer" | "crypto"

export type PaymentDetails = {
  method: PaymentMethod
  cardNumber?: string
  cardholderName?: string
  expiryDate?: string
  cvv?: string
  billingAddress?: Address
}

export type Address = {
  street: string
  city: string
  state: string
  postalCode: string
  country: string
}

export type BookingStatus = "pending" | "confirmed" | "paid" | "cancelled" | "completed"

export type Booking = {
  id: string
  userId: string
  destinationId: string
  destination: Destination
  startDate: string
  endDate: string
  travelers: number
  totalPrice: number
  status: BookingStatus
  paymentStatus: "pending" | "processing" | "paid" | "failed" | "refunded"
  createdAt: string
  specialRequests?: string
  addons?: string[]
  contactInfo: {
    name: string
    email: string
    phone?: string
  }
}

export type User = {
  id: string
  name: string
  email: string
  membershipLevel?: "standard" | "premium" | "elite"
  bookings?: Booking[]
}

export interface BookingAddon {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
}

export interface BookingDetails {
  destinationId: string
  checkIn: Date
  checkOut: Date
  guests: number
  addons: string[]
  specialRequests?: string
  contactName: string
  contactEmail: string
  contactPhone: string
}
