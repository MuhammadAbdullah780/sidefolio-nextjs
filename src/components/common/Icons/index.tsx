import React from "react";

//
import { cx } from "@/functions/common";

//
export type PortfolioSidebarIconProps = {
  className?: string;
  isActive?: boolean;
};

const HomeIcon: React.FC<PortfolioSidebarIconProps> = ({
  className = "",
  isActive = false,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx([
        "lucide lucide-house nav-icon",
        isActive && "!stroke-[#161616]",
        className,
      ])}
    >
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
};

const WorkIcon: React.FC<PortfolioSidebarIconProps> = ({
  className = "",
  isActive = false,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx([
        "lucide lucide-folder-kanban nav-icon",
        isActive && "!stroke-[#161616]",
        className,
      ])}
    >
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      <path d="M8 10v4" />
      <path d="M12 10v2" />
      <path d="M16 10v6" />
    </svg>
  );
};

const AboutIcon: React.FC<PortfolioSidebarIconProps> = ({
  className = "",
  isActive = false,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx([
        "lucide lucide-user nav-icon",
        isActive && "!stroke-[#161616]",
        className,
      ])}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx={12} cy={7} r={4} />
    </svg>
  );
};

const ChatWithMeIcon: React.FC<PortfolioSidebarIconProps> = ({
  className = "",
  isActive = false,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx([
        "lucide lucide-bot nav-icon",
        isActive && "!stroke-[#161616]",
        className,
      ])}
    >
      <path d="M12 8V4H8" />
      <rect width={16} height={12} x={4} y={8} rx={2} />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
};

export { HomeIcon, WorkIcon, AboutIcon, ChatWithMeIcon };
