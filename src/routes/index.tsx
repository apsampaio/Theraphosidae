import React from "react";
import AppRoutes from "./drawer.routes";
import { DrawerProvider } from "../hooks/Drawer";

const Routes: React.FC = () => {
  return (
    <DrawerProvider>
      <AppRoutes />
    </DrawerProvider>
  );
};

export default Routes;
