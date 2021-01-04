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

  title: {
    fontSize: 16,
    color: colors.title,
  },

  genderContainer: {
    flexDirection: "row",
    alignItems: "center",

    marginHorizontal: 16,
    marginTop: 32,
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

  selectorContainer: {
    flexDirection: "row",
    alignItems: "center",

    marginHorizontal: 16,
    marginTop: 24,
  },

  selector: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.box,
    borderRadius: 4,
  },
});

export default styles;
