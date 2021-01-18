import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const style = StyleSheet.create({
  container: {
    backgroundColor: "#1D1D1F",
  },

  calendarShimmer: {
    height: 370,
    width: width - 32,
    alignSelf: "center",
    borderRadius: 4,
    marginTop: 16,
  },
});

export default style;
