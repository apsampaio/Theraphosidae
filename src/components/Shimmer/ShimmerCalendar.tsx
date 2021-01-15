import React, { useEffect } from "react";
import { StyleSheet, Animated, View, Dimensions, Easing } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import colors from "../../styles/colors";

const { width } = Dimensions.get("screen");
const style = StyleSheet.create({
  container: {
    height: 290,
    width,
  },
});

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);

const ShimmerCalendar: React.FC = () => {
  const animatedValue = new Animated.Value(0);

  const easing = Easing.linear;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing,
        useNativeDriver: true,
      })
    ).start();
  });

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width * 2, width * 2],
  });

  return (
    <View style={style.container}>
      <AnimatedLG
        colors={[colors.box, colors.icon, colors.icon, colors.box]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          ...StyleSheet.absoluteFillObject,
          transform: [{ translateX: translateX }],
        }}
      />
    </View>
  );
};

export default ShimmerCalendar;
