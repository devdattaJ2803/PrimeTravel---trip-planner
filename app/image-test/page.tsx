export default function ImageTestPage() {
  const images = [
    { name: "Culinary Journey", path: "/images/culinary-journey.png" },
    { name: "Yacht Charter", path: "/images/yacht-charter.png" },
    { name: "Vineyard Tour", path: "/images/vineyard-tour.png" },
    { name: "Historical Castle", path: "/images/historical-castle.png" },
    { name: "Bali Retreat", path: "/images/bali.png" },
  ]

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-8">Image Test Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((image, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <img src={image.path || "/placeholder.svg"} alt={image.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{image.name}</h2>
              <p className="text-gray-500">Path: {image.path}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
