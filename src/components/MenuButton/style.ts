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

  title: {
    fontSize: 18,
    color: colors.title,
    marginLeft: 16,
  },

  description: {
    fontSize: 14,
    color: colors.icon,
    marginLeft: 16,
    marginTop: 4,
  },
});

export default style;
