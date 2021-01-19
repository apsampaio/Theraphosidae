import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const App = createStackNavigator();

import colors from "../styles/colors";

import Toca from "../pages/Toca";

const TocaRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.background },
        animationEnabled: true,
      }}
    >
      <App.Screen name="Toca" component={Toca} />
    </App.Navigator>
  );
};

export default TocaRoutes;
