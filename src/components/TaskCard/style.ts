import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

const style = StyleSheet.create({
  container: {
    width: 124,
    height: 64,
    borderRadius: 4,
    backgroundColor: colors.box,
    marginLeft: 16,

    alignItems: "center",
    flexDirection: "row",
  },

  status: {
    width: 4,
    height: 40,
    borderRadius: 4,
    marginLeft: 8,
  },

  task: {
    fontSize: 16,
    color: colors.title,
    marginBottom: 8,
  },

  quantity: {
    fontSize: 12,
    color: colors.icon,
  },
});

export default style;
