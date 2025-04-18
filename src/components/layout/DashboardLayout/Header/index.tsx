"use client";
import { ImageAvatar } from "@/components/common/ImageAvatar";
import { cx } from "@/functions/common";
import { useGlobalVarsStore } from "@/lib/zustand";
import { PanelLeft } from "lucide-react";
import React from "react";

const Header: React.FC = () => {
  //
  const { isCollapsed, toggleCollapsed } = useGlobalVarsStore();

  return (
    <header className="bg-white p-3 flex items-center gap-5 border-b">
      <PanelLeft
        onClick={toggleCollapsed}
        className={cx(
          "stroke-gray1 cursor-pointer hidden lg:block",
          !isCollapsed && "rotate-180"
        )}
      />
      <div className="flex-1" />
      <ImageAvatar
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt="Avatar"
      />
    </header>
  );
};

export default Header;
