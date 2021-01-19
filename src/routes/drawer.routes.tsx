import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const App = createStackNavigator();

import colors from "../styles/colors";

import Home from "../pages/Home";
import Tarantula from "../pages/Tarantula";
import History from "../pages/History";

const AppRoutes: React.FC = () => {
  return (
    // <App.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //     cardStyle: { backgroundColor: colors.background },
    //   }}
    // >
    //   <App.Screen name="Home" component={Home} />
    //   <App.Screen name="Tarantula" component={Tarantula} />
    //   <App.Screen name="History" component={History} />
    // </App.Navigator>
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: colors.boxForeground,
      }}
    >
      <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default AppRoutes;
