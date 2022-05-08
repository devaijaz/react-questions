import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { ThemeSwitch } from "./ThemeSwitch";

export const Header = () => {
  return (
    <AppBar
      elevation={1}
      sx={{
        position: "relative",
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          Cynax Labs
        </Typography>
        <Box sx={{ flexGrow: 1 }}></Box>
        <ThemeSwitch />
      </Toolbar>
    </AppBar>
  );
};
