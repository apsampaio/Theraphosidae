// import React, { useState, forwardRef } from "react";
// import ReactNativePickerModule from "react-native-picker-module";

// interface PickerDTO {
//   items: string[];
//   title: string;
// }

// // FIXME Wait for issue answers

// const Picker: React.ForwardRefRenderFunction<
//   ReactNativePickerModule,
//   PickerDTO
// > = ({ items, title }, ref) => {
//   const [value, setValue] = useState("");

//   return (
//     <>
//       <ReactNativePickerModule
//         pickerRef={ref}
//         value={value}
//         title={title}
//         items={items}
//         titleStyle={{ color: "white" }}
//         itemStyle={{ color: "white" }}
//         selectedColor="#FC0"
//         confirmButtonEnabledTextStyle={{ color: "white" }}
//         confirmButtonDisabledTextStyle={{ color: "grey" }}
//         cancelButtonTextStyle={{ color: "white" }}
//         confirmButtonStyle={{
//           backgroundColor: "rgba(0,0,0,1)",
//         }}
//         cancelButtonStyle={{
//           backgroundColor: "rgba(0,0,0,1)",
//         }}
//         contentContainerStyle={{
//           backgroundColor: "rgba(0,0,0,1)",
//         }}
//         onCancel={() => {
//           console.log("Cancelled");
//         }}
//         onValueChange={(value) => {
//           console.log("value: ", value);
//           setValue(value);
//         }}
//       />
//     </>
//   );
// };

// export default forwardRef(Picker);
