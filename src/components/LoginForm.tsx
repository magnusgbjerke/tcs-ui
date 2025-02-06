import * as React from "react"
import { Button } from "./Button"
import { Input } from "./Input"
import { cn } from "@/lib/utils"

interface LoginFormProps extends React.HTMLAttributes<HTMLFormElement> {
  /** Called when form is submitted */
  onSubmit?: (email: string, password: string) => void
  /** Loading state */
  loading?: boolean
}

export function LoginForm({
  onSubmit,
  loading = false,
  className,
  ...props
}: LoginFormProps) {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(email, password)
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className={cn("space-y-4", className)}
      {...props}
    >
      <div className="space-y-2">
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
      </div>
      <Button 
        type="submit"
        className="w-full"
        disabled={loading}
      >
        {loading ? "Loading..." : "Sign In"}
      </Button>
    </form>
  )
}
