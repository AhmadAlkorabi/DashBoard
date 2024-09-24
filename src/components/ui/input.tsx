import * as React from "react"

import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 items-center rounded-md border-2 border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
          className
        )}
      >
        {/* Adjust icon size */}
        <input
          {...props}
          type={type}
          ref={ref}
          className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
        <Search className="h-4 w-4 me-2 text-primary" />{" "}
      </div>
    );
  }
)
Input.displayName = "Input"

export { Input }
