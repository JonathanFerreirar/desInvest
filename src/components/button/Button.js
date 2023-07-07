import React from "react";
import "./Button.css";

export const Button = ({ children }) => {
  return (
    <div>
      <button className="bg-[#FF7C04] py-[15px] px-[18px] text-[#FFF] rounded-[5px]">
        {children}
      </button>
    </div>
  );
};
