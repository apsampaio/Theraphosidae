import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import SpiderIcon from "../../assets/spider.png";

import { Feather } from "@expo/vector-icons";

import style from "./style";
import colors from "../../styles/colors";

interface CardDTO {
  data: any;
}

const Card: React.FC<CardDTO> = ({ data }) => {
  const navigation = useNavigation();

  const handleNavigateToProfile = () => {
    console.log("navigate to tarantula profile");
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
      <TouchableOpacity
        style={style.moreIcon}
        onPress={() => console.log("More")}
      >
        <Feather name="more-vertical" size={24} color={colors.icon} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export { Card };
