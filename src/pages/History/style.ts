import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  tabHeader: {
    flexDirection: "row",
    height: 56,
    backgroundColor: colors.boxForeground,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  tabHeaderTitle: {
    fontSize: 16,
    color: colors.title,
  },

  tabHeaderButton: {
    backgroundColor: colors.boxForeground,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default style;
