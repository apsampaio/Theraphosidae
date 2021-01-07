import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import style from "./style";

const Card: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToProfile = () => {
    navigation.navigate("Tarantula");
  };

  return (
    <TouchableOpacity style={style.container} onPress={handleNavigateToProfile}>
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
