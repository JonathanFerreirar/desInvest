import { cn } from "../../lib/util";
import { Slot } from "@radix-ui/react-slot";

export const Button = ({
  children,
  primary,
  outline,
  small,
  textThin,
  shadow,
  className,
  asChild,
  ...rest
}) => {
  const Comp = asChild ? Slot : "button";

  const classes = cn(
    "px-3 text-center py-1.5 text-[12px] sm:text-[16px] border h-[37px] font-default font-button rounded-default flex justify-center items-center ease-in duration-200",
    {
      "text-white bg-button  hover:bg-white hover:text-button": primary,
      "bg-white text-button hover:bg-button hover:text-white": outline,
      "h-[32px]": small,
      "text-[12px]": textThin,
      "shadow-button hover:brightness-90": shadow,
    },
    className,
  );

  return (
    <Comp className={classes} {...rest}>
      {children}
    </Comp>
  );
};
