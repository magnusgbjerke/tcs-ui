import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import Test from "./test/Test.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Test />
  </StrictMode>
);
