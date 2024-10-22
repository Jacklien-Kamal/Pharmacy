import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  " _inline-flex  _items-center  _justify-center  _whitespace-nowrap  _rounded-md  _text-sm  _font-medium  _ring-offset-background  _transition-colors focus-visible: _outline-none focus-visible: _ring-2 focus-visible: _ring-ring focus-visible: _ring-offset-2 disabled: _pointer-events-none disabled: _opacity-50",
  {
    variants: {
      variant: {
        default: " _bg-primary  _text-primary-foreground hover: _bg-primary/90",
        destructive:
          " _bg-destructive  _text-destructive-foreground hover: _bg-destructive/90",
        outline:
          " _border  _border-input  _bg-background hover: _bg-accent hover: _text-accent-foreground",
        secondary:
          " _bg-secondary  _text-secondary-foreground hover: _bg-secondary/80",
        ghost: "hover: _bg-accent hover: _text-accent-foreground",
        link: " _text-primary  _underline-offset-4 hover: _underline",
      },
      size: {
        default: " _h-10  _px-4  _py-2",
        sm: " _h-9  _rounded-md  _px-3",
        lg: " _h-11  _rounded-md  _px-8",
        icon: " _h-10  _w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
