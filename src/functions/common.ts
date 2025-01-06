import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @desc func to combine tailwind classes
 * @param {ClassValue[]} args - multiple tailwind classes
 */
export function cx(...args: ClassValue[]) {
  return twMerge(clsx(...args));
}

/**
 * @desc func to scroll at specific element through id
 * @param {string} args - id of an element
 */
export const scrollTo = (id: string) => {
  if (typeof window !== undefined) {
    console.log("SCROLLING_______")
    const element = document.getElementById(id);
    if (element) {
      // Scroll to the element smoothly
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
