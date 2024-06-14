import React from "react";
import { Typography, Box } from "@mui/material";

function AboutMe() {
  return (
    <Box className="about-me" p={2}>
      <Typography variant="h5" gutterBottom>
        Who am I?
      </Typography>
      <Typography variant="body1">
        My name is Deven. I am currently a PwC Technology Degree Apprentice
        studying Computer Science at the University of Birmingham.
      </Typography>
    </Box>
  );
}

export default AboutMe;
