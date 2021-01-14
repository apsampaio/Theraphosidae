import React, { useState, useRef, RefObject } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import ReactNativePickerModule from "react-native-picker-module";

import ArrowLeft from "../../assets/arrow-left.svg";
import List from "../../assets/list.svg";
import Check from "../../assets/check.svg";

import Hungry from "../../assets/hungry.svg";
import Water from "../../assets/water.svg";
import Clear from "../../assets/clear.svg";
import PreMolt from "../../assets/pre-molt.svg";
import SpiderIcon from "../../assets/spider-icon.svg";

import Input from "../../components/Input";
import Separator from "../../components/Separator";
import ActionButton from "../../components/ActionButton";

import colors from "../../styles/colors";
import style from "./style";

import {
  MoltPickerData,
  CicleDayPickerData,
  CiclePickerData,
} from "../../data/PickerData";

const Tarantula: React.FC = () => {
  const navigation = useNavigation();

  // Molt Values
  const moltRef = useRef<ReactNativePickerModule>(null);
  const [molts, setMolts] = useState("0");

  const DaysPickerRef = useRef<ReactNativePickerModule>(null);
  const CiclePickerRef = useRef<ReactNativePickerModule>(null);

  const [feedingDays, setFeedingDays] = useState("1");
  const [feedingCicle, setFeedingCicle] = useState("Dias");

  const [wateringDays, setWateringDays] = useState("1");
  const [wateringCicle, setWateringCicle] = useState("Dias");

  const [cleaningDays, setCleaningDays] = useState("1");
  const [cleaningCicle, setCleaningCicle] = useState("Dias");

  const [selectedPicker, setSelectedPicker] = useState<null | string>(null);

  const [gender, setGender] = useState("U");
  const [notes, setNotes] = useState("");
  const [preMolt, setPreMolt] = useState(false);

  const handleAction = () => {
    console.log("Pressed!");
  };

  const togglePreMolt = () => {
    setPreMolt((state) => {
      return !state;
    });
  };

  const showPicker = (
    ref: RefObject<ReactNativePickerModule>,
    pickerName = "default"
  ) => {
    const node = ref.current;

    if (pickerName === "feed") {
      setSelectedPicker("feed");
    }
    return node?.show();
  };

  return (
    <>
      <ScrollView style={style.container}>
        <View style={style.tabHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("History")}>
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
            style={[
              style.genderSelector,
              { backgroundColor: colors.oceanBlue },
            ]}
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
          <TouchableOpacity
            style={style.selector}
            onPress={() => showPicker(moltRef)}
          >
            <Text style={style.title}>{molts}</Text>
          </TouchableOpacity>
        </View>
        <View style={style.selectorContainer}>
          <Text style={style.selectorTitle}>Ciclo de alimentação</Text>
          <TouchableOpacity
            style={style.selector}
            onPress={() => showPicker(DaysPickerRef)}
          >
            <Text style={style.title}>{feedingDays}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.selector}
            onPress={() => showPicker(CiclePickerRef)}
          >
            <Text style={style.title}>{feedingCicle}</Text>
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
            value={notes}
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
          <ActionButton action={handleAction} color={colors.blue}>
            <Water />
          </ActionButton>
          <ActionButton action={handleAction} color={colors.red}>
            <Clear />
          </ActionButton>
          {!preMolt && (
            <ActionButton action={togglePreMolt} color={colors.yellow}>
              <PreMolt />
            </ActionButton>
          )}
          {preMolt && (
            <ActionButton action={togglePreMolt} color={colors.green}>
              <SpiderIcon />
            </ActionButton>
          )}
        </ScrollView>
      </ScrollView>
      <ReactNativePickerModule
        pickerRef={moltRef}
        value={molts}
        items={MoltPickerData}
        title={"Selecione o numero de ecdises:"}
        selectedColor={colors.orange}
        onValueChange={(value) => setMolts(value)}
      />
      <ReactNativePickerModule
        pickerRef={DaysPickerRef}
        value={feedingDays}
        items={CicleDayPickerData}
        title={"Selecione o dia:"}
        selectedColor={colors.orange}
        onValueChange={(value) => setFeedingDays(value)}
      />
      <ReactNativePickerModule
        pickerRef={CiclePickerRef}
        value={feedingCicle}
        items={CiclePickerData}
        title={"Selecione o ciclo:"}
        selectedColor={colors.orange}
        onValueChange={(value) => setFeedingCicle(value)}
      />
    </>
  );
};

export default Tarantula;
