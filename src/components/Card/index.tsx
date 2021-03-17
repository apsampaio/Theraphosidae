import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { TarantulaSchema } from "../../data/database/entities/Tarantula";
import Icon from "../../assets/spider-icon.svg";

import style from "./style";

interface CardDTO {
  data: TarantulaSchema;
}

const Card: React.FC<CardDTO> = ({ data }) => {
  const navigation = useNavigation();

  const handleNavigateToProfile = () => {
    navigation.navigate("Tarantula", { data });
  };

  return (
    <TouchableOpacity style={style.container} onPress={handleNavigateToProfile}>
      <View style={style.status}>
        <Icon />
      </View>
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
