import React from "react";
import { useThemeContext } from "../context";
import { Box, FormLabel, Switch } from "@mui/material";

export const ThemeSwitch = () => {
  const { darkMode, setDarkMode } = useThemeContext();

  return (
    <Box className="flex items-center">
      <FormLabel htmlFor="toggle">Toggle Theme Mode</FormLabel>
      <Switch
        id="toggle"
        value={darkMode}
        onChange={(e) => {
          setDarkMode(e.target.checked);
        }}
      />
    </Box>
  );
};
