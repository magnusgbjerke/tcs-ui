import * as React from "react"
import { Button } from "./Button"
import { Input } from "./Input"
import { cn } from "@/lib/utils"

interface RegisterFormProps extends React.HTMLAttributes<HTMLFormElement> {
  /** Called when form is submitted */
  onSubmit?: (values: { 
    name: string
    email: string 
    password: string 
  }) => void
  /** Loading state */
  loading?: boolean
}

export function RegisterForm({
  onSubmit,
  loading = false,
  className,
  ...props
}: RegisterFormProps) {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [error, setError] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    onSubmit?.({ name, email, password })
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className={cn("space-y-4", className)}
      {...props}
    >
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
      <Button 
        type="submit"
        className="w-full"
        disabled={loading}
      >
        {loading ? "Creating Account..." : "Create Account"}
      </Button>
    </form>
  )
}
