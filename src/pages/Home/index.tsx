import React from "react";

import { View } from "react-native";

import CalendarComponent from "../../components/Calendar";
import Separator from "../../components/Separator";

const Home: React.FC = () => {
  return (
    <View
      style={{
        backgroundColor: "#1D1D1F",
        flex: 1,
      }}
    >
      <CalendarComponent />
      <Separator />
    </View>
  );
};

export default Home;
