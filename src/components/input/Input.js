import { cn } from "../../lib/util";

export const Input = ({ className, ...props }) => {
  const classes = cn(
    "rounded-lg border-b px-4 py-5 placeholder:text-secondary-500 border-orange-500 bg-white shadow-md",
    className,
  );

  return <input className={classes} {...props} />;
};
