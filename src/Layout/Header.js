import React, { useContext } from "react";
import { AppBar, IconButton, Toolbar, Typography, Tooltip } from "@mui/material";
import { themeToggle } from "../index";
import { useTheme } from "@emotion/react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";


function Header() {
  const { toggleColorMode } = useContext(themeToggle);
  const theme = useTheme();

  return (
    <AppBar sx={{
      backgroundColor: theme.palette.background.default, color: theme.palette.text.primary
      }}>
        <Toolbar disableGutters>
          <img
            src={theme.palette.mode === 'dark' ? '/Favicon/logo-darkmode.svg' : '/Favicon/logo.svg'}
            alt="DD Logo"
            style={{ width: 40, height: 40, justifyContent: 'flex-start'}}
          />

          <Typography
            component="a"
            href="/"
          >
            Deven Dattani
          </Typography>

            <Tooltip title={theme.palette.mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
              <IconButton className="LightDarkToggle" onClick={toggleColorMode}>
                {theme.palette.mode === "dark" ? (<Brightness7Icon />) : (<Brightness4Icon />)}
              </IconButton>
            </Tooltip>

        </Toolbar>
    </AppBar>
  );
}
export default Header;
