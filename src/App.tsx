import React, { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Q1 } from "./components/questions/Q1";
import { Q2 } from "./components/questions/Q2";
import { Q3 } from "./components/questions/Q3";
import { Q4 } from "./components/questions/Q4";
import { Q5 } from "./components/questions/Q5";
import { ContextProvider, useThemeContext } from "./context";

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
        <Route path="/q1" element={<Q1 />}></Route>
        <Route path="/q2" element={<Q2 />}></Route>
        <Route path="/q3" element={<Q3 />}></Route>
        <Route path="/q4" element={<Q4 />}></Route>
        <Route path="/q5" element={<Q5 />}></Route>
        <Route path="*" element={<Navigate to="/q1" />} />
      </Route>
    </Routes>
  );
};

export default App;
