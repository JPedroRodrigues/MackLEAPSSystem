import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import { Footer } from "./Components/Footer/index";

import { ThemeProvider } from "styled-components";

import light from "./themes/light";
import dark from "./themes/dark";

import GlobalStyle from "./index";

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} title="luli" />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
