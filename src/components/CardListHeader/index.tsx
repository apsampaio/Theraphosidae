import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

import { Feather } from "@expo/vector-icons";

import style from "./style";
import colors from "../../styles/colors";

const CardListHeader: React.FC = () => {
  return (
    <View style={style.header}>
      <Text style={style.title}>Suas Tarântulas</Text>
      <TouchableOpacity onPress={() => console.log("Create New Card")}>
        <Feather name="plus-square" size={24} color={colors.orange} />
      </TouchableOpacity>
    </View>
  );
};

export { CardListHeader };
