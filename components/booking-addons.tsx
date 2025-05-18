"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { bookingAddons } from "@/lib/booking-data"
import type { BookingAddon } from "@/lib/types"

interface BookingAddonsProps {
  selectedAddons: string[]
  onToggleAddon: (addonId: string) => void
}

export function BookingAddons({ selectedAddons, onToggleAddon }: BookingAddonsProps) {
  // Group addons by category
  const addonsByCategory: Record<string, BookingAddon[]> = bookingAddons.reduce(
    (acc, addon) => {
      if (!acc[addon.category]) {
        acc[addon.category] = []
      }
      acc[addon.category].push(addon)
      return acc
    },
    {} as Record<string, BookingAddon[]>,
  )

  // Category display names
  const categoryNames: Record<string, string> = {
    transfer: "Transportation & Transfers",
    experience: "Experiences & Activities",
    upgrade: "Upgrades & Amenities",
    insurance: "Insurance & Protection",
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-2">Enhance Your Experience</h2>
        <p className="text-slate-300 mb-6">
          Customize your journey with these premium add-ons and services to make your trip truly exceptional.
        </p>
      </div>

      {Object.entries(addonsByCategory).map(([category, addons]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-lg font-medium">{categoryNames[category]}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addons.map((addon) => (
              <Card
                key={addon.id}
                className={`bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-colors cursor-pointer ${
                  selectedAddons.includes(addon.id) ? "border-teal-500" : ""
                }`}
                onClick={() => onToggleAddon(addon.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id={addon.id}
                      checked={selectedAddons.includes(addon.id)}
                      onCheckedChange={() => onToggleAddon(addon.id)}
                      className="mt-1 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
                    />
                    <div className="flex-1">
                      <Label htmlFor={addon.id} className="font-medium cursor-pointer flex justify-between">
                        <span>{addon.name}</span>
                        <span className="text-teal-400">${addon.price}</span>
                      </Label>
                      <p className="text-slate-400 text-sm mt-1">{addon.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
