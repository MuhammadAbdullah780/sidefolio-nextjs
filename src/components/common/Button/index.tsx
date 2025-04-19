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
        primary: [
          // border
          "border-transparent",
          // text color
          "text-white",
          // background color
          "bg-primary",
          // hover color
          "hover:bg-primary/90",
          // disabled
          "disabled:bg-primary/50 disabled:text-white",
        ],
        blue_filled: [
          // border
          "border-transparent",
          // text color
          "text-white dark:text-white",
          // background color
          "bg-blue-500 dark:bg-blue-500",
          // hover color
          "hover:bg-blue-600 dark:hover:bg-blue-600",
          // disabled
          "disabled:bg-blue-300 disabled:text-white",
          "disabled:dark:bg-blue-800 disabled:dark:text-blue-400",
        ],
        
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
