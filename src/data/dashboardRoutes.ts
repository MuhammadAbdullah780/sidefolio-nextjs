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

  // Profile Settings
  {
    title: "Profile Settings",
    icon: LayoutDashboard,
    to: "/dashboard/profile",
    isMatched: (path: string): boolean => {
      return path === "/dashboard/profile";
    },
  },

  // Projects
  {
    title: "Projects",
    icon: LayoutDashboard,
    to: "/dashboard/projects",
    isMatched: (path: string): boolean => {
      return path === "/dashboard/projects";
    },
  },
];
