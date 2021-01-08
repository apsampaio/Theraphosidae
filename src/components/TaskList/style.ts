import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const style = StyleSheet.create({
  title: {
    color: colors.title,
    fontSize: 16,
    marginTop: -16,
    marginBottom: 16,
    marginLeft: 16,
  },

  FooterItem: {
    width: 16,
    height: 64,
    backgroundColor: colors.background,
  },
});

export default style;
