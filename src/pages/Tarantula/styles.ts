import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },

  TabHeader: {
    flexDirection: "row",
    height: 56,
    backgroundColor: colors.boxForeground,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  TabHeaderButton: {
    backgroundColor: colors.boxForeground,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
