import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

import { drawerContentStyle, drawerStyle } from "./style";

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
      drawerStyle={drawerStyle}
      drawerContentOptions={drawerContentStyle}
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
