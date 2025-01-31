// src/context/cart-context.tsx
import * as React from "react"

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  stock: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  total: number
}

const CartContext = React.createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>([])

  const total = React.useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }, [items])

  const addItem = React.useCallback((product: Omit<CartItem, 'quantity'>) => {
    setItems(current => {
      const existingItem = current.find(item => item.id === product.id)
      if (existingItem) {
        return current.map(item => 
          item.id === product.id 
            ? { ...item, quantity: Math.min(item.quantity + 1, item.stock) }
            : item
        )
      }
      return [...current, { ...product, quantity: 1 }]
    })
  }, [])

  const removeItem = React.useCallback((id: string) => {
    setItems(current => current.filter(item => item.id !== id))
  }, [])

  const updateQuantity = React.useCallback((id: string, quantity: number) => {
    setItems(current => 
      current.map(item =>
        item.id === id
          ? { ...item, quantity: Math.min(Math.max(0, quantity), item.stock) }
          : item
      )
    )
  }, [])

  const clearCart = React.useCallback(() => {
    setItems([])
  }, [])

  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addItem, 
        removeItem, 
        updateQuantity, 
        clearCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = React.useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
