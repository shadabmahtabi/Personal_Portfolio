import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HelmetProvider>
      <CssBaseline>
        <div onContextMenu={(e) => e.preventDefault()}>
          <App />
        </div>
      </CssBaseline>
    </HelmetProvider>
  </BrowserRouter>
);
