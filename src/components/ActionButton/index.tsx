import React from "react";
import { TouchableOpacity } from "react-native";

import style from "./style";

interface ActionButtonDTO {
  color: string;
  action(): void;
  Icon: any;
}

const ActionButton: React.FC<ActionButtonDTO> = ({
  color,
  Icon,
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
      <Icon />
    </TouchableOpacity>
  );
};

export default ActionButton;
