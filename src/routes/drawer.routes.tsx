import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const App = createStackNavigator();

import colors from "../styles/colors";

import HomeRoutes from "./home.routes";
import MenuRoutes from "./menu.routes";
import TocaRoutes from "./toca.routes";

const AppRoutes: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: colors.boxForeground,
      }}
    >
      <Drawer.Screen name="Início" component={HomeRoutes} />
      <Drawer.Screen name="Menu" component={MenuRoutes} />
      <Drawer.Screen name="Toca das Tarantulas" component={TocaRoutes} />
    </Drawer.Navigator>
  );
};

export default AppRoutes;
