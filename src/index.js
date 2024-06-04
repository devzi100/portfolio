import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useMediaQuery, createTheme, ThemeProvider } from "@mui/material";
import Home from "./Pages/Home";
import "./CSS/index.css";

export const themeToggle = React.createContext({ SetColourMode: () => {} });

/*
  Router Section
*/
function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}

/*
  Set Theme and Selection Tool
*/
function ThemeSelection() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  return { colorMode, theme };
}

function App() {
  const { theme, colorMode } = ThemeSelection();

  return (
    <themeToggle.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </themeToggle.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
