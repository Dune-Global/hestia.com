import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-[16px] rounded-md font-light ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        fillBlack: "bg-gray-800 text-white hover:bg-gray-800/80",
        outlineGray:
          "border border-gray-800 text-gray-800 bg-white hover:bg-accent hover:text-accent-foreground",
        outlineGreen:
          "border border-green-500 text-green-500 bg-white hover:opacity-80",
        outlineRed:
          "border border-red-500 text-red-500 bg-white hover:opacity-80",
      },
      isDisabled: {
        true: "opacity-50 pointer-events-none",
        false: "",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-sm  font-normal",
        lg: "h-11 px-8 text-lg",
        icon: "h-10 w-10",
        sicon: "h-8 w-8",
        full: "h-10 px-4 py-2 w-full",
        freeSize: "px-3 h-9 w-fit",
        freeIcon: "p-1 h-9 w-fit",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      isDisabled: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  arrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      arrow = false,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, isDisabled: disabled, className })
        )}
        ref={ref}
        {...props}
        disabled={loading || disabled}
      >
        {loading ? (
          <>
            {children}
            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            {children}
            {arrow && <ArrowRight className="ml-2 h-4 w-4" />}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
