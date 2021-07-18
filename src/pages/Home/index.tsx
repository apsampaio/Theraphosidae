import React from "react";

import { View, FlatList } from "react-native";
import style from "./style";

import CalendarComponent from "../../components/Calendar";
import Separator from "../../components/Separator";
import TaskList from "../../components/TaskList";
import CardList from "../../components/CardList";

import { Card } from "../../components/Card";

const Home: React.FC = () => {
  const tarantulas = [
    {
      id: "asd",
      name: "",
      gender: "U",
      species: "",
      notes: "",
      feeding_cicle: "Semanas",
      feeding_day: 1,
      watering_cicle: "Semanas",
      watering_day: 1,
      cleaning_cicle: "Meses",
      cleaning_day: 1,
    },
    {
      id: "asasdasdas",
      name: "",
      gender: "U",
      species: "",
      notes: "",
      feeding_cicle: "Semanas",
      feeding_day: 1,
      watering_cicle: "Semanas",
      watering_day: 1,
      cleaning_cicle: "Meses",
      cleaning_day: 1,
    },
    {
      id: "asaasdasdas",
      name: "",
      gender: "U",
      species: "",
      notes: "",
      feeding_cicle: "Semanas",
      feeding_day: 1,
      watering_cicle: "Semanas",
      watering_day: 1,
      cleaning_cicle: "Meses",
      cleaning_day: 1,
    },
  ];

  return (
    <View style={style.container}>
      <FlatList
        data={tarantulas}
        renderItem={({ item }) => <Card data={item} key={item.id} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <>
            <CalendarComponent />
            <Separator />
            <TaskList />
            <Separator />
          </>
        )}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export { Home };
