import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

const style = StyleSheet.create({
  container: {
    paddingBottom: 32,
  },

  title: {
    color: colors.title,
    fontSize: 16,
    lineHeight: 19,
    marginBottom: -8,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  button: {
    fontSize: 16,
    color: colors.purple,
  },
});

export default style;
