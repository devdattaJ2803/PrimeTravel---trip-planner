import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Compass, Users, Calendar, CreditCard, Headphones, Shield } from "lucide-react"

export function PremiumFeatures() {
  const features = [
    {
      icon: <Compass className="h-10 w-10 text-teal-400" />,
      title: "Exclusive Destinations",
      description: "Access to private villas, secluded islands, and luxury accommodations not available to the public.",
    },
    {
      icon: <Users className="h-10 w-10 text-teal-400" />,
      title: "Personal Concierge",
      description: "Dedicated travel consultant available 24/7 to handle all aspects of your journey.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-teal-400" />,
      title: "Tailored Itineraries",
      description: "Custom-crafted travel plans designed around your preferences and interests.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-teal-400" />,
      title: "Premium Benefits",
      description: "Complimentary upgrades, VIP access, and exclusive perks at partner establishments.",
    },
    {
      icon: <Headphones className="h-10 w-10 text-teal-400" />,
      title: "Priority Support",
      description: "Immediate assistance for any changes or issues during your travels.",
    },
    {
      icon: <Shield className="h-10 w-10 text-teal-400" />,
      title: "Travel Protection",
      description: "Comprehensive insurance and emergency services included with every booking.",
    },
  ]

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Premium Membership Benefits</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Enjoy these exclusive advantages when you upgrade to our premium travel service
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-navy-800/50 border-navy-700 hover:border-teal-500/50 transition-all">
            <CardHeader>
              <div className="mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription className="text-slate-400">{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-ocean-600 rounded-full"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
