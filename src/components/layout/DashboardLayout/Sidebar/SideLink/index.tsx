"use client";

import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";

//
import { cx } from "@/functions/common";

//
import { DASHBOARD_LINKS } from "@/data/dashboardRoutes";
import { useGlobalVarsStore } from "@/lib/zustand";

//
type Props = {
  config: (typeof DASHBOARD_LINKS)[number];
};

//
const SideLink = ({ config }: Props) => {
  //
  const [isOpen, setIsOpen] = useState(false);

  //
  const pathname = usePathname();
  const router = useRouter();

  //
  const { isCollapsed } = useGlobalVarsStore();

  //
  const hasChildren = config?.innerRoutes && config?.innerRoutes?.length > 0;

  //
  const isActive = useMemo(() => {
    return config.isMatched(pathname);
  }, [pathname]);

  return (
    <div className="flex flex-col text-gray1">
      <button
        onClick={() => {
          if (hasChildren) {
            setIsOpen(!isOpen);
            return;
          }

          router.push(config.to);
        }}
        className={cx(
          "group flex items-center rounded-lg px-3 py-2 text-sm font-medium",
          "transition-colors duration-200",
          "hover:bg-custom-secondary_light hover:text-white",
          isActive && "bg-custom-secondary_light text-white",
          isCollapsed && "justify-center"
        )}
      >
        <config.icon className="h-5 w-5 flex-shrink-0" />
        <span
          className={cx(
            "flex-1 text-left whitespace-nowrap",
            // "transition-all duration-300 ease-in-out",
            isCollapsed
              ? "w-0 opacity-0 ml-0"
              : "lg:ml-3 ml-0 w-0 lg:w-auto opacity-0 lg:opacity-100"
          )}
        >
          {config.title}
        </span>
        {hasChildren && !isCollapsed && (
          <ChevronDown
            className={cx(
              "ml-auto h-4 w-4 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        )}
      </button>

      {/* Nested Items */}
      {hasChildren && !isCollapsed && (
        <div
          className={cx(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-auto" : "max-h-0"
          )}
        >
          <ul className="mt-1 space-y-1">
            {config.innerRoutes.map((child) => (
              <li
                key={child.to}
                onClick={() => {
                  router?.push(child.to);
                }}
                className={cx(
                  "flex items-center rounded-lg py-2 pl-10 pr-3 text-sm font-medium transition-colors",
                  "hover:bg-secondary_light hover:text-white",
                  child?.isMatched(pathname)
                    ? "bg-secondary_light text-white"
                    : ""
                )}
              >
                {child.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { SideLink };
