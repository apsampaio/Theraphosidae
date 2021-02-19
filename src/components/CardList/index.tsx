import React, { useCallback } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import TarantulaSchema from "../../database/schemas/TarantulaSchema";

import getRealm from "../../database";

import Card from "../../components/Card";
import style from "./style";

const cardListData = ["1", "2", "3", "4", "5"];

const CardList: React.FC = () => {
  const handleCreateNewTarantula = useCallback(async () => {
    const realm = await getRealm();
    const [lastOne] = realm
      .objects<TarantulaSchema>("Tarantula")
      .sorted("id", true);
    console.log(lastOne);

    // const emptyData = {
    //   id,
    //   name: "",
    //   gender: "U",
    //   species: "",
    //   notes: "",
    //   feeding_cicle: "Semanas",
    //   feeding_day: 1,
    //   watering_cicle: "Semanas",
    //   watering_day: 1,
    //   cleaning_cicle: "Meses",
    //   cleaning_day: 1,
    // };
    // realm.write(() => {
    //   realm.create("Tarantula", emptyData);
    // });
  }, []);

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>Suas tarântulas</Text>
        <TouchableOpacity onPress={handleCreateNewTarantula}>
          <Text style={style.button}>Adicionar Tarântula +</Text>
        </TouchableOpacity>
      </View>
      {cardListData.map((card) => (
        <Card key={card} />
      ))}
    </View>
  );
};

export default CardList;
