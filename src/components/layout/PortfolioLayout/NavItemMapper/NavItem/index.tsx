"use client";
//
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

//
import { PortfolioSidebarIconProps } from "@/components/common/Icons";

type Props = {
  Icon: React.FC<PortfolioSidebarIconProps>;
  href: string;
};

const PortfolioNavItem: React.FC<Props> = ({ Icon, href }) => {
  const pathname = usePathname();

  const isActive = pathname === href;
  console.log({ isActive, href, pathname }, "INFO_________");

  return (
    <Link href={href}>
      <Icon isActive={isActive} />
    </Link>
  );
};

export default PortfolioNavItem;
