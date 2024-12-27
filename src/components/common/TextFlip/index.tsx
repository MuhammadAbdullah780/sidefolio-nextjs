"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

//
import { cx } from "@/functions/common";

type Props = {
  words: string[];
  className?: string;
};

const TextFlip: React.FC<Props> = ({ words = [], className = "" }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= words.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={cx(
          "text-sm text-gray-600 dark:text-neutral-400 tracking-tight",
          className
        )}
        key={index}
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        exit={{ rotateX: -90, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {words[index]}
      </motion.div>
    </AnimatePresence>
  );
};

export default TextFlip;
