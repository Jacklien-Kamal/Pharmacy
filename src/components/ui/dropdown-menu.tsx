import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      " _flex  _cursor-default  _select-none  _items-center  _rounded-sm  _px-2  _py-1.5  _text-sm  _outline-none focus: _bg-accent data-[state=open]: _bg-accent",
      inset && " _pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className=" _ml-auto  _h-4  _w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      " _z-50  _min-w-[8rem]  _overflow-hidden  _rounded-md  _border  _bg-popover  _p-1  _text-popover-foreground  _shadow-lg data-[state=open]: _animate-in data-[state=closed]: _animate-out data-[state=closed]: _fade-out-0 data-[state=open]: _fade-in-0 data-[state=closed]: _zoom-out-95 data-[state=open]: _zoom-in-95 data-[side=bottom]: _slide-in-from-top-2 data-[side=left]: _slide-in-from-right-2 data-[side=right]: _slide-in-from-left-2 data-[side=top]: _slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        " _z-50  _min-w-[8rem]  _overflow-hidden  _rounded-md  _border  _bg-popover  _p-1  _text-popover-foreground  _shadow-md data-[state=open]: _animate-in data-[state=closed]: _animate-out data-[state=closed]: _fade-out-0 data-[state=open]: _fade-in-0 data-[state=closed]: _zoom-out-95 data-[state=open]: _zoom-in-95 data-[side=bottom]: _slide-in-from-top-2 data-[side=left]: _slide-in-from-right-2 data-[side=right]: _slide-in-from-left-2 data-[side=top]: _slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      " _relative  _flex  _cursor-default  _select-none  _items-center  _rounded-sm  _px-2  _py-1.5  _text-sm  _outline-none  _transition-colors focus: _bg-accent focus: _text-accent-foreground data-[disabled]: _pointer-events-none data-[disabled]: _opacity-50",
      inset && " _pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      " _relative  _flex  _cursor-default  _select-none  _items-center  _rounded-sm  _py-1.5  _pl-8  _pr-2  _text-sm  _outline-none  _transition-colors focus: _bg-accent focus: _text-accent-foreground data-[disabled]: _pointer-events-none data-[disabled]: _opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className=" _absolute  _left-2  _flex  _h-3.5  _w-3.5  _items-center  _justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className=" _h-4  _w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      " _relative  _flex  _cursor-default  _select-none  _items-center  _rounded-sm  _py-1.5  _pl-8  _pr-2  _text-sm  _outline-none  _transition-colors focus: _bg-accent focus: _text-accent-foreground data-[disabled]: _pointer-events-none data-[disabled]: _opacity-50",
      className
    )}
    {...props}
  >
    <span className=" _absolute  _left-2  _flex  _h-3.5  _w-3.5  _items-center  _justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className=" _h-2  _w-2  _fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      " _px-2  _py-1.5  _text-sm  _font-semibold",
      inset && " _pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn(" _-mx-1  _my-1  _h-px  _bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(" _ml-auto  _text-xs  _tracking-widest  _opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
