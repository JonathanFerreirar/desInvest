import { cn } from "../../lib/util";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from "react";

export const Quantity = ({ className, onChange, ...props }) => {
  const [valueState, setValueState] = useState(0);
  const classes = cn(
    "rounded-lg w-[160px] sm:w-[250px] border-b px-1 sm:px-4 sm:py-3 py-2 border-primary-400 bg-white shadow-md text-center",
  );

  const handleValueMore = () => {
    setValueState((oldValue) => oldValue + 1);
    onChange(valueState + 1);
  };

  const handleValueLess = () => {
    setValueState((oldValue) => oldValue - 1);
    onChange(valueState - 1);
  };

  return (
    <div className={`relative  h-auto w-auto ${className}`} tabIndex="-1">
      <button
        type="button"
        className="absolute left-0 top-0 flex h-full w-[50px] cursor-pointer items-center  justify-center text-sm text-white "
        onClick={handleValueLess}
      >
        <FaMinus className="rounded-full bg-primary-400" />
      </button>
      <input
        tabIndex="-1"
        onChange={() => console.log("")}
        value={valueState}
        className={classes}
        {...props}
      />
      <button
        type="button"
        className="absolute right-0 top-0 flex h-full w-[50px] cursor-pointer items-center  justify-center  text-sm text-white"
        onClick={handleValueMore}
      >
        <FaPlus className="rounded-full bg-primary-400" />
      </button>
    </div>
  );
};
