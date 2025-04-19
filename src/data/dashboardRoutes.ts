import { LayoutDashboard } from "lucide-react";

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

  // Profile
  {
    title: "Profile",
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

  // Education
  {
    title: "Education",
    icon: LayoutDashboard,
    to: "/dashboard/education",
    isMatched: (path: string): boolean => {
      return path === "/dashboard/education";
    },
  },

  // Experience
  {
    title: "Experience",
    icon: LayoutDashboard,
    to: "/dashboard/experience",
    isMatched: (path: string): boolean => {
      return path === "/dashboard/experience";
    },
  },

  // Testimonials
  {
    title: "Testimonials",
    icon: LayoutDashboard,
    to: "/dashboard/testimonials",
    isMatched: (path: string): boolean => {
      return path === "/dashboard/testimonials";
    },
  },
];
