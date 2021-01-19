import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const App = createStackNavigator();

import colors from "../styles/colors";

import HomeScreenRoutes from "./homescreen.routes";

const AppRoutes: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: colors.boxForeground,
      }}
    >
      <Drawer.Screen name="Início" component={HomeScreenRoutes} />
    </Drawer.Navigator>
  );
};

export default AppRoutes;
