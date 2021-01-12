import React, { useState, useRef } from "react";
import ReactNativePickerModule from "react-native-picker-module";

interface PickerDTO {
  items: string[];
  title: string;
}

const Picker: React.FC<PickerDTO> = ({ items, title }) => {
  const pickerRef = useRef<ReactNativePickerModule>(null);
  const [value, setValue] = useState("");
  return (
    <>
      <ReactNativePickerModule
        pickerRef={pickerRef}
        value={value}
        title={title}
        items={items}
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

export default Picker;
