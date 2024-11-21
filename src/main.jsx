import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CssBaseline>
      <div onContextMenu={(e) => e.preventDefault()}>
        <App />
      </div>
    </CssBaseline>
  </BrowserRouter>
);