import React, { createContext, useEffect, useState, useContext } from "react";
import { AppCxt } from "./AppCxt";

const AppContext = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const changeTheme = async () => setTheme(!theme);
  return (
    <AppCxt.Provider value={{ theme, changeTheme: changeTheme }}>
      {children}
    </AppCxt.Provider>
  );
};

export default AppContext;

export function useAppContext() {
  return useContext(AppCxt);
}
