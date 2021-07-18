import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";
import colors from "../styles/colors";

import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { Blog } from "../pages/Blog";

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: colors.title,
        inactiveTintColor: colors.box,
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: colors.background,
          borderTopColor: colors.title,
          borderTopWidth: StyleSheet.hairlineWidth,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Blog") {
            return <Feather name={"file-text"} size={size} color={color} />;
          } else if (route.name === "Home") {
            return <Feather name={"calendar"} size={size} color={color} />;
          } else {
            return <Feather name={"menu"} size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Blog" component={Blog} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  );
};

export { Routes };
