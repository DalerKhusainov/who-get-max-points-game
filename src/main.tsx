import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PigGameProvider } from "./contexts/pigGamaContext.tsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PigGameProvider>
      <Router>
        <App />
      </Router>
    </PigGameProvider>
  </React.StrictMode>
);
