import React, { useState, useRef, RefObject, useCallback } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { TarantulaSchema } from "../../data/database/entities/Tarantula";

import ArrowLeft from "../../assets/arrow-left.svg";
import List from "../../assets/list.svg";
import Check from "../../assets/check.svg";

import Input from "../../components/Input";
import Separator from "../../components/Separator";
import ActionButton from "../../components/ActionButton";

import colors from "../../styles/colors";
import style from "./style";

interface RouteDTO {
  route: {
    params: {
      data: TarantulaSchema;
    };
  };
}

import {
  MoltPickerData,
  CicleDayPickerData,
  CiclePickerData,
} from "../../data/PickerData";

// TODO PICKER, SQLITE EXPO

const Tarantula: React.FC<RouteDTO> = ({ route }) => {
  const navigation = useNavigation();
  // const { data } = route.params;

  // Molt Values
  // const moltRef = useRef<ReactNativePickerModule>(null);
  const [molts, setMolts] = useState("0");

  // const feedingDaysPickerRef = useRef<ReactNativePickerModule>(null);
  const [feedingDays, setFeedingDays] = useState("1");
  // const feedingCiclePickerRef = useRef<ReactNativePickerModule>(null);
  const [feedingCicle, setFeedingCicle] = useState("Dias");

  // const wateringDaysPickerRef = useRef<ReactNativePickerModule>(null);
  const [wateringDays, setWateringDays] = useState("1");
  // const wateringCiclePickerRef = useRef<ReactNativePickerModule>(null);
  const [wateringCicle, setWateringCicle] = useState("Dias");

  // const cleaningDaysPickerRef = useRef<ReactNativePickerModule>(null);
  const [cleaningDays, setCleaningDays] = useState("1");
  // const cleaningCiclePickerRef = useRef<ReactNativePickerModule>(null);
  const [cleaningCicle, setCleaningCicle] = useState("Dias");

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

  // const {}}(
  //   (ref: RefObject<ReactNativePickerModule>) => {
  //     const node = ref.current;
  //     return node?.show();
  //   },
  //   []
  // );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView style={style.container} keyboardShouldPersistTaps="handled">
          <View style={style.tabHeader}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={style.tabHeaderButton}
            >
              <ArrowLeft />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("History")}
              style={style.tabHeaderButton}
            >
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
            <TouchableOpacity style={style.selector} onPress={() => {}}>
              <Text style={style.title}>{molts}</Text>
            </TouchableOpacity>
          </View>
          <View style={style.selectorContainer}>
            <Text style={style.selectorTitle}>Ciclo de alimentação</Text>
            <TouchableOpacity style={style.selector} onPress={() => {}}>
              <Text style={style.title}>{feedingDays}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.selector} onPress={() => {}}>
              <Text style={style.title}>{feedingCicle}</Text>
            </TouchableOpacity>
          </View>
          <View style={style.selectorContainer}>
            <Text style={style.selectorTitle}>Ciclo de irrigação</Text>
            <TouchableOpacity style={style.selector} onPress={() => {}}>
              <Text style={style.title}>{wateringDays}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.selector} onPress={() => {}}>
              <Text style={style.title}>{wateringCicle}</Text>
            </TouchableOpacity>
          </View>
          <View style={style.selectorContainer}>
            <Text style={style.selectorTitle}>Ciclo de limpeza</Text>
            <TouchableOpacity style={style.selector} onPress={() => {}}>
              <Text style={style.title}>{cleaningDays}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.selector} onPress={() => {}}>
              <Text style={style.title}>{cleaningCicle}</Text>
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
            <ActionButton
              action={handleAction}
              color={colors.orange}
              Icon={require("../../assets/hungry.svg").default}
            />
            <ActionButton
              action={handleAction}
              color={colors.blue}
              Icon={require("../../assets/water.svg").default}
            />
            <ActionButton
              action={handleAction}
              color={colors.red}
              Icon={require("../../assets/clear.svg").default}
            />
            {!preMolt && (
              <ActionButton
                action={togglePreMolt}
                color={colors.yellow}
                Icon={require("../../assets/pre-molt.svg").default}
              />
            )}
            {preMolt && (
              <ActionButton
                action={togglePreMolt}
                color={colors.green}
                Icon={require("../../assets/spider-icon.svg").default}
              />
            )}
          </ScrollView>
        </ScrollView>
      </KeyboardAvoidingView>
      <>
        {/* <ReactNativePickerModule
          pickerRef={moltRef}
          value={molts}
          items={MoltPickerData}
          title={"Selecione o numero de ecdises:"}
          selectedColor={colors.orange}
          onValueChange={setMolts}
        />
        <ReactNativePickerModule
          pickerRef={feedingDaysPickerRef}
          value={feedingDays}
          items={CicleDayPickerData}
          title={"Selecione o dia:"}
          selectedColor={colors.orange}
          onValueChange={setFeedingDays}
        />
        <ReactNativePickerModule
          pickerRef={feedingCiclePickerRef}
          value={feedingCicle}
          items={CiclePickerData}
          title={"Selecione o ciclo:"}
          selectedColor={colors.orange}
          onValueChange={setFeedingCicle}
        />
        <ReactNativePickerModule
          pickerRef={wateringDaysPickerRef}
          value={wateringDays}
          items={CicleDayPickerData}
          title={"Selecione o dia:"}
          selectedColor={colors.orange}
          onValueChange={setWateringDays}
        />
        <ReactNativePickerModule
          pickerRef={wateringCiclePickerRef}
          value={wateringCicle}
          items={CiclePickerData}
          title={"Selecione o ciclo:"}
          selectedColor={colors.orange}
          onValueChange={setWateringCicle}
        />
        <ReactNativePickerModule
          pickerRef={cleaningDaysPickerRef}
          value={cleaningDays}
          items={CicleDayPickerData}
          title={"Selecione o dia:"}
          selectedColor={colors.orange}
          onValueChange={setCleaningDays}
        />
        <ReactNativePickerModule
          pickerRef={cleaningCiclePickerRef}
          value={cleaningCicle}
          items={CiclePickerData}
          title={"Selecione o ciclo:"}
          selectedColor={colors.orange}
          onValueChange={setCleaningCicle}
        /> */}
      </>
    </>
  );
};

export { Tarantula };
