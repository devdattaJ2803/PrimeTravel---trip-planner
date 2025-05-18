import { TravelHeader } from "@/components/travel-header"
import { DestinationCard } from "@/components/destination-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { destinations } from "@/lib/data"
import { Compass, Filter } from "lucide-react"

export default function DestinationsPage() {
  // Group destinations by category
  const luxuryDestinations = destinations.filter((dest) => dest.category === "luxury")
  const adventureDestinations = destinations.filter((dest) => dest.category === "adventure")
  const culturalDestinations = destinations.filter((dest) => dest.category === "cultural")
  const wellnessDestinations = destinations.filter((dest) => dest.category === "wellness")

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
      <TravelHeader />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Exclusive Destinations</h1>
          <p className="text-slate-400 max-w-3xl">
            Discover our handpicked collection of the world's most extraordinary destinations, offering unparalleled
            luxury, adventure, and cultural experiences.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-medium">Filters</h3>
                <Button variant="ghost" size="sm" className="h-8 text-slate-400 hover:text-white">
                  Reset
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-3">Price Range</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-navy-700 rounded p-2 text-center">
                      <span className="text-xs text-slate-400">From</span>
                      <p className="font-medium">$1,000</p>
                    </div>
                    <div className="bg-navy-700 rounded p-2 text-center">
                      <span className="text-xs text-slate-400">To</span>
                      <p className="font-medium">$10,000</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Regions</h4>
                  <div className="space-y-2">
                    {["Europe", "Asia", "Americas", "Africa", "Oceania"].map((region) => (
                      <div key={region} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`region-${region}`}
                          className="h-4 w-4 rounded border-navy-600 text-teal-500 focus:ring-teal-500 focus:ring-offset-navy-900"
                        />
                        <label htmlFor={`region-${region}`} className="ml-2 text-sm">
                          {region}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Experience Type</h4>
                  <div className="space-y-2">
                    {[
                      { id: "luxury", label: "Luxury Retreats" },
                      { id: "adventure", label: "Adventure" },
                      { id: "cultural", label: "Cultural" },
                      { id: "wellness", label: "Wellness" },
                      { id: "culinary", label: "Culinary" },
                    ].map((type) => (
                      <div key={type.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`type-${type.id}`}
                          className="h-4 w-4 rounded border-navy-600 text-teal-500 focus:ring-teal-500 focus:ring-offset-navy-900"
                        />
                        <label htmlFor={`type-${type.id}`} className="ml-2 text-sm">
                          {type.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-navy-900">
                  <Filter className="h-4 w-4 mr-2" />
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-between items-center mb-6">
                <TabsList className="bg-navy-800">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-teal-500 data-[state=active]:text-navy-900"
                  >
                    All Destinations
                  </TabsTrigger>
                  <TabsTrigger
                    value="luxury"
                    className="data-[state=active]:bg-teal-500 data-[state=active]:text-navy-900"
                  >
                    Luxury
                  </TabsTrigger>
                  <TabsTrigger
                    value="adventure"
                    className="data-[state=active]:bg-teal-500 data-[state=active]:text-navy-900"
                  >
                    Adventure
                  </TabsTrigger>
                  <TabsTrigger
                    value="cultural"
                    className="data-[state=active]:bg-teal-500 data-[state=active]:text-navy-900"
                  >
                    Cultural
                  </TabsTrigger>
                  <TabsTrigger
                    value="wellness"
                    className="data-[state=active]:bg-teal-500 data-[state=active]:text-navy-900"
                  >
                    Wellness
                  </TabsTrigger>
                </TabsList>

                <div className="text-sm text-slate-400">
                  Showing <span className="font-medium text-white">{destinations.length}</span> destinations
                </div>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {destinations.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="luxury" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {luxuryDestinations.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="adventure" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {adventureDestinations.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="cultural" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {culturalDestinations.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="wellness" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wellnessDestinations.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-8 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-teal-500 text-navy-900 mb-4">
            <Compass className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Can't Find Your Dream Destination?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-6">
            Our travel consultants specialize in creating bespoke journeys to destinations not listed in our catalog.
            Tell us your dream, and we'll make it a reality.
          </p>
          <Button className="bg-white hover:bg-slate-200 text-navy-900">Contact a Travel Consultant</Button>
        </div>
      </main>
    </div>
  )
}
