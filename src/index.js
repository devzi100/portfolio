import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useMediaQuery, createTheme, ThemeProvider } from "@mui/material";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
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
    {
      path: "/Experience",
      element: <Experience />,
    },
    {
      path: "/Projects",
      element: <Projects />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
  ]);

  return <RouterProvider router={router} />;
}

/*
  Set Theme and Selection Tool
*/
function useThemeSelection() {
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
  const { theme, colorMode } = useThemeSelection();

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
