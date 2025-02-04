import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  product: {
    name: string
    image: string
    link: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block aspect-square bg-black border-2 border-white/30 rounded-lg overflow-hidden relative hover:border-white/50 transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
        <h3 className="text-2xl font-bold text-white whitespace-pre-line transition-transform duration-300 ease-in-out group-hover:translate-y-[-4px]">
          {product.name}
        </h3>
      </div>
    </Link>
  )
} 