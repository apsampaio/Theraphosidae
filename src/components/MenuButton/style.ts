import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    height: 56,

    borderBottomColor: colors.icon,
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginTop: 24,
  },

  icon: {
    paddingRight: 16,
  },

  title: {
    fontSize: 18,
    color: colors.title,
  },

  description: {
    fontSize: 14,
    color: colors.icon,
  },

  chevron: {
    marginLeft: "auto",
  },
});

export default style;
