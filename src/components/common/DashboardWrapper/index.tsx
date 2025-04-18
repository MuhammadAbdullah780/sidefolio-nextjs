import React from "react";
import MaxWidth from "../MaxWidth";

type Props = {
  children: React.ReactNode;
};

const DashboardWrapper: React.FC<Props> = ({ children }) => {
  return (
    <MaxWidth width={1280} className="p-3">
      {children}
    </MaxWidth>
  );
};

export default DashboardWrapper;
