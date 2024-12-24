import { NextPage } from "next";
import React from "react";

//
import PortfolioLayout from "@/components/layout/PortfolioLayout";

type Props = {
  children: React.ReactNode;
};

const layout: NextPage<Props> = ({ children }) => {
  return <PortfolioLayout>{children}</PortfolioLayout>;
};

export default layout;
