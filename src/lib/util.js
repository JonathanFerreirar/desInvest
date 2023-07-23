import { twMerge } from "tailwind-merge";
import className from "classnames";

export const cn = (...inputs) => {
  return twMerge(className(inputs));
};
