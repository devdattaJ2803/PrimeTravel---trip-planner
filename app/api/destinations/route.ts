import { NextResponse } from "next/server"
import { destinations } from "@/lib/data"
import type { Destination } from "@/lib/types"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const featured = searchParams.get("featured")
  const category = searchParams.get("category")
  const id = searchParams.get("id")

  let filteredDestinations: Destination[] = [...destinations]

  if (id) {
    filteredDestinations = filteredDestinations.filter((dest) => dest.id === id)
  }

  if (featured === "true") {
    filteredDestinations = filteredDestinations.filter((dest) => dest.featured)
  }

  if (category) {
    filteredDestinations = filteredDestinations.filter((dest) => dest.category === category)
  }

  return NextResponse.json(filteredDestinations)
}
