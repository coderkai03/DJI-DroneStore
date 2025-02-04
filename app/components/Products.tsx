import ProductCard from "./ProductCard"

const products = [
  {
    id: 1,
    name: "Mavic 3\nSeries",
    image: "G:/dji-store/public/assets/dji-drone.png",
    link: "https://www.dji.com/mavic-3",
  },
  {
    id: 2,
    name: "Air 3",
    image: "G:/dji-store/public/assets/dji-drone.png",
    link: "https://www.dji.com/air-3",
  },
  {
    id: 3,
    name: "Mini 4 Pro",
    image: "G:/dji-store/public/assets/dji-drone.png",
    link: "https://www.dji.com/mini-4-pro",
  },
  {
    id: 4,
    name: "FPV",
    image: "G:/dji-store/public/assets/dji-drone.png",
    link: "https://www.dji.com/dji-fpv",
  },
  {
    id: 5,
    name: "Avata",
    image: "G:/dji-store/public/assets/dji-drone.png",
    link: "https://www.dji.com/dji-avata",
  },
]

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-8">Drones</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
} 