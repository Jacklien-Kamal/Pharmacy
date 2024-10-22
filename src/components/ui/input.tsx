import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          " _flex  _h-10  _w-full  _rounded-md  _border  _border-input  _bg-background  _px-3  _py-2  _text-sm  _ring-offset-background file: _border-0 file: _bg-transparent file: _text-sm file: _font-medium placeholder: _text-muted-foreground focus-visible: _outline-none focus-visible: _ring-2 focus-visible: _ring-ring focus-visible: _ring-offset-2 disabled: _cursor-not-allowed disabled: _opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
