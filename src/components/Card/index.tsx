import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
// import { TarantulaSchema } from "../../data/database/entities/Tarantula";

import SpiderIcon from "../../assets/spider.png";

import style from "./style";

interface CardDTO {
  data: any;
}

const Card: React.FC<CardDTO> = ({ data }) => {
  const navigation = useNavigation();

  const handleNavigateToProfile = () => {
    // navigation.navigate("Tarantula", { data });
  };

  return (
    <TouchableOpacity style={style.container} onPress={handleNavigateToProfile}>
      <View style={style.status}>
        <Image source={SpiderIcon} width={24} height={24} />
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

export { Card };
