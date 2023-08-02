import * as SelectPrimitive from "@radix-ui/react-select";
import { forwardRef } from "react";
import { BiChevronDown } from "react-icons/bi";
import { cn } from "../../lib/util";

export const Root = SelectPrimitive.Root;

export const Value = SelectPrimitive.Value;

export const Trigger = forwardRef(({ className, children, ...props }, ref) => {
  const styles = cn(
    "rounded-lg focus:outline-none  border-b w-[300px] h-[50px] flex justify-between px-5 items-center border-orange-500 bg-white shadow-md",
    "group data-[placeholder]:text-secondary-500",
    className,
  );

  return (
    <SelectPrimitive.Trigger ref={ref} className={styles} {...props}>
      {children}
      <SelectPrimitive.Icon className="transition-transform duration-200 group-data-[state=open]:rotate-180">
        <BiChevronDown className="text-xl" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});

Trigger.displayName = "Trigger";

export const Content = forwardRef(
  ({ className, children, position = "popper", ...props }, ref) => {
    const styles = cn(
      " cursor-pointer rounded-lg border-b border-orange-500 text-black-400 focus:outline-none ",
      className,
    );

    return (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          ref={ref}
          className={styles}
          position={position}
          {...props}
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    );
  },
);

Content.displayName = "Content";

export const Item = forwardRef(({ className, children, ...props }, ref) => {
  const styles = cn(
    "mt-2 pt-3 focus:outline-none w-[290px] h-[50px]",
    "data-[highlighted]:text-primary-500 data-[highlighted]:bg-gray-100",
    className,
  );
  return (
    <SelectPrimitive.Item ref={ref} className={styles} {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});

Item.displayName = "Item";
