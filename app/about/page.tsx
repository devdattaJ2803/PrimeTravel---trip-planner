import { TravelHeader } from "@/components/travel-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Award, Users, Clock, Shield, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
      <TravelHeader />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600&text=About+PrimeTravels')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/30"></div>
          <div className="relative py-20 px-8 md:px-16 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              About <span className="text-teal-400">PrimeTravels</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Crafting extraordinary travel experiences for discerning travelers since 2010. Discover our story,
              philosophy, and commitment to excellence.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-slate-300 mb-4">
                PrimeTravels was founded in 2010 by a team of passionate travel experts who believed luxury travel
                should be more than just opulent accommodations—it should be transformative, authentic, and deeply
                personal.
              </p>
              <p className="text-slate-300 mb-4">
                What began as a boutique agency serving a small clientele of discerning travelers has grown into a
                global leader in premium travel experiences, while maintaining our founding principles of
                personalization, exclusivity, and exceptional service.
              </p>
              <p className="text-slate-300">
                Today, we curate extraordinary journeys for travelers who seek the perfect balance of luxury,
                authenticity, and meaningful experiences. Our global network of local experts, exclusive partnerships,
                and dedication to innovation allows us to create truly unique travel experiences that exceed
                expectations.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/plane-513641_640.jpg"
                alt="PrimeTravels founders"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Excellence",
                description:
                  "We are committed to the highest standards in every aspect of our service, from the first consultation to the final moments of your journey.",
                icon: <Award className="h-10 w-10 text-teal-400" />,
              },
              {
                title: "Personalization",
                description:
                  "We believe that truly exceptional travel experiences must be tailored to the individual preferences, interests, and dreams of each traveler.",
                icon: <Users className="h-10 w-10 text-teal-400" />,
              },
              {
                title: "Authenticity",
                description:
                  "We create journeys that connect you with the genuine essence of each destination, beyond tourist attractions to meaningful cultural experiences.",
                icon: <Globe className="h-10 w-10 text-teal-400" />,
              },
              {
                title: "Innovation",
                description:
                  "We continuously seek new destinations, experiences, and approaches to enhance your travel experience and exceed expectations.",
                icon: <Clock className="h-10 w-10 text-teal-400" />,
              },
              {
                title: "Responsibility",
                description:
                  "We are committed to sustainable and ethical travel practices that respect local communities, cultures, and environments.",
                icon: <Shield className="h-10 w-10 text-teal-400" />,
              },
              {
                title: "Passion",
                description:
                  "We are driven by a genuine love for travel and a deep commitment to creating transformative experiences for our clients.",
                icon: <Heart className="h-10 w-10 text-teal-400" />,
              },
            ].map((value) => (
              <Card key={value.title} className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-slate-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Alexandra Reynolds",
                title: "Founder & CEO",
                bio: "Former luxury hotel executive with 20+ years of experience in premium travel and hospitality.",
                image: "/images/avatar1.png",
              },
              {
                name: "Jonathan Chen",
                title: "Chief Experience Officer",
                bio: "Award-winning travel designer who has visited over 100 countries across all seven continents.",
                image: "/images/avatar2.png",
              },
              {
                name: "Sophia Martinez",
                title: "Head of Destination Expertise",
                bio: "Cultural anthropologist and travel writer specializing in authentic local experiences.",
                image: "/images/avatar3.png",
              },
              {
                name: "Michael Blackwood",
                title: "Director of Client Relations",
                bio: "Luxury concierge specialist with a background in VIP services for high-profile clients.",
                image: "/placeholder.svg?height=200&width=200&text=MB",
              },
            ].map((member) => (
              <Card key={member.name} className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="pt-6">
                  <div className="h-24 w-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-teal-400 mb-3">{member.title}</p>
                  <p className="text-slate-300">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Awards & Recognition</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                award: "Best Luxury Travel Agency",
                organization: "International Travel Awards",
                year: "2023",
              },
              {
                award: "Excellence in Client Service",
                organization: "Luxury Travel Guild",
                year: "2022",
              },
              {
                award: "Top Sustainable Luxury Provider",
                organization: "Sustainable Tourism Awards",
                year: "2023",
              },
              {
                award: "Innovation in Travel Experiences",
                organization: "Global Travel Summit",
                year: "2021",
              },
            ].map((award) => (
              <Card key={award.award} className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="pt-6">
                  <div className="h-16 w-16 rounded-full bg-teal-500/20 text-teal-500 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold mb-1">{award.award}</h3>
                  <p className="text-teal-400 text-sm">{award.organization}</p>
                  <p className="text-slate-400 text-sm">{award.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Join Our Team */}
        <section className="mb-16">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
                <p className="text-slate-300 mb-6">
                  We're always looking for passionate travel experts, destination specialists, and hospitality
                  professionals to join our global team. If you're dedicated to creating extraordinary travel
                  experiences and share our values, we'd love to hear from you.
                </p>
                <Link href="/careers">
                  <Button className="bg-teal-500 hover:bg-teal-600 text-slate-900">View Open Positions</Button>
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Join+Our+Team"
                  alt="PrimeTravels team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-3xl overflow-hidden bg-gradient-to-r from-teal-500 to-teal-700 p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Ready to Experience the Difference?</h2>
          <p className="text-lg md:text-xl mb-8 text-slate-800 max-w-2xl mx-auto">
            Let our team of travel experts create a bespoke journey tailored to your preferences, interests, and dreams.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8">
              Contact Us
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
}
