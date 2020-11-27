import { StyleSheet } from "react-native";

const sCalendar = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
  },
  dayContainer: {
    backgroundColor: "#4D4B52",
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
    height: 46,
    width: 46,
    borderWidth: 2,
    borderColor: "#9B98A6",
    borderRadius: 3,
  },
});

export default sCalendar;
