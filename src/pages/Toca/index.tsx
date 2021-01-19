import React from "react";

import { ScrollView } from "react-native";
import style from "./style";

const Toca: React.FC = () => {
  return (
    <ScrollView
      style={style.container}
      showsVerticalScrollIndicator={false}
    ></ScrollView>
  );
};

export default Toca;
