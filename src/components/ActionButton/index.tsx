import React from "react";
import { TouchableOpacity, Text } from "react-native";

import style from "./style";

const ActionButton: React.FC = () => {
  return (
    <TouchableOpacity style={style.container}>
      <Text>Hello!</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
