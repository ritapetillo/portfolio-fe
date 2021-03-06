import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import { light, dark } from "../styles/themes";
import { useContext, useEffect } from "react";
import { AppCxt } from "../context/AppCxt";
import AppContext, { useAppContext } from "../context/AppContext";
import { Parallax } from "@react-spring/parallax";

function MyApp({ Component, pageProps }) {
  const { theme } = useAppContext();

  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  );
}

export default MyApp;
