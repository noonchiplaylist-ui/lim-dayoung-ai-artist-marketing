import React from "react";
import { createRoot } from "react-dom/client";

import Home from "../app/page";
import "../app/globals.css";

// This entry is used only by the static GitHub Pages build. Vinext also scans
// the `pages` directory while creating the server bundle, so keep browser-only
// mounting out of the server runtime.
if (typeof document !== "undefined") {
  const root = document.getElementById("root");

  if (!root) {
    throw new Error("Root element not found");
  }

  createRoot(root).render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
  );
}
