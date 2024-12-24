"use client";
import React from "react";

//
import PortfolioNavItem from "./NavItem";
import { PortfolioSidebarIconProps } from "@/components/common/Icons";

type Props = {
  items: {
    href: string;
    Icon: React.FC<PortfolioSidebarIconProps>;
  }[];
};

const PortfolioNavItemMapper: React.FC<Props> = ({ items }) => {
  return items?.map((item, i) => {
    return <PortfolioNavItem Icon={item.Icon} href={item.href} key={i} />;
  });
};

export default PortfolioNavItemMapper;
