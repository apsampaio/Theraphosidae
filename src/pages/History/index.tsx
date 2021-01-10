import React from "react";

import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import HistoryCard from "../../components/HistoryCard";

import { useNavigation } from "@react-navigation/native";

import ArrowLeft from "../../assets/arrow-left.svg";
import Trash from "../../assets/trash.svg";

import style from "./style";

const History: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToTarantula = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={style.container}>
      <View style={style.tabHeader}>
        <TouchableOpacity onPress={handleNavigateToTarantula}>
          <ArrowLeft />
        </TouchableOpacity>
        <Text style={style.tabHeaderTitle}>Histórico</Text>
        <TouchableOpacity>
          <Trash />
        </TouchableOpacity>
      </View>
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </ScrollView>
  );
};

export default History;
