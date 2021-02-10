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
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  button: {
    fontSize: 16,
    color: colors.purple,
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: 4,
    padding: 4,
  },
});

export default style;
