import React from "react";
import "./Button.css";

export const Button = ({ children }) => {
  return (
    <div>
      <button className="w-fit bg-[var(--primary-color)] py-[10px] px-[15px] font-[var(--heading4-500)] text-[#FFF] rounded-[5px]">
        {children}
      </button>
    </div>
  );
};
