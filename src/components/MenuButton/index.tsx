import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import HeartIcon from "../../assets/heart.svg";

import style from "./style";

const MenuButton: React.FC = () => {
  return (
    <TouchableOpacity style={style.container}>
      <HeartIcon />
      <View>
        <Text style={style.title}>Apoiar</Text>
        <Text style={style.description}>
          Apoie o desenvolvedor deste aplicativo
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuButton;
