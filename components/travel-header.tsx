"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, Menu, X, User, Search } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

export function TravelHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-navy-950/80 border-navy-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 mr-8">
              <Globe className="h-6 w-6 text-teal-400" />
              <span className="font-bold text-xl">PrimeTravels</span>
            </Link>

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-navy-800/50">
                    Destinations
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {[
                        { title: "Europe", description: "Luxury experiences in the old continent", href: "/europe" },
                        { title: "Asia", description: "Exotic premium destinations", href: "/asia" },
                        { title: "Americas", description: "From Alaska to Patagonia", href: "/americas" },
                        { title: "Africa", description: "Safari and beach luxury", href: "/africa" },
                      ].map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-navy-800 hover:text-teal-400"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-slate-400">{item.description}</p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-navy-800/50">
                    Experiences
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                      {[
                        { title: "Private Tours", icon: "🏛️", href: "/private-tours" },
                        { title: "Culinary Journeys", icon: "🍷", href: "/culinary-journeys" },
                        { title: "Wellness Retreats", icon: "🧘", href: "/wellness-retreats" },
                        { title: "Adventure Expeditions", icon: "🏔️", href: "/adventure-expeditions" },
                      ].map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-navy-800 hover:text-teal-400"
                            >
                              <div className="flex items-center gap-2">
                                <span>{item.icon}</span>
                                <span className="text-sm font-medium leading-none">{item.title}</span>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-navy-800/50")}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-navy-800/50")}
                    >
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search destinations..."
                className="pl-10 bg-navy-800/50 border-navy-700 focus:border-teal-500 w-[200px] lg:w-[300px]"
              />
            </div>
            <Link href="/login" className="hidden md:flex">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
            <Link href="/trip-planner" className="hidden md:flex">
              <Button className="bg-teal-500 hover:bg-teal-600 text-navy-900">Book Now</Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <div className="py-2 font-medium">Destinations</div>
            {["Europe", "Asia", "Americas", "Africa"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block rounded-md px-3 py-2 text-base text-white hover:bg-navy-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}

            <div className="py-2 font-medium mt-2">Experiences</div>
            {[
              { title: "Private Tours", href: "/private-tours" },
              { title: "Culinary Journeys", href: "/culinary-journeys" },
              { title: "Wellness Retreats", href: "/wellness-retreats" },
              { title: "Adventure Expeditions", href: "/adventure-expeditions" },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base text-white hover:bg-navy-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}

            <Link
              href="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-navy-800 mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            <Link
              href="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-navy-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="relative mt-3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search destinations..."
                className="pl-10 bg-navy-800/50 border-navy-700 focus:border-teal-500 w-full"
              />
            </div>

            <div className="flex gap-2 mt-3">
              <Link href="/login" className="flex-1">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link href="/trip-planner" className="flex-1">
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-navy-900">Book Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
