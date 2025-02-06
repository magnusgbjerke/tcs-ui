import * as React from "react"

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  loading: boolean
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null)
  const [loading, setLoading] = React.useState(false)

  const login = React.useCallback(async (email: string, password: string) => {
    setLoading(true)
    try {
      // Mock login - replace with real API call later
      await new Promise(resolve => setTimeout(resolve, 1000))
      setUser({
        id: "1",
        name: "Test User",
        email: email
      })
    } finally {
      setLoading(false)
    }
  }, [])

  const register = React.useCallback(async (name: string, email: string, password: string) => {
    setLoading(true)
    try {
      // Mock register - replace with real API call later
      await new Promise(resolve => setTimeout(resolve, 1000))
      setUser({
        id: "1",
        name: name,
        email: email
      })
    } finally {
      setLoading(false)
    }
  }, [])

  const logout = React.useCallback(() => {
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        login,
        register,
        logout,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
