import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import styles from "./styles";

const Tarantula: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.TabHeader}>
        <TouchableOpacity>
          <Icon
            style={styles.TabHeaderButton}
            name="arrow-left"
            color="#FFFFFF"
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            style={styles.TabHeaderButton}
            name="menu"
            color="#FFFFFF"
            size={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tarantula;
