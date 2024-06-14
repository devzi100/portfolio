import React from "react";
import Layout from "../Layout/Layout";
import { Stack, Divider } from "@mui/material";
import AboutMe from "../Components/Home/AboutMe";
import ProjectCarousel from "../Components/Home/ProjectCarousel";
import ExperienceTimeline from "../Components/Home/ExperienceTimeline";

function Home() {
  return (
    <Layout>
      <Stack spacing={2}>
        <AboutMe />
          <Divider />
        <ProjectCarousel />
          <Divider />
        <ExperienceTimeline />
          <Divider />
      </Stack>
    </Layout>
  );
}

export default Home;
