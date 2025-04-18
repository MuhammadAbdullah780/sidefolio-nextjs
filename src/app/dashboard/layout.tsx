import React from "react";

//
import { DashboardLayout } from "@/components/layout/DashboardLayout";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
