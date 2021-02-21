import React, { useCallback, useEffect, useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Tarantula, {
  TarantulaSchema,
} from "../../data/database/entities/Tarantula";

import Card from "../../components/Card";
import style from "./style";

const CardList: React.FC = () => {
  const navigation = useNavigation();

  const handleCreateNewTarantula = useCallback(async () => {
    const tarantulaService = new Tarantula();
    const { id } = await tarantulaService.create();
    navigation.navigate("Tarantula");
  }, []);
  const [tarantulas, setTarantulas] = useState<TarantulaSchema[]>([]);

  useEffect(() => {
    const listTarantulas = async () => {
      const tarantulaService = new Tarantula();
      const data = await tarantulaService.list();
      setTarantulas(data);
    };

    listTarantulas();
  }, [tarantulas]);

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>Suas Tarântulas</Text>
        <TouchableOpacity onPress={handleCreateNewTarantula}>
          <Text style={style.button}>Adicionar Tarântula +</Text>
        </TouchableOpacity>
      </View>
      {tarantulas.map((item) => (
        <Card key={item.id} />
      ))}
    </View>
  );
};

export default CardList;
