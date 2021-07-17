import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";

import colors from "../styles/colors";

function BlogScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Blog!</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: colors.title,
        inactiveTintColor: colors.icon,
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: colors.background,
          borderTopColor: colors.purple,
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
      <Tab.Screen name="Blog" component={BlogScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export { Routes };
