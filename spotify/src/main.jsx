import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Head from "./Head.jsx";
import SideScroller from "./SideScroller.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SideScroller />
  </StrictMode>
);
