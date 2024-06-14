import React from "react";
import Layout from "../Layout/Layout";
import { Typography, Box, Stack, Divider } from "@mui/material";

function Home() {
  return (
    <Layout>
      <Stack spacing={2}>
        <Box className="about-me" p={2}>
          <Typography variant="h5" gutterBottom>
            Who am I?
          </Typography>
          <Typography variant="body1">
            My name is Deven. I am currently a PwC Technology Degree Apprentice
            studying Computer Science at the University of Birmingham.
          </Typography>
        </Box>
        <Divider />
        <Box className="projects-carousel" p={2}>
          <Typography variant="h5" gutterBottom>
            Current Projects
          </Typography>
          <Typography variant="body1">
            Coming soon... Watch this space!
          </Typography>
        </Box>
        <Divider />
        <Box className="experience-timeline" p={2}>
          <Typography variant="h5" gutterBottom>
            My Experience
          </Typography>
          <Typography variant="body1">
            You can currently view this on my LinkedIn using the link in the
            footer!
          </Typography>
        </Box>
        <Divider />
      </Stack>
    </Layout>
  );
}

export default Home;
