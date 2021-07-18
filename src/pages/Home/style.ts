import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

import Constants from "expo-constants";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Constants.statusBarHeight,
  },
});

export default style;
