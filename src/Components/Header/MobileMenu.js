import React from "react";
import { IconButton, Box, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const MobileMenu = ({
  navMenu,
  handleOpenNavMenu,
  handleCloseNavMenu,
  pages,
}) => {
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    navigate(`/${page.toLowerCase() === "home" ? "" : page}`);
  };

  return (
    <Box sx={{ display: { xs: "inline", sm: "none" } }}>
      <IconButton
        aria-label="Navigation bar"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
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
  );
};

export default MobileMenu;
