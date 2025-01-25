"use client";
import React from "react";

//
import {
  AboutIcon,
  ChatWithMeIcon,
  ContactIcon,
  HomeIcon,
  MyWorkIcon,
} from "@/components/common/Icons";
import PortfolioNavItemMapper from "./NavItemMapper";
import { BriefcaseBusiness } from "lucide-react";
import MaxWidth from "@/components/common/MaxWidth";

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
  {
    href: "/my-work",
    Icon: MyWorkIcon,
  },
  {
    href: "/contact",
    Icon: ContactIcon,
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
        <main className="min-h-screen bg-gray-50" id="main-container-portfolio">
          {children}
        </main>
        <footer>
          <MaxWidth className="px-5 py-3">
            <p className="text-center">
              © {new Date().getUTCFullYear()} — Muhammad Abdullah
            </p>
          </MaxWidth>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioLayout;
