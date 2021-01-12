import React from "react";
import { View, FlatList, Text } from "react-native";

import TaskCard, { TaskData } from "../TaskCard";

import style from "./style";

const taskListData: TaskData[] = [
  {
    id: 0,
    task: "Alimentar",
    quantity: 3,
  },
  {
    id: 1,
    task: "Irrigar",
    quantity: 5,
  },
  {
    id: 2,
    task: "Limpar",
    quantity: 1,
  },
];

const TaskList: React.FC = () => {
  return (
    <View>
      <Text style={style.title}>Hoje</Text>
      <FlatList
        horizontal
        data={taskListData}
        renderItem={({ item }) => (
          <TaskCard task={item.task} quantity={item.quantity} id={item.id} />
        )}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={() => <View style={style.FooterItem} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TaskList;
