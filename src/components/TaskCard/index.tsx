import React from "react";

import style from "./style";

import { Text, View } from "react-native";
import colors from "../../styles/colors";

export interface TaskData {
  task: "Alimentar" | "Irrigar" | "Realojar";
  quantity: number;
  id: number;
}

const TaskCard: React.FC<TaskData> = ({ task, quantity }) => {
  const TaskColor = {
    Alimentar: colors.orange,
    Irrigar: colors.blue,
    Realojar: colors.red,
  };

  return (
    <View style={style.container}>
      <View style={[style.status, { backgroundColor: TaskColor[task] }]} />
      <View style={{ marginLeft: 8 }}>
        <Text style={style.task}>{task}</Text>
        <Text style={style.quantity}>{quantity} Tarântulas</Text>
      </View>
    </View>
  );
};

export default TaskCard;
