"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
}

const buttonVariants = {
  default: "bg-foreground text-background hover:bg-foreground/90",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-border/40",
  secondary:
    "bg-accent text-accent-foreground hover:bg-accent/80 border border-border",
  ghost: "bg-transparent text-foreground hover:bg-muted/60",
  destructive:
    "bg-destructive text-primary-foreground hover:bg-destructive/90",
};

const sizeVariants = {
  sm: "px-4 py-2 text-sm",
  md: "px-7 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
  icon: "p-2",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      asChild = false,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? "span" : "button";
    const content = (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium tracking-tight transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none",
          buttonVariants[variant],
          sizeVariants[size],
          className,
        )}
        {...props}
        tabIndex={0}
      >
        {props.children}
      </button>
    );
    if (asChild) {
      return (
        <span className={cn(className)}>
          {props.children}
        </span>
      );
    }
    return content;
  },
);

Button.displayName = "Button";
export { Button };
