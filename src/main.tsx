import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PigGameProvider } from "./contexts/pigGamaContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PigGameProvider>
      <App />
    </PigGameProvider>
  </React.StrictMode>
);
