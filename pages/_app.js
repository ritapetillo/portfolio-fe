import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import { light, dark } from "../styles/themes";
import { useContext, useEffect } from "react";
import { AppCxt } from "../context/AppCxt";
import AppContext, { useAppContext } from "../context/AppContext";
import MainApp from "./_mainApp";

function MyApp({ Component, pageProps }) {
  const { theme } = useAppContext();

  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <AppContext>
      <MainApp {...pageProps} Component={Component} />
    </AppContext>
  );
}

export default MyApp;
