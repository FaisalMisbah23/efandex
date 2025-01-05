import * as React from "react"

import { cn } from "@/lib/utils"
import { Search } from "lucide-react";

const Input = React.forwardRef(({ className, type, placeholder, ...props }, ref) => {
  return (
    (
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" />
        <input
          type={type}
          placeholder={placeholder}
          className={cn(
            "flex h-10 w-full border border-input bg-muted pl-12 py-1 placeholder-[#2A2A2E] text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props} />
      </div>
    )
  );
})
Input.displayName = "Input"

export { Input }
