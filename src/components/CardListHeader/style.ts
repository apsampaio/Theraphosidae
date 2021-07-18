import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

const style = StyleSheet.create({
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
    marginTop: -8,
  },
});

export default style;
