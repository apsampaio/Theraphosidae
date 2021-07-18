import "react-native-gesture-handler";

import React, { useEffect } from "react";
import { View, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";

import colors from "./src/styles/colors";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View
        style={{ flex: 1, backgroundColor: colors.background, paddingTop: 24 }}
      >
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
