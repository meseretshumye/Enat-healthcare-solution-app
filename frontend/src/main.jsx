import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
// react bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./styes/global.css";
// import "./assets/css/calcBmi.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
