import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

const style = StyleSheet.create({
  container: {
    height: 64,
    marginHorizontal: 16,
    backgroundColor: colors.box,
    borderRadius: 4,

    flexDirection: "row",

    marginTop: 24,
  },

  status: {
    width: 64,
    height: 64,
    borderRadius: 4,
    backgroundColor: colors.green,

    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 8,
    marginLeft: 8,
  },

  name: {
    color: colors.title,
    fontSize: 16,
    lineHeight: 19,
  },

  gender: {
    backgroundColor: colors.oceanBlue,
    width: 8,
    height: 8,
    borderRadius: 8,
    marginLeft: 8,
  },

  species: {
    color: colors.icon,
    fontSize: 14,
    marginTop: 8,
    marginLeft: 8,
  },
});

export default style;
