import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

const style = StyleSheet.create({
  container: {
    height: 36,
    marginHorizontal: 16,
    marginTop: 32,
    borderBottomColor: colors.icon,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  input: {
    padding: 4,
    fontSize: 16,
    color: colors.title,
    flex: 1,

    paddingRight: 16,
  },

  counter: {
    width: 24,
    height: 20,
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 4,
  },

  counterText: {
    color: colors.title,
    fontSize: 12,
  },
});

export default style;
