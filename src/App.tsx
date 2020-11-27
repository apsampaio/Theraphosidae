import React, { useEffect, useState } from "react";

import { View } from "react-native";

import { Calendar, LocaleConfig } from "react-native-calendars";
import sCalendar from "./styles/Calendar";

const App: React.FC = () => {
  const [todayDate, setTodayDate] = useState("");

  useEffect(() => {
    setTodayDate(handleDate.minDate());
  }, []);

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
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
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
        markingType={"custom"}
        markedDates={{
          [todayDate]: {
            customStyles: {
              container: sCalendar.todayDate,
              text: {
                marginBottom: 5,
                color: "#FFF",
              },
            },
          },
        }}
        hideArrows={true}
        disableMonthChange={true}
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
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </View>
  );
};

export default App;
