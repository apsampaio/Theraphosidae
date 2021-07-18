import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

import { Feather } from "@expo/vector-icons";

import style from "./style";
import colors from "../../styles/colors";

const CardListHeader: React.FC = () => {
  return (
    <View style={style.header}>
      <Text style={style.title}>Suas Tarântulas</Text>
      <TouchableOpacity onPress={() => {}}>
        <Feather name="plus-square" size={24} color={colors.title} />
      </TouchableOpacity>
    </View>
  );
};

export { CardListHeader };
