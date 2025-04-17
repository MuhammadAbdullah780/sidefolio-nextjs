import { cx } from "@/functions/common";
import { ComponentPropsWithoutRef, ElementType, forwardRef } from "react";

// Utils

//
type Props<T extends ElementType> = {
  as?: T;
  width?: number;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "className">;

// Create a generic forwardRef component
const MaxWidth = forwardRef(
  <T extends ElementType = "div">(
    { as, width = 600, className = "", ...props }: Props<T>,
    ref: any // We use any here because of the dynamic element type
  ) => {
    const Component = as || "div";

    return (
      <Component
        {...props}
        ref={ref}
        style={{ maxWidth: width }}
        className={cx("block m-auto", className)}
      />
    );
  }
);

// Add display name for better debugging
MaxWidth.displayName = "MaxWidth";

export default MaxWidth;
