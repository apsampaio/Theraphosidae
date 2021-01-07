import React from "react";

import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import HistoryCard from "../../components/HistoryCard";
import Icon from "react-native-vector-icons/Feather";

import { useNavigation } from "@react-navigation/native";

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
          <Icon
            style={style.tabHeaderButton}
            name="arrow-left"
            color="#FFFFFF"
            size={24}
          />
        </TouchableOpacity>
        <Text style={style.tabHeaderTitle}>Histórico</Text>
        <TouchableOpacity>
          <Icon
            style={style.tabHeaderButton}
            name="trash"
            color="#FFFFFF"
            size={24}
          />
        </TouchableOpacity>
      </View>
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </ScrollView>
  );
};

export default History;
