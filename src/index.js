import React from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { Router } from "./Router";

const root = createRoot(document.getElementById("root"));
root.render(<Router />);
