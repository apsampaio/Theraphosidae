import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Input from "../../components/Input";
import colors from "../../styles/colors";
import style from "./style";

const Tarantula: React.FC = () => {
  return (
    <View style={style.container}>
      <View style={style.tabHeader}>
        <TouchableOpacity>
          <Icon
            style={style.tabHeaderButton}
            name="arrow-left"
            color="#FFFFFF"
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            style={style.tabHeaderButton}
            name="list"
            color="#FFFFFF"
            size={24}
          />
        </TouchableOpacity>
      </View>
      <Input placeholder={"Nome da Tarântula"} />
      <Input placeholder={"Espécie da Tarântula"} />
      <View style={style.genderContainer}>
        <Text style={style.genderTitle}>Gênero</Text>
        <TouchableOpacity
          style={[style.genderSelector, { backgroundColor: colors.pink }]}
        >
          <Image
            style={style.genderSelectedIcon}
            source={require("../../assets/check.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.genderSelector, { backgroundColor: colors.oceanBlue }]}
        >
          <Image
            style={style.genderSelectedIcon}
            source={require("../../assets/check.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.genderSelector, { backgroundColor: colors.purple }]}
        >
          <Image
            style={style.genderSelectedIcon}
            source={require("../../assets/check.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tarantula;
