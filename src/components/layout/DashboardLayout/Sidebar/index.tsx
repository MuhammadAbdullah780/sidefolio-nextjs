"use client";
import { useMemo } from "react";

//
import { SideLink } from "./SideLink";

//
import { cx } from "@/functions/common";

//
import { DASHBOARD_LINKS } from "@/data/dashboardRoutes";
import { useGlobalVarsStore } from "@/lib/zustand";

//
type Props = {};

const Sidebar: React.FC<Props> = () => {
  //
  const { isCollapsed } = useGlobalVarsStore();

  // Vars
  const appRoutes = useMemo(() => DASHBOARD_LINKS, []);

  return (
    <aside
      className={cx(
        "relative flex flex-col bg-custom-secondary text-gray-300 print:hidden",
        "transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-16 lg:w-64"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center px-4">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sGPqgwH2YkU3gYjddnSkaT4XFQcaRl.png"
          alt="Logo"
          className="h-8 w-8"
        />
      </div>

      {/* Links */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {appRoutes.map((item) => (
          <SideLink key={item.title} config={item} />
        ))}
      </nav>
    </aside>
  );
};

export { Sidebar };
