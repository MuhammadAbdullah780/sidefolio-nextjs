"use client";
import { ChevronRight } from "@/components/common/Icons";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Props = {
  title: string;
  imageUrl: string;
  subTitle: string;
  dateRangeStr: string;
  description: string;
};

const MilestoneCard: React.FC<Props> = ({
  title,
  dateRangeStr,
  description,
  imageUrl,
  subTitle,
}) => {
  //
  const [isOpen, setIsOpen] = useState(false);

  //
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Image
            src={imageUrl}
            alt="#"
            width={45}
            height={45}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <div
              onClick={handleToggle}
              className="flex cursor-pointer items-center"
            >
              <h3 className="font-semibold peer/title text-sm text-gray-800 dark:text-neutral-200">
                {title}
              </h3>

              <ChevronRight
                className="opacity-0 peer-hover/title:opacity-100 peer-hover/title:translate-x-1 transition-all duration-150"
                width={15}
                height={15}
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              {subTitle}
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-400 dark:text-neutral-400">
          {dateRangeStr}
        </p>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden text-sm text-gray-600 dark:text-neutral-400 ml-[53px]"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MilestoneCard;
