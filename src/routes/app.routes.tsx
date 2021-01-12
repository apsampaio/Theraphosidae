import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const App = createStackNavigator();

import colors from "../styles/colors";

import Test from "../pages/Test";
import Home from "../pages/Home";
import Tarantula from "../pages/Tarantula";
import History from "../pages/History";

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.background },
      }}
    >
      <App.Screen name="Test" component={Test} />
      <App.Screen name="Home" component={Home} />
      <App.Screen name="Tarantula" component={Tarantula} />
      <App.Screen name="History" component={History} />
    </App.Navigator>
  );
};

export default AppRoutes;
