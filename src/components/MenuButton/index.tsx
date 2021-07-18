import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import style from "./style";
import colors from "../../styles/colors";

type iMenuButton = TouchableOpacityProps & {
  title: string;
  description: string;
  icon: keyof typeof Feather.glyphMap;
  redirect?: boolean;
};

interface Navigation {
  navigate: (screen: string) => {};
}

const MenuButton: React.FC<iMenuButton> = ({
  title,
  description,
  icon,
  redirect = false,
  ...rest
}) => {
  return (
    <TouchableOpacity style={style.container} {...rest}>
      <Feather name={icon} color={colors.title} size={24} style={style.icon} />
      <View>
        <Text style={style.title}>{title}</Text>
        <Text style={style.description}>{description}</Text>
      </View>
      {redirect && (
        <Feather
          name="chevron-right"
          color={colors.icon}
          size={24}
          style={style.chevron}
        />
      )}
    </TouchableOpacity>
  );
};

export { MenuButton };
