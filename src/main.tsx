import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

const theme = createTheme({
  /** Put your mantine theme override here */
});


ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme} defaultColorScheme="dark">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MantineProvider>
);
