import React, { useEffect, useState } from "react";

import { ScrollView } from "react-native";
import style from "./style";

import CalendarComponent from "../../components/Calendar";
import Separator from "../../components/Separator";
import TaskList from "../../components/TaskList";
import CardList from "../../components/CardList";

import { useFocusEffect } from "@react-navigation/native";
import { useDrawer } from "../../hooks/Drawer";

const Home: React.FC = () => {
  const { releaseDrawer, lockDrawer } = useDrawer();

  useFocusEffect(() => {
    releaseDrawer();
    return () => lockDrawer();
  });

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
