import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import HeartIcon from "../../assets/heart.svg";

import style from "./style";

interface MenuButton {
  title: string;
  description: string;
}

const MenuButton: React.FC<MenuButton> = ({ title, description, children }) => {
  return (
    <TouchableOpacity style={style.container}>
      {children}
      <View>
        <Text style={style.title}>{title}</Text>
        <Text style={style.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuButton;
