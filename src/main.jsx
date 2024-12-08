import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: "Gilroy, Arial, sans-serif",
  },
});

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div onContextMenu={(e) => e.preventDefault()}>
          <App />
        </div>
      </CssBaseline>
    </ThemeProvider>
  </HelmetProvider>
);
