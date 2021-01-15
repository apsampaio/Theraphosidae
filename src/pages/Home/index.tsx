import React, { useEffect, useState } from "react";

import { ScrollView } from "react-native";

import style from "./style";

import CalendarComponent from "../../components/Calendar";
import Separator from "../../components/Separator";
import TaskList from "../../components/TaskList";
import CardList from "../../components/CardList";

import ShimmerCalendar from "../../components/Shimmer/ShimmerCalendar";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
      <CalendarComponent />
      <ShimmerCalendar />
      <Separator />
      <TaskList />
      <Separator />
      <CardList />
    </ScrollView>
  );
};

export default Home;
