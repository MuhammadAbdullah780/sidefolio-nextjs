import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @desc func to combine tailwind classes
 * @param {ClassValue[]} args - multiple tailwind classes
 */
export function cx(...args: ClassValue[]) {
  return twMerge(clsx(...args));
}
