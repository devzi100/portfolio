import React from "react";
import { Box, Typography } from "@mui/material";

function ProjectCarousel() {
  return (
    <Box className="projects-carousel" p={2}>
      <Typography variant="h5" gutterBottom>
        Current Projects
      </Typography>
      <Typography variant="body1">Coming soon... Watch this space!</Typography>
    </Box>
  );
}

export default ProjectCarousel;
