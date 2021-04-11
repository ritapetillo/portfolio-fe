import { ThemeProvider } from "styled-components";
import { light, dark } from "../styles/themes";
import AppContext, { useAppContext } from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  const { theme } = useAppContext();

  return (
    <ThemeProvider theme={theme ? light : dark}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
