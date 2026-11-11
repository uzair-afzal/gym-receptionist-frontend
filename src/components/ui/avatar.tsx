import type { ComponentProps } from "react";
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { cn } from "../../lib/utils";

type WithClass<T> = Omit<T, "className"> & { className?: string };

function Avatar({ className, ...props }: WithClass<ComponentProps<typeof AvatarPrimitive.Root>>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn("relative flex size-8 shrink-0 overflow-hidden rounded-full select-none", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: WithClass<ComponentProps<typeof AvatarPrimitive.Fallback>>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn("flex size-full items-center justify-center rounded-full bg-muted text-sm", className)}
      {...props}
    />
  );
}

export { Avatar, AvatarFallback };
