import React from "react";
import { View, FlatList, Text } from "react-native";

import TaskCard from "../TaskCard";

import style from "./style";

const TaskList: React.FC = () => {
  return (
    <View>
      <Text style={style.title}>Hoje</Text>
      <FlatList
        horizontal
        data={["1", "2", "3", "4", "5"]}
        renderItem={({ item }) => <TaskCard key={item} />}
        keyExtractor={(item) => item}
        contentContainerStyle={style.taskList}
        ListFooterComponent={() => <View style={style.FooterItem} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TaskList;
