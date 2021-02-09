import React, { createContext, useCallback, useState, useContext } from "react";

interface DrawerContextData {
  drawerState: boolean;
  setCurrentPage(pageName: string): void;
}

const DrawerContext = createContext<DrawerContextData>({} as DrawerContextData);

export const DrawerProvider: React.FC = ({ children }) => {
  const [drawerState, setDrawerState] = useState(false);

  const setCurrentPage = useCallback((pageName: string): void => {
    if (pageName === "Home") {
      setDrawerState(true);
    } else {
      setDrawerState(false);
    }
  }, []);

  return (
    <DrawerContext.Provider value={{ drawerState, setCurrentPage }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error("useDrawer must be within an DrawerProvider");
  }

  return context;
};
