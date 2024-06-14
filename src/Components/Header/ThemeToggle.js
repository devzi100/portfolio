import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function ThemeToggle({ toggleColorMode, theme }) {
  return (
    <Tooltip
      title={
        theme.palette.mode === "dark"
          ? "Switch to Light Mode"
          : "Switch to Dark Mode"
      }
    >
      <IconButton className="LightDarkToggle" onClick={toggleColorMode}>
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Tooltip>
  );
}

export default ThemeToggle;
