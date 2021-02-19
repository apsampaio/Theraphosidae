import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { View, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";

import colors from "./styles/colors";

const App: React.FC = () => {
  useEffect(() => {
    Realm.open({}).then((realm) => {
      console.log("Realm is located at: " + realm.path);
    });
  });

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
