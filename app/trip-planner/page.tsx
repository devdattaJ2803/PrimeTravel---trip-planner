"use client"

import { useState } from "react"
import { TravelHeader } from "@/components/travel-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"
import { CalendarIcon, Users, Plane, Hotel, Car, Utensils, Camera, Check, ChevronsUpDown, Loader2 } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Command, CommandList, CommandGroup, CommandInput, CommandItem, CommandEmpty } from "@/components/ui/command"
import { popularDestinations } from "@/lib/data"

export default function TripPlanner() {
  const [departureDate, setDepartureDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [open, setOpen] = useState(false)
  const [departureValue, setDepartureValue] = useState("")
  const [destinationValue, setDestinationValue] = useState("")
  const [travelers, setTravelers] = useState(2)
  const [budget, setBudget] = useState([5000])
  const [cabinClass, setCabinClass] = useState("Business")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSearch = () => {
    if (!departureValue) {
      toast({
        title: "Missing departure",
        description: "Please select a departure city",
        variant: "destructive",
      })
      return
    }

    if (!destinationValue) {
      toast({
        title: "Missing destination",
        description: "Please select a destination",
        variant: "destructive",
      })
      return
    }

    if (!departureDate) {
      toast({
        title: "Missing departure date",
        description: "Please select a departure date",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Trip search complete",
        description: "Your premium travel options are ready to view",
      })
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
      <TravelHeader />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Premium Trip Planner</h1>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Create your bespoke travel experience with our premium planning tools
            </p>
          </div>

          <Tabs defaultValue="flights" className="w-full">
            <TabsList className="grid grid-cols-5 h-auto p-1 bg-navy-800 mb-8">
              <TabsTrigger
                value="flights"
                className="py-3 data-[state=active]:bg-teal-500 data-[state=active]:text-navy-900"
              >
                <Plane className="h-4 w-4 mr-2" />
                Flights
              </TabsTrigger>
              <TabsTrigger
                value="hotels"
                className="py-3 data-[state=active]:bg-teal-500 data-[state=active]:text-navy-900"
              >
                <Hotel className="h-4 w-4 mr-2" />
                Accommodations
              </TabsTrigger>
              <TabsTrigger
                value="activities"
                className="py-3 data-[state=active]:bg-teal-500 data-[state=active]:text-navy-900"
              >
                <Camera className="h-4 w-4 mr-2" />
                Activities
              </TabsTrigger>
              <TabsTrigger
                value="dining"
                className="py-3 data-[state=active]:bg-teal-500 data-[state=active]:text-navy-900"
              >
                <Utensils className="h-4 w-4 mr-2" />
                Dining
              </TabsTrigger>
              <TabsTrigger
                value="transport"
                className="py-3 data-[state=active]:bg-teal-500 data-[state=active]:text-navy-900"
              >
                <Car className="h-4 w-4 mr-2" />
                Transport
              </TabsTrigger>
            </TabsList>

            <Card className="bg-navy-800/50 border-navy-700">
              <CardHeader>
                <CardTitle>Plan Your Premium Journey</CardTitle>
                <CardDescription>Enter your travel details for a personalized itinerary</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <TabsContent value="flights" className="mt-0 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="departure">Departure</Label>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-full justify-between bg-navy-700 border-navy-600 hover:bg-navy-600 hover:text-white text-white"
                          >
                            {departureValue
                              ? popularDestinations.find((destination) => destination.value === departureValue)?.label
                              : "Select departure city..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0 bg-navy-800 border-navy-700">
                          <Command className="bg-transparent">
                            <CommandInput placeholder="Search departure..." className="h-9 text-white" />
                            <CommandList>
                              <CommandEmpty>No location found.</CommandEmpty>
                              <CommandGroup>
                                {popularDestinations.map((destination) => (
                                  <CommandItem
                                    key={destination.value}
                                    value={destination.value}
                                    onSelect={(currentValue) => {
                                      setDepartureValue(currentValue === departureValue ? "" : currentValue)
                                      setOpen(false)
                                    }}
                                    className="hover:bg-navy-700 text-white"
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        departureValue === destination.value ? "opacity-100" : "opacity-0",
                                      )}
                                    />
                                    {destination.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="destination">Destination</Label>
                      <Select value={destinationValue} onValueChange={setDestinationValue}>
                        <SelectTrigger className="w-full bg-navy-700 border-navy-600 focus:ring-teal-500 text-white">
                          <SelectValue placeholder="Select destination" />
                        </SelectTrigger>
                        <SelectContent className="bg-navy-800 border-navy-700">
                          {popularDestinations.map((destination) => (
                            <SelectItem key={destination.value} value={destination.value}>
                              {destination.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label>Departure Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal bg-navy-700 border-navy-600 hover:bg-navy-600 hover:text-white text-white",
                              !departureDate && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {departureDate ? format(departureDate, "PPP") : <span>Select date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-navy-800 border-navy-700">
                          <Calendar
                            mode="single"
                            selected={departureDate}
                            onSelect={setDepartureDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                            className="bg-navy-800 text-white"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label>Return Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal bg-navy-700 border-navy-600 hover:bg-navy-600 hover:text-white text-white",
                              !returnDate && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-navy-800 border-navy-700">
                          <Calendar
                            mode="single"
                            selected={returnDate}
                            onSelect={setReturnDate}
                            initialFocus
                            disabled={(date) => !departureDate || date <= departureDate}
                            className="bg-navy-800 text-white"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label>Travelers</Label>
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
                        <div className="w-full h-10 flex items-center justify-center bg-navy-700 rounded-md border border-navy-600 text-white">
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
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label>Cabin Class</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                        {["Economy", "Premium Economy", "Business", "First Class"].map((cabin) => (
                          <Button
                            key={cabin}
                            type="button"
                            variant="outline"
                            className={cn(
                              "bg-navy-700 border-navy-600 hover:bg-navy-600 text-white",
                              cabin === cabinClass && "bg-teal-500 text-navy-900 hover:bg-teal-600 border-teal-500",
                            )}
                            onClick={() => setCabinClass(cabin)}
                          >
                            {cabin}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>Budget Range (USD)</Label>
                        <span className="text-sm text-slate-400">${budget[0].toLocaleString()}</span>
                      </div>
                      <Slider
                        value={budget}
                        onValueChange={setBudget}
                        max={10000}
                        step={500}
                        className="[&_[role=slider]]:bg-teal-500"
                      />
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>$1,000</span>
                        <span>$10,000</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label>Premium Options</Label>
                      <div className="space-y-2">
                        {["Priority boarding", "Lounge access", "Chauffeur service", "Flexible booking"].map(
                          (option) => (
                            <div key={option} className="flex items-center space-x-2">
                              <Switch id={option.toLowerCase().replace(/\s+/g, "-")} />
                              <Label htmlFor={option.toLowerCase().replace(/\s+/g, "-")}>{option}</Label>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="hotels" className="mt-0">
                  <div className="p-8 text-center">
                    <h3 className="text-xl font-medium mb-2">Premium Accommodations</h3>
                    <p className="text-slate-400 mb-4">Select the Flights tab to begin planning your journey</p>
                  </div>
                </TabsContent>

                <TabsContent value="activities" className="mt-0">
                  <div className="p-8 text-center">
                    <h3 className="text-xl font-medium mb-2">Exclusive Activities</h3>
                    <p className="text-slate-400 mb-4">Select the Flights tab to begin planning your journey</p>
                  </div>
                </TabsContent>

                <TabsContent value="dining" className="mt-0">
                  <div className="p-8 text-center">
                    <h3 className="text-xl font-medium mb-2">Fine Dining Experiences</h3>
                    <p className="text-slate-400 mb-4">Select the Flights tab to begin planning your journey</p>
                  </div>
                </TabsContent>

                <TabsContent value="transport" className="mt-0">
                  <div className="p-8 text-center">
                    <h3 className="text-xl font-medium mb-2">Premium Transportation</h3>
                    <p className="text-slate-400 mb-4">Select the Flights tab to begin planning your journey</p>
                  </div>
                </TabsContent>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full bg-teal-500 hover:bg-teal-600 text-navy-900"
                  onClick={handleSearch}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Searching Premium Options
                    </>
                  ) : (
                    "Search Premium Options"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </Tabs>

          <div className="mt-12 bg-navy-800/50 border border-navy-700 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center">
                <Users className="h-5 w-5 text-navy-900" />
              </div>
              <div>
                <h3 className="font-medium">Personal Travel Consultant</h3>
                <p className="text-sm text-slate-400">Get expert assistance with your travel plans</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4">
              Our premium members receive dedicated support from a personal travel consultant who can create a fully
              customized itinerary based on your preferences.
            </p>
            <Button variant="outline" className="border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-navy-900">
              Contact Your Consultant
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
