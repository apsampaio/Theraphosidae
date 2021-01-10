import React from "react";

import { View, Text } from "react-native";

import Hungry from "../../assets/hungry.svg";
import Water from "../../assets/water.svg";
import Clear from "../../assets/clear.svg";
import PreMolt from "../../assets/pre-molt.svg";
import SpiderIcon from "../../assets/spider-icon.svg";

import style from "./style";
import colors from "../../styles/colors";

interface HistoryCardDTO {
  title: string;
  date: string;
  id: number;
}

const HistoryCard: React.FC<HistoryCardDTO> = ({ title, date, id }) => {
  const renderIcon = (id: number) => {
    if (id === 0) return <Hungry width={24} height={24} style={style.icon} />;
    if (id === 1) return <Water width={24} height={24} style={style.icon} />;
    if (id === 2) return <Clear width={24} height={24} style={style.icon} />;
    if (id === 3) return <PreMolt width={24} height={24} style={style.icon} />;
    if (id === 4)
      return <SpiderIcon width={24} height={24} style={style.icon} />;
  };

  return (
    <View style={style.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {renderIcon(id)}
        <Text style={style.description}>{title}</Text>
      </View>
      <Text style={style.date}>{date}</Text>
    </View>
  );
};

export default HistoryCard;
