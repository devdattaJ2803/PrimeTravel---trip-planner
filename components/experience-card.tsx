import { MapPin, Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Experience } from "@/lib/types"

interface ExperienceCardProps {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const { id, image, title, location, price, priceUnit, rating } = experience

  return (
    <Card className="overflow-hidden bg-navy-800/50 border-navy-700 hover:border-teal-500/50 transition-all group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
          ${price.toLocaleString()}/{priceUnit}
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-2 group-hover:text-teal-400 transition-colors">{title}</h3>
        <div className="flex items-center text-slate-400 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center text-teal-400 mr-2">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 font-medium">{rating}</span>
          </div>
          <span className="text-slate-400 text-sm">Premium Experience</span>
        </div>
      </CardContent>
      <CardFooter className="px-5 pb-5 pt-0">
        <Link href={`/experiences/${id}`} className="w-full">
          <Button className="w-full bg-navy-700 hover:bg-teal-500 hover:text-slate-900 transition-colors">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
