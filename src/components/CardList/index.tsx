import React, { useCallback } from "react";
import { TouchableOpacity, View, Text } from "react-native";

import Card from "../../components/Card";
import style from "./style";

const cardListData = ["1", "2", "3", "4", "5"];

const CardList: React.FC = () => {
  const handleCreateNewTarantula = useCallback(async () => {}, []);

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
