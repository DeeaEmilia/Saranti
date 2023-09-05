import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Layout from "./components/Layout.jsx";
import { BrowserRouter } from "react-router-dom";
import { StateContext } from "./context/StateContext.jsx";
import { Toaster } from "react-hot-toast";
import "./styles/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StateContext>
        <Layout>
          <Toaster />
          <App />
        </Layout>
      </StateContext>
    </BrowserRouter>
  </React.StrictMode>
);
