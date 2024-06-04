import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";

import { themeToggle } from "../index";
import { useTheme } from "@emotion/react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function Header() {
  const { toggleColorMode } = useContext(themeToggle);
  const theme = useTheme();

  return (
    <div className="Header">
      <Box sx={{
        backgroundColor: theme.palette.background.default, color: theme.palette.text.primary
        }}>
      <div className="LightDarkToggle">
        <IconButton onClick={toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
        </div>
      </Box>
      </div>
  
    
  );
}

export default Header;
