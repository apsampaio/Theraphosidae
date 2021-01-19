import { StyleSheet, ViewStyle } from "react-native";
import colors from "../styles/colors";

import { DrawerContentOptions } from "@react-navigation/drawer";

export const drawerStyle: ViewStyle = {
  backgroundColor: colors.boxForeground,
};

export const drawerContentStyle: DrawerContentOptions = {
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
};
