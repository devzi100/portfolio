import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Paper } from "@mui/material";
import "../CSS/Layout.css";

function Layout({ children }) {
  return (
    <Container id="outer-container" disableGutters maxWidth="xl">
      <Header />
      <Paper
        square
        elevation={5}
        className="page-content"
        children={children}
      />
      <Footer />
    </Container>
  );
}

export default Layout;
