import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import style from "./style";

const Card: React.FC = () => {
  return (
    <TouchableOpacity style={style.container}>
      <View style={style.status}></View>
      <View>
        <View style={style.header}>
          <Text style={style.name}>Minha Tarântula Favorita</Text>
          <View style={style.gender} />
        </View>
        <Text style={style.species}>Acanthoscurria Geniculata</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
