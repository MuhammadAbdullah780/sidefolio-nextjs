import { TextAnimate } from "@/components/common/TextAnimate";
import React from "react";

const EmptyText = () => {
  return (
    <div className="flex items-center h-full justify-center">
      <TextAnimate
        by="character"
        animation="blurInUp"
        as="h1"
        className="heading-1"
        layout
      >
        What can I help with ?
      </TextAnimate>
    </div>
  );
};

export default EmptyText;
