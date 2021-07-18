import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

import Constants from "expo-constants";

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },

  header: {
    backgroundColor: colors.boxForeground,
    height: 56 + Constants.statusBarHeight,
    width: "100%",

    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.title,
    paddingTop: Constants.statusBarHeight,
  },
});

export default style;
