import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";

import { format, lastDayOfMonth } from "date-fns";

import colors from "../../styles/colors";
import sCalendar from "./style";

const CalendarComponent: React.FC = () => {
  const [todayDate, setTodayDate] = useState(() => {
    return format(new Date(), "yyyy-MM-dd");
  });

  const [markedDates, setMarkedDates] = useState(() => {
    const feed = {
      key: "feed",
      color: colors.orange,
    };
    const water = {
      key: "water",
      color: colors.blue,
    };
    const rehouse = {
      key: "rehouse",
      color: colors.red,
    };

    const markedObject = {
      [todayDate]: {
        dots: [feed, water, rehouse],
        selected: true,
        selectedColor: colors.boxForeground,
      },
    };
    return markedObject;
  });

  const handleDate = {
    minDate: () => {
      // FIXME To Decice between month or current date
      // return todayDate;
      return format(new Date(), "yyyy-MM-01");
    },
    maxDate: () => {
      return format(lastDayOfMonth(new Date()), "yyyy-MM-dd");
    },
  };

  LocaleConfig.locales["pt"] = {
    today: "Hoje",
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
        markingType={"multi-dot"}
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
          "stylesheet.day.multiDot": {
            dot: sCalendar.dot,
            dotContainer: sCalendar.dotContainer,
            selected: sCalendar.todayDate,
          },

          calendarBackground: colors.background,
          textSectionTitleColor: colors.title,
          todayTextColor: colors.title,
          dayTextColor: colors.title,
          monthTextColor: colors.title,
          textDisabledColor: colors.icon,
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </>
  );
};

export default CalendarComponent;
