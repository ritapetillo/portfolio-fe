import React, { createContext, useEffect, useState, useContext } from "react";
import { AppCxt } from "./AppCxt";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../styles/themes";

const AppContext = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const changeTheme = async () => setTheme(!theme);
  return (
    <AppCxt.Provider value={{ theme, changeTheme: changeTheme }}>
      <ThemeProvider theme={theme ? light : dark}>{children}</ThemeProvider>
    </AppCxt.Provider>
  );
};

export default AppContext;

export function useAppContext() {
  return useContext(AppCxt);
}
