import React from "react";
import className from "classnames";

export const Button = ({
  children,
  primary,
  outline,
  small,
  textDefault,
  textThin,

  ...rest
}) => {
  const classes = className(
    rest.className,
    "px-3 text-center py-1.5 border h-[37px] font-default font-button rounded-default flex justify-center items-center ease-in duration-200",
    {
      "text-white bg-button  hover:bg-white hover:text-button": primary,
      "bg-white text-button hover:bg-button hover:text-white": outline,
      "h-[32px]": small,
      "text-[16px]": textDefault,
      "text-[12px]": textThin,
    }
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
