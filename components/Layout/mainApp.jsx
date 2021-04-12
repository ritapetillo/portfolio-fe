import { ThemeProvider } from "styled-components";
import { light, dark } from "../../styles/themes";
import AppContext, { useAppContext } from "../../context/AppContext";

function MainApp({ children }) {
  const { theme } = useAppContext();

  return <ThemeProvider theme={theme ? light : dark}>{children}</ThemeProvider>;
}

export default MainApp;
