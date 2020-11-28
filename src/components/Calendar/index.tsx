import React, { useState } from "react";

import { Calendar, LocaleConfig } from "react-native-calendars";
import sCalendar from "../../styles/Calendar";

const CalendarComponent: React.FC = () => {
  const [todayDate, setTodayDate] = useState(() => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  });

  const [markedDates, setMarkedDates] = useState(() => {
    const date = new Date();
    //TODO Make the month after style
    const days = ["1", "2", "3", "4", "5", "6", "7"];
    const listDate = days.map(
      (index) => `${date.getFullYear()}-${date.getMonth() + 2}-0${index}`
    );
    const markedObject = {
      [todayDate]: {
        customStyles: {
          container: sCalendar.todayDate,
          text: sCalendar.todayDateText,
        },
      },
    };
    listDate.map((date) =>
      Object.defineProperty(markedObject, date, {
        value: {
          customStyles: {
            container: sCalendar.nextMonth,
            text: sCalendar.nextMonthText,
          },
        },
        writable: false,
      })
    );
    return markedObject;
  });

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

  return (
    <>
      <Calendar
        minDate={handleDate.minDate()}
        maxDate={handleDate.maxDate()}
        markingType={"custom"}
        markedDates={markedDates}
        hideArrows={true}
        disableMonthChange={true}
        theme={{
          "stylesheet.calendar.main": {
            container: sCalendar.container,
            dayContainer: sCalendar.dayContainer,
            week: sCalendar.week,
          },
          "stylesheet.calendar.header": {
            header: sCalendar.header,
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
    </>
  );
};

export default CalendarComponent;
