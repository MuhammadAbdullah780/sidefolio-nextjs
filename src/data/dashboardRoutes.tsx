import { LayoutDashboard, Users } from "lucide-react";

export const DASHBOARD_LINKS = [
  // Overview
  {
    title: "Overview",
    icon: LayoutDashboard,
    to: "/dashboard",
    isMatched: (path: string): boolean => {
      return path === "/dashboard";
    },
  },
];
