import React from "react";
import MaxWidth from "../MaxWidth";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const DashboardWrapper: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <MaxWidth width={1280} className={cn("p-3 px-5", className)}>
      {children}
    </MaxWidth>
  );
};

export default DashboardWrapper;
