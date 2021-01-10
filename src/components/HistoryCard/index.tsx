import React, { useState, useEffect } from "react";

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
  const [iconColor, setIconColor] = useState("#FFF");

  useEffect(() => {
    if (id === 0) {
      setIconColor(colors.orange);
    }
    if (id === 1) {
      setIconColor(colors.blue);
    }
    if (id === 2) {
      setIconColor(colors.red);
    }
    if (id === 3) {
      setIconColor(colors.yellow);
    }
    if (id === 4) {
      setIconColor(colors.green);
    }
  }, []);

  const renderIcon = () => {
    if (id === 0) {
      return <Hungry width={16} height={16} />;
    }
    if (id === 1) {
      return <Water width={16} height={16} />;
    }
    if (id === 2) {
      return <Clear width={16} height={16} />;
    }
    if (id === 3) {
      return <PreMolt width={16} height={16} />;
    }
    if (id === 4) {
      return <SpiderIcon width={16} height={16} />;
    }
  };

  return (
    <View style={style.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={[style.icon, { backgroundColor: iconColor }]}>
          {renderIcon()}
        </View>
        <Text style={style.description}>{title}</Text>
      </View>
      <Text style={style.date}>{date}</Text>
    </View>
  );
};

export default HistoryCard;
