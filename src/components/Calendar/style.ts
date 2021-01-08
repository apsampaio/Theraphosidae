import { StyleSheet, Dimensions } from "react-native";

import colors from "../../styles/colors";

const sCalendar = StyleSheet.create({
  dotContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  dot: {
    width: 4,
    height: 4,
    marginTop: 1,
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 4,
    opacity: 0,
  },

  header: {
    flexDirection: "row",
    marginTop: 6,
    alignItems: "flex-start",
  },

  container: {
    paddingHorizontal: 16,
  },
  dayContainer: {
    backgroundColor: colors.box,
    margin: 1,
    borderRadius: 4,
    height: 48,

    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  week: {
    marginTop: 0,
    marginBottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  todayDate: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    borderColor: colors.purple,
    borderWidth: 2,
    borderRadius: 4,

    width: Dimensions.get("window").width / 7 - 4,
    height: 48,
  },

  todayDateText: {
    marginBottom: 5,
    color: colors.title,
  },
});

export default sCalendar;
