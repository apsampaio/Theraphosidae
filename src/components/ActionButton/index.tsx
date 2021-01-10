import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Hungry from "../../assets/hungry.svg";

import style from "./style";

interface ActionButtonDTO {
  color: string;
  action(): void;
}

const ActionButton: React.FC<ActionButtonDTO> = ({
  color,
  children,
  action,
}) => {
  const handleAction = () => {
    action();
  };

  return (
    <TouchableOpacity
      style={[style.container, { backgroundColor: color }]}
      onPress={handleAction}
    >
      {children}
    </TouchableOpacity>
  );
};

export default ActionButton;
