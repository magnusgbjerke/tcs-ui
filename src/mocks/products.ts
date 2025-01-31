// src/mocks/products.ts
export interface Product {
  id: string
  name: string
  price: number
  image: string
  stock: number
  rating: number
  category: string
  description?: string
  sizes?: string[]
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "/placeholder/product-1.jpg",
    stock: 15,
    rating: 4.5,
    category: "t-shirts",
    description: "Essential white t-shirt in premium cotton",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 89.99,
    image: "/placeholder/product-2.jpg",
    stock: 8,
    rating: 4.2,
    category: "jeans",
    description: "Classic blue slim fit denim jeans",
    sizes: ["30x32", "32x32", "34x32", "36x32"]
  },
  {
    id: "3",
    name: "Running Sneakers",
    price: 119.99,
    image: "/placeholder/product-3.jpg",
    stock: 3,
    rating: 4.8,
    category: "shoes",
    description: "Lightweight performance running shoes",
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: "4",
    name: "Leather Backpack",
    price: 149.99,
    image: "/placeholder/product-4.jpg",
    stock: 5,
    rating: 4.6,
    category: "accessories",
    description: "Premium leather backpack with laptop compartment"
  },
  {
    id: "5",
    name: "Hooded Sweatshirt",
    price: 59.99,
    image: "/placeholder/product-5.jpg",
    stock: 12,
    rating: 4.3,
    category: "hoodies",
    description: "Comfortable cotton blend hoodie",
    sizes: ["S", "M", "L", "XL"]
  }
]
