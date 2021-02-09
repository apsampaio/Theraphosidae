import React, { createContext, useCallback, useState, useContext } from "react";

interface DrawerContextData {
  drawerState: boolean;
  lockDrawer(): void;
  releaseDrawer(): void;
}

const DrawerContext = createContext<DrawerContextData>({} as DrawerContextData);

export const DrawerProvider: React.FC = ({ children }) => {
  const [drawerState, setDrawerState] = useState(true);

  const lockDrawer = useCallback(() => {
    setDrawerState(false);
  }, []);
  const releaseDrawer = useCallback(() => {
    setDrawerState(true);
  }, []);

  return (
    <DrawerContext.Provider value={{ drawerState, releaseDrawer, lockDrawer }}>
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
