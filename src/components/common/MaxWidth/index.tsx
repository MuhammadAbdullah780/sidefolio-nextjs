import React from "react";

//
import { cx } from "@/functions/common";

type Props = {
  children: React.ReactNode;
  width?: number;
  className?: string;
};

const MaxWidth: React.FC<Props> = ({
  children,
  width = 600,
  className = "",
}) => {
  return (
    <div
      className={cx(["block m-auto w-full", className])}
      style={{ maxWidth: width }}
    >
      {children}
    </div>
  );
};

export default MaxWidth;
