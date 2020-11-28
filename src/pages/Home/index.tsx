import React from "react";

import { View } from "react-native";
import CalendarComponent from "../../components/Calendar";

const Home: React.FC = () => {
  return (
    <View
      style={{
        backgroundColor: "#1D1D1F",
        flex: 1,
      }}
    >
      <CalendarComponent />
    </View>
  );
};

export default Home;
