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
});

export default sCalendar;
