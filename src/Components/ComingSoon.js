import React from "react";
import { Typography, Container } from "@mui/material";

function ComingSoon({ page }) {
  return (
    <Container
      className="coming-soon"
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        {page} Page - Coming Soon
      </Typography>
    </Container>
  );
}

export default ComingSoon;
