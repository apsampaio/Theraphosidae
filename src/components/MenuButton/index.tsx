import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import style from "./style";

interface MenuButton {
  title: string;
  description: string;
  navigateTo: string;
  navigation: Navigation;
}

interface Navigation {
  navigate: (screen: string) => {};
}

const MenuButton: React.FC<MenuButton> = ({
  title,
  description,
  navigateTo,
  navigation,
  children,
}) => {
  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => navigation.navigate(navigateTo)}
    >
      {children}
      <View>
        <Text style={style.title}>{title}</Text>
        <Text style={style.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuButton;
