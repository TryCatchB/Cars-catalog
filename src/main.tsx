import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/Router";
import AuthProvider from "./components/providers/AuthProvider";
import "./assets/styles/global.css";

const rootElement = document.getElementById("root") as HTMLElement;

if (!rootElement) {
  console.error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>
);
