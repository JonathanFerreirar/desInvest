import React from "react";
import className from "classnames";
import { buttonStyle } from "./button.style";

export const Button = ({
  children,
  primary,
  outline,
  small,
  textDefault,
  textThin,

  ...rest
}) => {
  const { regularClass, primaryClass, outlineClass } = buttonStyle;

  const classes = className(rest.className, `${regularClass}`, {
    [`${primaryClass}`]: primary,
    [`${outlineClass}`]: outline,
    " h-[32px] ": small,
    "text-[16px]": textDefault,
    "text-[12px]": textThin,
  });

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
