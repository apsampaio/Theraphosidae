import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

import colors from "../../styles/colors";

import style from "./style";

interface InputDTO {
  placeholder: string;
}

const Input: React.FC<InputDTO> = ({ placeholder }) => {
  const maxSize = 32;

  const [value, setValue] = useState("");
  const [counter, setCounter] = useState(() => maxSize - value.length);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (text: string) => {
    if (text.length > 32) return;
    setCounter(maxSize - text.length);
    setValue(text);
  };

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
        onChangeText={handleInputChange}
        placeholder={placeholder}
        placeholderTextColor={colors.box}
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
        <Text style={style.counterText}>{counter}</Text>
      </View>
    </View>
  );
};

export default Input;
