import React, { useRef, useState } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import ReactNativePickerModule from "react-native-picker-module";

const Test: React.FC = () => {
  const pickerRef = useRef<ReactNativePickerModule>(null);
  const [value, setValue] = useState("");
  const dataset_1 = [
    "1",
    "2",
    "Java",
    "Kotlin",
    "C++",
    "C#",
    "PHP",
    "Kotlin",
    "C++",
    "C#",
    "PHP",
    "C#",
    "PHP",
    "Kotlin",
    "C++",
    "C#",
    "PHP",
  ];
  const dataset_2 = [
    {
      value: 101,
      label: "Javascript",
    },
    {
      value: "golang_101",
      label: "Go",
    },
    {
      value: "kotlin_dsl",
      label: "Kotlin",
    },
    {
      value: "java_101",
      label: "Java",
    },
    {
      value: "cplusplus",
      label: "C++",
    },
    {
      value: "csharp_201",
      label: "C#",
    },
    {
      value: "php_201",
      label: "PHP",
    },
  ];
  return (
    <>
      <SafeAreaView>
        <Button
          title="Select a language"
          onPress={() => {
            const node = pickerRef.current;
            node?.show();
          }}
        />

        <Text>Selected Item Text: {value}</Text>
      </SafeAreaView>
      <ReactNativePickerModule
        pickerRef={pickerRef}
        value={value}
        title={"Select a language"}
        items={dataset_1}
        titleStyle={{ color: "white" }}
        itemStyle={{ color: "white" }}
        selectedColor="#FC0"
        confirmButtonEnabledTextStyle={{ color: "white" }}
        confirmButtonDisabledTextStyle={{ color: "grey" }}
        cancelButtonTextStyle={{ color: "white" }}
        confirmButtonStyle={{
          backgroundColor: "rgba(0,0,0,1)",
        }}
        cancelButtonStyle={{
          backgroundColor: "rgba(0,0,0,1)",
        }}
        contentContainerStyle={{
          backgroundColor: "rgba(0,0,0,1)",
        }}
        onCancel={() => {
          console.log("Cancelled");
        }}
        onValueChange={(value) => {
          console.log("value: ", value);
          setValue(value);
        }}
      />
    </>
  );
};

export default Test;
