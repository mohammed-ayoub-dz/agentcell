import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css"
import { NavigationProvider } from "./context/navigationContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NavigationProvider>
      <App />
   </NavigationProvider>
  </React.StrictMode>,
);
