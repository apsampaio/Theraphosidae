import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import ArrowLeft from "../../assets/arrow-left.svg";
import List from "../../assets/list.svg";
import Check from "../../assets/check.svg";

import Hungry from "../../assets/hungry.svg";

import Input from "../../components/Input";
import Separator from "../../components/Separator";
import ActionButton from "../../components/ActionButton";

import colors from "../../styles/colors";
import style from "./style";

const Tarantula: React.FC = () => {
  const navigation = useNavigation();

  const [gender, setGender] = useState("U");
  const [notes, setNotes] = useState("");

  const handleAction = () => {
    console.log("Pressed!");
  };

  const handleNavigateToHome = () => {
    navigation.goBack();
  };

  const handleNavigateToHistory = () => {
    navigation.navigate("History");
  };

  return (
    <ScrollView style={style.container}>
      <View style={style.tabHeader}>
        <TouchableOpacity onPress={handleNavigateToHome}>
          <ArrowLeft />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigateToHistory}>
          <List />
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
          {gender === "F" && <Check width={10} height={10} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.genderSelector, { backgroundColor: colors.oceanBlue }]}
          onPress={() => setGender("M")}
        >
          {gender === "M" && <Check width={10} height={10} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.genderSelector, { backgroundColor: colors.purple }]}
          onPress={() => setGender("U")}
        >
          {gender === "U" && <Check width={10} height={10} />}
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
      <Separator />
      <ScrollView style={style.buttonList} horizontal>
        <ActionButton action={handleAction} color={colors.orange}>
          <Hungry />
        </ActionButton>
      </ScrollView>
    </ScrollView>
  );
};

export default Tarantula;
