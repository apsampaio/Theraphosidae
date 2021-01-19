import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const App = createStackNavigator();

import colors from "../styles/colors";

import Menu from "../pages/Menu";

const MenuRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.background },
        animationEnabled: true,
      }}
    >
      <App.Screen name="Menu" component={Menu} />
    </App.Navigator>
  );
};

export default MenuRoutes;
