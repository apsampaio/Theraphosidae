import React from "react";

import { ScrollView, View, Text } from "react-native";
import style from "./style";

const Blog: React.FC = () => {
  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
      <View style={style.header}>
        <Text style={style.title}>Toca das Tarântulas</Text>
      </View>
    </ScrollView>
  );
};

export { Blog };
