import React, { useState, useContext } from "react";
import { Grid, Box } from "@mui/material";
import { themeToggle } from "../index";
import { useTheme } from "@emotion/react";
import MobileMenu from "../Components/Header/MobileMenu";
import DesktopMenu from "../Components/Header/DesktopMenu";
import Logo from "../Components/Header/Logo";
import ThemeToggle from "../Components/Header/ThemeToggle";

const pages = ["Home", "Experience", "Projects", "Contact"];

function Header() {
  const [navMenu, setNavMenu] = useState(null);
  const { toggleColorMode } = useContext(themeToggle);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => setNavMenu(event.currentTarget);
  const handleCloseNavMenu = () => setNavMenu(null);

  return (
    <Grid
      container
      id="header"
      alignItems="center"
      overflow="auto"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <MobileMenu
        navMenu={navMenu}
        handleOpenNavMenu={handleOpenNavMenu}
        handleCloseNavMenu={handleCloseNavMenu}
        pages={pages}
      />
      <Logo />
      <DesktopMenu
        pages={pages}
        toggleColorMode={toggleColorMode}
        theme={theme}
      />
      <Box sx={{ textAlign: "right", display: { xs: "inline", sm: "none" } }}>
        <ThemeToggle toggleColorMode={toggleColorMode} theme={theme} />
      </Box>
    </Grid>
  );
}

export default Header;
