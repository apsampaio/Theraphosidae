import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { View, StatusBar } from "react-native";
import AsyncStorageProvider from "./data/database/providers/AsyncStorageProvider";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";

import colors from "./styles/colors";

const App: React.FC = () => {
  useEffect(() => {
    const initDatabase = async () => {
      const database = new AsyncStorageProvider();
      await database.init({
        keys: ["Tarantulas"],
      });

      console.log("== DATABASE KEYS INITIALIZATION ==");
    };

    initDatabase();
  }, []);
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
