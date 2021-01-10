import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

const style = StyleSheet.create({
  container: {
    height: 56,
    borderWidth: 2,
    borderColor: colors.icon,
    borderRadius: 4,

    marginTop: 16,
    marginHorizontal: 12,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  icon: {
    backgroundColor: colors.orange,
    borderRadius: 50,

    marginLeft: 12,
    marginRight: 8,

    padding: 6,
  },

  description: {
    color: colors.title,
    fontSize: 16,
  },

  date: {
    color: colors.title,
    fontSize: 16,
    marginRight: 16,
  },
});

export default style;
