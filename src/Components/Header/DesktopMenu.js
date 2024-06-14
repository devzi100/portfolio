import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const DesktopMenu = ({ pages, toggleColorMode, theme }) => {
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    navigate(`/${page.toLowerCase() === "home" ? "" : page}`);
  };

  return (
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
      <ThemeToggle toggleColorMode={toggleColorMode} theme={theme} />
    </Box>
  );
};

export default DesktopMenu;
