import React from "react";

import { View } from "react-native";

import style from "./style";

import CalendarComponent from "../../components/Calendar";
import Separator from "../../components/Separator";
import TaskList from "../../components/TaskList";

const Home: React.FC = () => {
  return (
    <View style={style.container}>
      <CalendarComponent />
      <Separator />
      <TaskList />
      <Separator />
    </View>
  );
};

export default Home;
