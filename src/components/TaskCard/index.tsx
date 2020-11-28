import React from "react";

import style from "./style";

import { Text, View } from "react-native";
import colors from "../../styles/colors";

const TaskCard: React.FC = () => {
  return (
    <View style={style.container}>
      <View style={[style.status, { backgroundColor: colors.orange }]} />
      <View style={{ marginLeft: 8 }}>
        <Text style={style.task}>Alimentar</Text>
        <Text style={style.quantity}>4 Tarântulas</Text>
      </View>
    </View>
  );
};

export default TaskCard;
