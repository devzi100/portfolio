import React, { useState, useContext } from "react";
import {
  IconButton,
  Tooltip,
  Box,
  Button,
  Grid,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { themeToggle } from "../index";
import { useTheme } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useNavigate } from "react-router-dom";

const pages = ["Home", "Experience", "Projects", "Contact"];

function Header() {
  const [navMenu, setNavMenu] = useState(null);
  const { toggleColorMode } = useContext(themeToggle);

  const handleOpenNavMenu = (event) => {
    setNavMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setNavMenu(null);
  };
  const theme = useTheme();
  const logo =
    theme.palette.mode === "dark"
      ? "/Favicon/logo-darkmode.svg"
      : "/Favicon/logo.svg";
  const themeToggleTitle =
    theme.palette.mode === "dark"
      ? "Switch to Light Mode"
      : "Switch to Dark Mode";
  const navigate = useNavigate();
  const handleNavigation = (page) => {
    page = page.toLowerCase() === "home" ? "" : page;
    navigate(`/${page.toLowerCase()}`);
  };

  return (
    <Grid
      container
      id="header"
      alignItems="center"
      overflow={"auto"}
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Box
        sx={{
          display: { xs: "inline", sm: "none" },
        }}
      >
        <IconButton
          aria-label="Navigation bar"
          aria-controls="navigation-bar"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="navigation-bar"
          anchorEl={navMenu}
          open={Boolean(navMenu)}
          onClose={handleCloseNavMenu}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={() => handleNavigation(page)}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Box
        sx={{
          textAlign: { xs: "center", sm: "left" },
          flexGrow: 1,
          margin: { xs: "0 auto" },
        }}
      >
        <IconButton onClick={() => handleNavigation("home")}>
          <img
            src={logo}
            alt="DD Logo"
            style={{
              width: 40,
              height: 40,
              mr: 1,
            }}
          />
        </IconButton>
      </Box>

      <Box sx={{ display: { xs: "none", sm: "inline" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={() => handleNavigation(page)}
            sx={{ my: 2, color: "inherit" }}
          >
            {page}
          </Button>
        ))}
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
      </Box>

      <Box
        sx={{
          textAlign: "right",
          display: { xs: "inline", sm: "none" },
        }}
      >
        <Tooltip title={themeToggleTitle}>
          <IconButton className="LightDarkToggle" onClick={toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Tooltip>
      </Box>
    </Grid>
  );
}
export default Header;
