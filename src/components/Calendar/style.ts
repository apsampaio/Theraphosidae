import { StyleSheet } from "react-native";

const sCalendar = StyleSheet.create({
  
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  dot: {
    width: 4,
    height: 4,
    marginTop: 1,
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 4,
    opacity: 0
  },
  
  header: {
    flexDirection: "row",
    marginTop: 6,
    alignItems: "flex-start",
  },

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

  todayDateText: {
    marginBottom: 5,
    color: "#FFF",
  },

  nextMonth: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    width: 48,
    backgroundColor: "#1D1D1F",
    borderRadius: 4,
  },
});

export default sCalendar;
