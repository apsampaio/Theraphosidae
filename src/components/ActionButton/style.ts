import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: colors.box,

    marginLeft: 8,

    flexDirection: "row",
  },

  icon: {
    width: 24,
    height: 24,

    backgroundColor: colors.orange,
    borderRadius: 50,
  },

  title: {
    color: colors.title,
    fontSize: 16,
    marginLeft: 8,
  },
});

export default style;
