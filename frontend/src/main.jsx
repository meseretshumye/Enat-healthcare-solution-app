import { StrictMode } from "react";
import { BrowserRouter} from "react-router";
import { createRoot } from "react-dom/client";
import "./assets/css/style.css";
import "./assets/css/calcBmi.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
