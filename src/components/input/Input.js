import "./Input.css";

import React from "react";

export const Input = ({ nome }) => {
  return <input className={`border bg-button ${nome}`} />;
};
