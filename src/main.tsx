import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { PictureProvider } from "./contexts/PictureContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PictureProvider>
      <App />
    </PictureProvider>
  </StrictMode>
);
// This project is going to apply a functionality to fetch images from unsplash website
