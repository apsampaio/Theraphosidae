import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

import colors from "../../styles/colors";

import style from "./style";

const Input: React.FC = () => {
  const [value, setValue] = useState("Nome da Tarântula");
  const maxSize = 32;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        style.container,
        {
          borderBottomColor: isFocused ? colors.orange : colors.box,
        },
      ]}
    >
      <TextInput
        style={style.input}
        value={value}
        onChangeText={(text) => setValue(text)}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
      <View
        style={[
          style.counter,
          {
            backgroundColor: isFocused ? colors.orange : colors.box,
          },
        ]}
      >
        <Text style={style.counterText}>32</Text>
      </View>
    </View>
  );
};

export default Input;
