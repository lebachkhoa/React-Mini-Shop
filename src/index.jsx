import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterCustom from "./router";
import MasterLayout from "./pages/users/theme/masterlayout";
import "./style/style.scss"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <MasterLayout>
      <BrowserRouter>
        <RouterCustom />
      </BrowserRouter>
    </MasterLayout>
  </StrictMode>
);
