import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { ThemeSwitch } from "./ThemeSwitch";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar
      elevation={1}
      sx={{
        position: "fixed",
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          <Link to="/">Cynax Labs</Link>
        </Typography>
        <Box sx={{ flexGrow: 1 }}></Box>
        <ThemeSwitch />
      </Toolbar>
    </AppBar>
  );
};
