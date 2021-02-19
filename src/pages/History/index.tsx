import React from "react";

import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import HistoryCard from "../../components/HistoryCard";

import { useNavigation } from "@react-navigation/native";

import ArrowLeft from "../../assets/arrow-left.svg";
import Trash from "../../assets/trash.svg";

import style from "./style";

const History: React.FC = () => {
  const data = [
    {
      id: 0,
      title: "Alimentou",
      date: "10.01.2021",
    },
    {
      id: 1,
      title: "Irrigou",
      date: "10.01.2021",
    },
    {
      id: 2,
      title: "Limpou",
      date: "10.01.2021",
    },
    {
      id: 3,
      title: "Iniciou Ecdise",
      date: "10.01.2021",
    },
    {
      id: 4,
      title: "Finalizou Ecdise",
      date: "10.01.2021",
    },
  ];

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
      {data.map(({ date, title, id }, index) => (
        <HistoryCard id={id} key={index} date={date} title={title} />
      ))}
    </ScrollView>
  );
};

export default History;
