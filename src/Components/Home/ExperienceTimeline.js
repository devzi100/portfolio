import React from "react";
import { Box, Typography } from "@mui/material";

function ExperienceTimeline() {
  return (
    <Box className="projects-carousel" p={2}>
      <Typography variant="h5" gutterBottom>
        My Experience
      </Typography>
      <Typography variant="body1">
        You can currently view this on my LinkedIn using the link in the footer!
      </Typography>
    </Box>
  );
}

export default ExperienceTimeline;
