import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },

  tabHeader: {
    flexDirection: "row",
    height: 56,
    backgroundColor: colors.boxForeground,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  tabHeaderButton: {
    backgroundColor: colors.boxForeground,
    alignItems: "center",
    justifyContent: "center",
  },

  genderContainer: {
    flexDirection: "row",
    alignItems: "center",

    marginHorizontal: 32,
    marginTop: 32,
  },

  genderTitle: {
    fontSize: 16,
    color: colors.title,
  },

  genderSelector: {
    width: 16,
    height: 16,
    marginLeft: 16,
    borderRadius: 50,

    alignItems: "center",
    justifyContent: "center",
  },

  genderSelectedIcon: {
    height: 10,
    width: 10,
  },
});

export default styles;
