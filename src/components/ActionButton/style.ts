import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: colors.box,

    marginLeft: 16,

    flexDirection: "row",
  },
});

export default style;
