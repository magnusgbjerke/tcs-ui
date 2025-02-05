import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import Tester from "./tester/Tester.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Tester />
  </StrictMode>
);
