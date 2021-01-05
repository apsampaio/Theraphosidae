import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

import style from "./style";

const ActionButton: React.FC = () => {
  return (
    <TouchableOpacity style={style.container}>
      <Image
        source={require("../../assets/check.png")}
        style={style.icon}
      ></Image>
      <Text style={style.title}>Alimentar</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
