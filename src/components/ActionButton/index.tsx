import React from "react";
import { TouchableOpacity, Text } from "react-native";

import style from "./style";

import Hungry from "../../assets/hungry.svg";

const ActionButton: React.FC = () => {
  return (
    <TouchableOpacity style={style.container}>
      <Hungry width={32} height={32} />
      <Text style={style.title}>Alimentar</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
