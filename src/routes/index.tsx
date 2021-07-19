import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { Feather } from "@expo/vector-icons";
import colors from "../styles/colors";

import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { Blog } from "../pages/Blog";
import { Tarantula } from "../pages/Tarantula";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTabs: React.FC = () => {
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

const Routes: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Tarantula" component={Tarantula} />
    </Stack.Navigator>
  );
};

export { Routes };
