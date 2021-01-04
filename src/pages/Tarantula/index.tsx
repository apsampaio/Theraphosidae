import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Input from "../../components/Input";
import colors from "../../styles/colors";
import style from "./style";

const Tarantula: React.FC = () => {
  const [gender, setGender] = useState("U");
  const [notes, setNotes] = useState("");

  return (
    <ScrollView style={style.container}>
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
        <Text style={style.title}>Gênero</Text>
        <TouchableOpacity
          style={[style.genderSelector, { backgroundColor: colors.pink }]}
          onPress={() => setGender("F")}
        >
          {gender === "F" && (
            <Image
              style={style.genderSelectedIcon}
              source={require("../../assets/check.png")}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.genderSelector, { backgroundColor: colors.oceanBlue }]}
          onPress={() => setGender("M")}
        >
          {gender === "M" && (
            <Image
              style={style.genderSelectedIcon}
              source={require("../../assets/check.png")}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.genderSelector, { backgroundColor: colors.purple }]}
          onPress={() => setGender("U")}
        >
          {gender === "U" && (
            <Image
              style={style.genderSelectedIcon}
              source={require("../../assets/check.png")}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={style.selectorContainer}>
        <Text style={style.title}>Ecdises</Text>
        <TouchableOpacity style={style.selector}>
          <Text style={style.title}>5</Text>
        </TouchableOpacity>
      </View>
      <View style={style.selectorContainer}>
        <Text style={style.selectorTitle}>Ciclo de alimentação</Text>
        <TouchableOpacity style={style.selector}>
          <Text style={style.title}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.selector}>
          <Text style={style.title}>Dias</Text>
        </TouchableOpacity>
      </View>
      <View style={style.selectorContainer}>
        <Text style={style.selectorTitle}>Ciclo de irrigação</Text>
        <TouchableOpacity style={style.selector}>
          <Text style={style.title}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.selector}>
          <Text style={style.title}>Dias</Text>
        </TouchableOpacity>
      </View>
      <View style={style.selectorContainer}>
        <Text style={style.selectorTitle}>Ciclo de limpeza</Text>
        <TouchableOpacity style={style.selector}>
          <Text style={style.title}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.selector}>
          <Text style={style.title}>Dias</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.notesTitle}>Anotações</Text>
      <View style={style.notesContainer}>
        <TextInput
          style={style.notesTextArea}
          underlineColorAndroid="transparent"
          placeholder="Escreve suas anotações..."
          placeholderTextColor={colors.icon}
          multiline
          numberOfLines={10}
          onChangeText={(text) => setNotes(text)}
        />
      </View>
    </ScrollView>
  );
};

export default Tarantula;
