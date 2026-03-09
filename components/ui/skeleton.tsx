"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Skeleton loading placeholder matching shadcn/ui semantic styles.
 * Ensures accessibility with role and aria-busy.
 */
const Skeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("animate-pulse rounded-lg bg-muted", className)}
    aria-busy="true"
    aria-label="Loading"
    role="status"
    {...props}
  />
));
Skeleton.displayName = "Skeleton";
export { Skeleton };
