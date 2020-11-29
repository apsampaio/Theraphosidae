import React from "react";

import { FlatList, View, Text } from "react-native";
import Card from "../../components/Card";

import style from "./style";

const cardListData = ["1", "2", "3", "4", "5"];

const CardList: React.FC = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Suas tarântulas</Text>
      {cardListData.map((card) => (
        <Card key={card} />
      ))}
    </View>
  );
};

export default CardList;
