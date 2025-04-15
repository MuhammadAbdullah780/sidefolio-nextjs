"use client";

import type React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cx } from "@/functions/common";

const buttonVariants = cva(
  "inline-flex w-full items-center justify-center text-sm font-medium duration-300 transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        grey_filled:
          "bg-[#f4f4f4] border border-[#ededed] hover:bg-[#DCDCDC] text-gray-800 hover:bg-gray-200",
      },
      size: {
        base: "py-2 px-4 rounded-md",
        sm: "py-1.5 px-3 rounded-md",
        xs: "py-1 px-2 rounded-md",
      },
      fullWidth: {
        true: "max-w-full",
        false: "max-w-fit",
      },
    },
    defaultVariants: {
      variant: "grey_filled",
      size: "base",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, children, ...props }, ref) => {
    return (
      <button
        className={cx(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
