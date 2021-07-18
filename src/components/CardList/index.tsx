import React, { useCallback, useEffect, useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

// import Tarantula, {
//   TarantulaSchema,
// } from "../../data/database/entities/Tarantula";

import { Card } from "../../components/Card";
import style from "./style";
import { FlatList } from "react-native-gesture-handler";

const CardList: React.FC = () => {
  const navigation = useNavigation();

  // const handleCreateNewTarantula = useCallback(async () => {
  //   const tarantulaService = new Tarantula();
  //   const tarantulaData = await tarantulaService.create();
  //   navigation.navigate("Tarantula", { data: tarantulaData });
  // }, []);
  const [tarantulas, setTarantulas] = useState<any[]>([
    {
      id: "asas",
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
  ]);

  // useEffect(() => {
  //   const listTarantulas = async () => {
  //     const tarantulaService = new Tarantula();
  //     const data = await tarantulaService.list();
  //     setTarantulas(data);
  //   };

  //   listTarantulas();
  // }, [tarantulas]);

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>Suas Tarântulas</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={style.button}>Adicionar Tarântula +</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tarantulas}
        renderItem={({ item }) => <Card data={item} key={item.id} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 69 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CardList;
