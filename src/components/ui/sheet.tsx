import type { ComponentProps } from "react";
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { cn } from "../../lib/utils";

type WithClass<T> = Omit<T, "className"> & { className?: string };
type Side = "top" | "right" | "bottom" | "left";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;

const sideClasses: Record<Side, string> = {
  left: "inset-y-0 left-0 h-full w-3/4 max-w-sm border-r data-[starting-style]:-translate-x-full data-[ending-style]:-translate-x-full",
  right: "inset-y-0 right-0 h-full w-3/4 max-w-sm border-l data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full",
  top: "inset-x-0 top-0 border-b data-[starting-style]:-translate-y-full data-[ending-style]:-translate-y-full",
  bottom: "inset-x-0 bottom-0 border-t data-[starting-style]:translate-y-full data-[ending-style]:translate-y-full",
};

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: WithClass<ComponentProps<typeof SheetPrimitive.Popup>> & { side?: Side }) {
  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Backdrop className="fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0" />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-background shadow-lg outline-none transition-transform duration-300 ease-in-out",
          sideClasses[side],
          className
        )}
        {...props}
      >
        {children}
      </SheetPrimitive.Popup>
    </SheetPrimitive.Portal>
  );
}

function SheetTitle({
  className,
  ...props
}: WithClass<ComponentProps<typeof SheetPrimitive.Title>>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("font-semibold text-foreground", className)}
      {...props}
    />
  );
}

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetTitle };
