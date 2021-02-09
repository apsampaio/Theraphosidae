import React, { useEffect, useState } from "react";

import { ScrollView } from "react-native";
import style from "./style";

import CalendarComponent from "../../components/Calendar";
import Separator from "../../components/Separator";
import TaskList from "../../components/TaskList";
import CardList from "../../components/CardList";

const Home: React.FC = () => {
  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
      <CalendarComponent />
      <Separator />
      <TaskList />
      <Separator />
      <CardList />
    </ScrollView>
  );
};

export default Home;
