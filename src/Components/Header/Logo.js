import React from "react";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const logo =
    theme.palette.mode === "dark"
      ? "/Favicon/logo-darkmode.svg"
      : "/Favicon/logo.svg";

  return (
    <Box sx={{ textAlign: { xs: "center", sm: "left" }, flexGrow: 1 }}>
      <IconButton onClick={() => navigate("/")}>
        <img src={logo} alt="DD Logo" style={{ width: 40, height: 40 }} />
      </IconButton>
    </Box>
  );
};

export default Logo;
