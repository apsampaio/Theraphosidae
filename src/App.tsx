import React from "react";

import { View } from "react-native";

import { Calendar, LocaleConfig } from "react-native-calendars";
import sCalendar from "./styles/Calendar";

const App: React.FC = () => {
  LocaleConfig.locales["pt"] = {
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    dayNamesShort: ["D", "S", "T", "Q", "Q", "S", "S"],
    dayNames: ["D", "S", "T", "Q", "Q", "S", "S"],
  };

  LocaleConfig.defaultLocale = "pt";

  const handleDate = {
    minDate: () => {
      const date = new Date();
      return `${date.getFullYear()}-${date.getMonth()}-01`;
    },
    maxDate: () => {
      const date = new Date();
      return `${date.getFullYear()}-${date.getMonth() + 1}-31`;
    },
  };

  return (
    <View
      style={{
        backgroundColor: "#1D1D1F",
        flex: 1,
      }}
    >
      <Calendar
        minDate={handleDate.minDate()}
        maxDate={handleDate.maxDate()}
        hideArrows={true}
        style={{}}
        theme={{
          "stylesheet.calendar.main": {
            container: sCalendar.container,
            dayContainer: sCalendar.dayContainer,
            week: sCalendar.week,
          },
          calendarBackground: "#1D1D1F",
          textSectionTitleColor: "#FFF",
          todayTextColor: "#FFF",
          dayTextColor: "#FFF",
          monthTextColor: "#FFF",
          textDisabledColor: "#9B98A6",
        }}
      />
    </View>
  );
};

export default App;
