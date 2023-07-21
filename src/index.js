import { createRoot } from "react-dom/client";
import { Router } from "./Router";
import "./global.css";

const root = createRoot(document.getElementById("root"));
root.render(<Router />);
