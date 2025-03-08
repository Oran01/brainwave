/**
 * Index Entry Point
 *
 * This file serves as the entry point of the React application. It initializes the ReactDOM,
 * wraps the main `App` component in `React.StrictMode`, and enables client-side routing
 * with `BrowserRouter`.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

// Render the application inside the root DOM element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Enables client-side routing */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
