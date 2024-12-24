"use client";
import React from "react";

//
import {
  AboutIcon,
  ChatWithMeIcon,
  HomeIcon
} from "@/components/common/Icons";
import PortfolioNavItemMapper from "./NavItemMapper";

type Props = { children: React.ReactNode };

const sidebarLinksMapper = [
  {
    href: "/",
    Icon: HomeIcon,
  },
  {
    href: "/about",
    Icon: AboutIcon,
  },
  {
    href: "/chat-with-me",
    Icon: ChatWithMeIcon,
  },
];

const PortfolioLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-full">
      <aside className="sticky top-0 left-0 h-screen flex items-center justify-center w-[65px] border-[1px] border-divider border-r z-1">
        <nav className="flex flex-col gap-5">
          <PortfolioNavItemMapper items={sidebarLinksMapper} />
        </nav>
      </aside>
      <div className="flex-1">
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </div>
  );
};

export default PortfolioLayout;
