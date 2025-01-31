// src/components/ProductGrid.tsx
import * as React from "react"
import { ProductCard } from "./ProductCard"
import { cn } from "@/lib/utils"

interface Product {
  id: string
  name: string
  price: number
  image: string
  stock: number
  rating: number
}

interface ProductGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of products to display */
  products: Product[]
  /** Loading state */
  loading?: boolean
  /** Function called when a product is clicked */
  onProductClick?: (productId: string) => void
}

export function ProductGrid({
  products,
  loading = false,
  onProductClick,
  className,
  ...props
}: ProductGridProps) {
  if (loading) {
    return (
      <div 
        className={cn(
          "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6",
          className
        )}
        {...props}
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-200 rounded-lg h-64 mb-4" />
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/4" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div 
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6",
        className
      )}
      {...props}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          onClick={() => onProductClick?.(product.id)}
        />
      ))}
    </div>
  )
}
