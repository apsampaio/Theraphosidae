import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";

const Drawer = createDrawerNavigator();

import colors from "../styles/colors";

import HomeRoutes from "./home.routes";
import TocaRoutes from "./toca.routes";

import Heart from "../assets/heart.svg";
import BookMark from "../assets/bookmark.svg";
import Mail from "../assets/mail.svg";
import Bell from "../assets/bell.svg";
import Calendar from "../assets/calendar.svg";

const AppRoutes: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: colors.boxForeground,
      }}
      drawerContentOptions={{
        itemStyle: {
          borderBottomColor: colors.icon,
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginTop: 16,
        },
        labelStyle: {
          fontSize: 16,
        },
        activeTintColor: colors.orange,
        activeBackgroundColor: colors.boxForeground,
        inactiveTintColor: colors.title,
      }}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => <Calendar color={color} />,
        }}
        name="Início"
        component={HomeRoutes}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => <BookMark color={color} />,
        }}
        name="Toca das Tarantulas"
        component={TocaRoutes}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => <Bell color={color} />,
        }}
        name="Notificações"
        component={TocaRoutes}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => <Mail color={color} />,
        }}
        name="Entrar em contato"
        component={TocaRoutes}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => <Heart color={color} />,
        }}
        name="Apoiar"
        component={TocaRoutes}
      />
    </Drawer.Navigator>
  );
};

export default AppRoutes;
