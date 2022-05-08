import React, { useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ContextProvider, useThemeContext } from "./context";
import { routes } from "./routes";

function App() {
  const { darkMode } = useThemeContext();
  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
        primary: {
          main: "#EBAFE",
          light: "#5E7BFD",
          dark: "#3A53A2",
        },
        secondary: {
          main: "#EBD4F7",
          light: "#FFC5F6",
          dark: "#FF9FB1",
        },
      },
    });
  }, [darkMode]);
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </ContextProvider>
  );
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map((route) => (
          <Route key={route.to} path={route.to} element={<route.Component />}></Route>
        ))}
        {<Route path="*" element={<Navigate to="/q1" />} />}
      </Route>
    </Routes>
  );
};

export default App;
