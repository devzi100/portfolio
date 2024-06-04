import React from "react";
import Layout from "../Layout/Layout";
import "../CSS/Home.css";
import { Paper } from "@mui/material";

function Home() {
  return (
    <Layout>
      <div className="Home">
        <Paper square elevation={5} className="Home-Paper">
          <h1 style={{ textAlign: "center" }}>Deven Dattani - Home</h1>
        </Paper>
      </div>
    </Layout>
  );
}

export default Home;
