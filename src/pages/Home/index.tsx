import React, { useState } from "react";

import { ScrollView } from "react-native";

import style from "./style";

import CalendarComponent from "../../components/Calendar";
import Separator from "../../components/Separator";
import TaskList from "../../components/TaskList";
import CardList from "../../components/CardList";

import LinearGradient from "react-native-linear-gradient";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  if (loading)
    return (
      <ScrollView>
        <ShimmerPlaceHolder LinearGradient={LinearGradient} />
      </ScrollView>
    );

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
