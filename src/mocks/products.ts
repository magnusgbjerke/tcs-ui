// src/mocks/products.ts
export interface Product {
  id: number
  name: string
  type: string
  customerCategory: string
  productCategory: string
  stock: {
    size: string
    quantity: number
  }[]
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    type: "t-shirts",
    customerCategory: "men",
    productCategory: "tops",
    stock: [
      {
        size: "S",
        quantity: 5
      },
      {
        size: "M",
        quantity: 7
      },
      {
        size: "L",
        quantity: 3
      }
    ]
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    type: "jeans",
    customerCategory: "men",
    productCategory: "bottoms",
    stock: [
      {
        size: "30x32",
        quantity: 4
      },
      {
        size: "32x32",
        quantity: 6
      },
      {
        size: "34x32",
        quantity: 2
      }
    ]
  },
  {
    id: 3,
    name: "Running Sneakers",
    type: "shoes",
    customerCategory: "men",
    productCategory: "footwear",
    stock: [
      {
        size: "40",
        quantity: 1
      },
      {
        size: "42",
        quantity: 2
      },
      {
        size: "44",
        quantity: 3
      }
    ]
  },
  {
    id: 4,
    name: "Leather Backpack",
    type: "backpacks",
    customerCategory: "unisex",
    productCategory: "accessories",
    stock: [
      {
        size: "One Size",
        quantity: 5
      }
    ]
  },
  {
    id: 5,
    name: "Hooded Sweatshirt",
    type: "hoodies",
    customerCategory: "women",
    productCategory: "tops",
    stock: [
      {
        size: "S",
        quantity: 4
      },
      {
        size: "M",
        quantity: 6
      },
      {
        size: "L",
        quantity: 2
      }
    ]
  }
]
