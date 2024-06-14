import React from "react";
import { Typography, Container } from "@mui/material";

function ComingSoon({ page }) {
  return (
    <Container
      className="coming-soon"
      style={{ transform: "translateY(1000%)" }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        {page} Page - Coming Soon
      </Typography>
    </Container>
  );
}

export default ComingSoon;
