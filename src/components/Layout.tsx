import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Header } from "./Header";
import { Box, Container } from "@mui/material";
import { Footer } from "./Footer";
export const Layout = () => {
  return (
    <Container maxWidth={false}>
      <Header />
      <Box className="px-2 py-2 max-w-6xl m-auto min-w-[700px] mt-24">
        <Navbar />
        <div className="pt-16">
          <Outlet />
        </div>
      </Box>
      <Footer />
    </Container>
  );
};
