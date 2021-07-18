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

  banner: {
    width: "100%",
    height: 234,
  },

  bannerContent: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    marginBottom: 30,
  },

  bannerTitle: {
    fontSize: 28,
    color: colors.title,
    fontWeight: "700",
  },

  bannerSubtitle: {
    fontSize: 13,
    color: colors.title,
    lineHeight: 21,
  },
});

export default style;
