import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import Icon from "react-native-vector-icons/Feather";

import style from "./style";

const History: React.FC = () => {
  return (
    <View style={style.container}>
      <View style={style.tabHeader}>
        <TouchableOpacity>
          <Icon
            style={style.tabHeaderButton}
            name="arrow-left"
            color="#FFFFFF"
            size={24}
          />
        </TouchableOpacity>
        <Text style={style.tabHeaderTitle}>Histórico</Text>
        <TouchableOpacity>
          <Icon
            style={style.tabHeaderButton}
            name="trash"
            color="#FFFFFF"
            size={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default History;
