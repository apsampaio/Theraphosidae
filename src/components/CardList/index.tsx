import React, { useCallback, useEffect, useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";

import Tarantula, {
  TarantulaSchema,
} from "../../data/database/entities/Tarantula";

import Card from "../../components/Card";
import style from "./style";

const cardListData = ["1", "2", "3", "4", "5"];

const CardList: React.FC = () => {
  const handleCreateNewTarantula = useCallback(async () => {}, []);
  const [tarantulas, setTarantulas] = useState<TarantulaSchema[]>([]);
  const tarantulaService = new Tarantula();

  useEffect(() => {
    const listTarantulas = async () => {
      const data = await tarantulaService.list();
      setTarantulas(data);
    };

    listTarantulas();
  }, []);

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>Suas Tarântulas</Text>
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
