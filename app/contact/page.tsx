"use client"

import type React from "react"

import { useState } from "react"
import { TravelHeader } from "@/components/travel-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Mail, Phone, MapPin, Globe, MessageSquare, Loader2, Check } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
    toast({
      title: "Message received",
      description: "A travel consultant will contact you shortly.",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
      <TravelHeader />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Contact <span className="text-teal-400">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our travel consultants are ready to help you plan your next extraordinary journey or answer any questions
            you may have.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="bg-navy-800/50 border-navy-700 h-full">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-teal-500/20 text-teal-500 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <p className="text-slate-300 mb-1">For general inquiries:</p>
                      <a href="mailto:info@primetravels.com" className="text-teal-400 hover:text-teal-300">
                        info@primetravels.com
                      </a>
                      <p className="text-slate-300 mt-2 mb-1">For existing bookings:</p>
                      <a href="mailto:concierge@primetravels.com" className="text-teal-400 hover:text-teal-300">
                        concierge@primetravels.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-teal-500/20 text-teal-500 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Call Us</h3>
                      <p className="text-slate-300 mb-1">International:</p>
                      <p className="text-teal-400">+1 (555) 123-4567</p>
                      <p className="text-slate-300 mt-2 mb-1">Toll-free (US & Canada):</p>
                      <p className="text-teal-400">1-800-PRIME-TRAVEL</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-teal-500/20 text-teal-500 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Visit Us</h3>
                      <p className="text-slate-300">
                        PrimeTravels Headquarters
                        <br />
                        123 Luxury Avenue
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-teal-500/20 text-teal-500 flex items-center justify-center mr-4 flex-shrink-0">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Global Offices</h3>
                      <p className="text-slate-300">
                        London • Paris • Tokyo
                        <br />
                        Dubai • Singapore • Sydney
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-teal-500/20 text-teal-500 flex items-center justify-center mr-4 flex-shrink-0">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Live Chat</h3>
                      <p className="text-slate-300 mb-2">
                        Chat with a travel consultant in real-time during business hours.
                      </p>
                      <Button className="bg-teal-500 hover:bg-teal-600 text-navy-900">Start Chat</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-navy-800/50 border-navy-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {isSuccess ? (
                  <div className="text-center py-12">
                    <div className="h-16 w-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-6">
                      <Check className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                    <p className="text-slate-300 mb-6 max-w-md mx-auto">
                      Thank you for contacting PrimeTravels. One of our travel consultants will get back to you within
                      24 hours.
                    </p>
                    <Button className="bg-teal-500 hover:bg-teal-600 text-navy-900" onClick={() => setIsSuccess(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input
                          id="first-name"
                          required
                          className="bg-navy-700 border-navy-600 focus:border-teal-500 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input
                          id="last-name"
                          required
                          className="bg-navy-700 border-navy-600 focus:border-teal-500 text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          className="bg-navy-700 border-navy-600 focus:border-teal-500 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input id="phone" className="bg-navy-700 border-navy-600 focus:border-teal-500 text-white" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>I'm interested in:</Label>
                      <RadioGroup defaultValue="custom" className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="custom" id="custom" />
                          <Label htmlFor="custom">Custom Travel Planning</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="specific" id="specific" />
                          <Label htmlFor="specific">Specific Destination/Experience</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="membership" id="membership" />
                          <Label htmlFor="membership">Premium Membership</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other Inquiry</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="destination">Destination (if applicable)</Label>
                      <Select>
                        <SelectTrigger className="bg-navy-700 border-navy-600 focus:ring-teal-500 text-white">
                          <SelectValue placeholder="Select destination" />
                        </SelectTrigger>
                        <SelectContent className="bg-navy-800 border-navy-700">
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="asia">Asia</SelectItem>
                          <SelectItem value="americas">Americas</SelectItem>
                          <SelectItem value="africa">Africa</SelectItem>
                          <SelectItem value="oceania">Oceania</SelectItem>
                          <SelectItem value="multiple">Multiple Regions</SelectItem>
                          <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Tell us about your travel plans, questions, or special requests..."
                        className="min-h-[150px] bg-navy-700 border-navy-600 focus:border-teal-500 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="how-heard">How did you hear about us?</Label>
                      <Select>
                        <SelectTrigger className="bg-navy-700 border-navy-600 focus:ring-teal-500 text-white">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent className="bg-navy-800 border-navy-700">
                          <SelectItem value="referral">Referral from Friend/Family</SelectItem>
                          <SelectItem value="search">Search Engine</SelectItem>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="magazine">Travel Magazine</SelectItem>
                          <SelectItem value="event">Travel Event/Show</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-teal-500 hover:bg-teal-600 text-navy-900"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
          <div className="rounded-xl overflow-hidden h-[400px] bg-navy-800">
            <img
              src="/placeholder.svg?height=400&width=1200&text=World+Map+with+Office+Locations"
              alt="PrimeTravels global offices map"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How far in advance should I plan my luxury trip?",
                answer:
                  "For optimal availability and the best experience, we recommend planning 6-12 months in advance, especially for peak season travel or highly sought-after destinations and accommodations.",
              },
              {
                question: "What is included in your premium travel planning service?",
                answer:
                  "Our premium travel planning service includes personalized itinerary design, exclusive accommodations, private transportation, expert guides, 24/7 concierge support, restaurant reservations, special access to attractions, and all booking arrangements handled on your behalf.",
              },
              {
                question: "Do you offer travel insurance?",
                answer:
                  "Yes, we offer comprehensive premium travel insurance options tailored to your specific journey, including coverage for cancellations, medical emergencies, evacuation, and luxury item protection.",
              },
              {
                question: "How do I become a premium member?",
                answer:
                  "You can apply for premium membership through our website or by contacting our membership team directly. Membership includes priority service, exclusive offers, and dedicated travel consultants.",
              },
              {
                question: "Can you accommodate special dietary requirements or accessibility needs?",
                answer:
                  "Absolutely. We take great care to accommodate all dietary restrictions, accessibility requirements, and personal preferences to ensure a comfortable and seamless travel experience.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-navy-800/50 border-navy-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-slate-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
