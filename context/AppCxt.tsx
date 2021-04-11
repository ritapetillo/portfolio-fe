import React from "react";
type AppContextType = {
  theme?: boolean;
  changeTheme?: () => void;
};

export const AppCxt = React.createContext<AppContextType>({});
