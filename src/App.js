import React from "react";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lightTheme, darkTheme } from "./Themes/theme";
import { DetailsPage, HomePage, Layout } from "./Pages";
function App() {
  const mode = useSelector((state) => {
    return state;
  });
  return (
    <ThemeProvider theme={mode === "darkmode" ? darkTheme : lightTheme}>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/country' element={<DetailsPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
