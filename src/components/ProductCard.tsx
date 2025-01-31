// src/components/ProductCard.tsx
import * as React from "react"
import { Card } from "./ui/Card"
import { StockIndicator } from "./ui/StockIndicator"
import { HangerRating } from "./ui/HangerRating"
import { cn } from "@/lib/utils"

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Product image URL */
  image: string
  /** Product name */
  name: string
  /** Product price */
  price: number
  /** Current stock level */
  stock: number
  /** Product rating (1-5) */
  rating: number
}

export function ProductCard({
  image,
  name,
  price,
  stock,
  rating,
  className,
  ...props
}: ProductCardProps) {
  return (
    <Card 
      className={cn(
        "overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full aspect-square object-cover"
        />
        <div className="absolute top-2 right-2">
          <StockIndicator stock={stock} />
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-medium">{name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-semibold">
            ${price.toFixed(2)}
          </span>
          <HangerRating averageRating={rating} disabled />
        </div>
      </div>
    </Card>
  )
}
