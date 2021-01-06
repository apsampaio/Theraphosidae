import React from "react";

import { View, Text, Image } from "react-native";

import style from "./style";

const HistoryCard: React.FC = () => {
  return (
    <View style={style.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image style={style.icon} source={require("../../assets/check.png")} />
        <Text style={style.description}>Alimentou</Text>
      </View>
      <Text style={style.date}>19.11.2020</Text>
    </View>
  );
};

export default HistoryCard;
