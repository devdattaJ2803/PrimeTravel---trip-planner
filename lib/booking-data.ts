import type { BookingAddon } from "./types"

export const bookingAddons: BookingAddon[] = [
  {
    id: "airport-transfer",
    name: "Private Airport Transfer",
    description: "Luxury vehicle with professional driver for seamless airport transfers",
    price: 150,
    category: "transfer",
  },
  {
    id: "welcome-package",
    name: "Premium Welcome Package",
    description: "Champagne, gourmet treats, and personalized welcome amenities",
    price: 120,
    category: "upgrade",
  },
  {
    id: "private-guide",
    name: "Private Guide (Full Day)",
    description: "Experienced local guide for personalized exploration",
    price: 350,
    category: "experience",
  },
  {
    id: "spa-package",
    name: "Luxury Spa Package",
    description: "Rejuvenating spa treatments for two",
    price: 280,
    category: "experience",
  },
  {
    id: "premium-insurance",
    name: "Premium Travel Insurance",
    description: "Comprehensive coverage including cancellation, medical, and luxury item protection",
    price: 180,
    category: "insurance",
  },
  {
    id: "gourmet-dining",
    name: "Private Dining Experience",
    description: "Exclusive dining experience with personal chef",
    price: 450,
    category: "experience",
  },
  {
    id: "helicopter-tour",
    name: "Scenic Helicopter Tour",
    description: "Breathtaking aerial views of your destination",
    price: 800,
    category: "experience",
  },
  {
    id: "concierge-service",
    name: "24/7 Personal Concierge",
    description: "Dedicated concierge for all your needs throughout your stay",
    price: 200,
    category: "upgrade",
  },
]

export const paymentMethods = [
  {
    id: "credit_card",
    name: "Credit Card",
    description: "Pay securely with your credit card",
    icons: ["visa", "mastercard", "amex"],
  },
  {
    id: "paypal",
    name: "PayPal",
    description: "Fast and secure payment with PayPal",
    icons: ["paypal"],
  },
  {
    id: "bank_transfer",
    name: "Bank Transfer",
    description: "Direct bank transfer (processing time: 1-3 business days)",
    icons: ["bank"],
  },
  {
    id: "crypto",
    name: "Cryptocurrency",
    description: "Pay with Bitcoin, Ethereum, or other cryptocurrencies",
    icons: ["crypto"],
  },
]

export const countries = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "au", label: "Australia" },
  { value: "fr", label: "France" },
  { value: "de", label: "Germany" },
  { value: "jp", label: "Japan" },
  { value: "sg", label: "Singapore" },
  { value: "ae", label: "United Arab Emirates" },
  { value: "ch", label: "Switzerland" },
]
