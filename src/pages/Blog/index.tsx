import React from "react";

import { ScrollView, View, Text, ImageBackground } from "react-native";
import style from "./style";

import BannerImage from "../../assets/banner.png";

const Blog: React.FC = () => {
  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
      <View style={style.header}>
        <Text style={style.title}>Blog</Text>
      </View>
      <ImageBackground source={BannerImage} style={style.banner}>
        <View style={style.bannerContent}>
          <Text style={style.bannerTitle}>Toca das Tarântulas</Text>
          <Text style={style.bannerSubtitle}>
            Venha conhecer e aprender tudo sobre tarântulas.
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export { Blog };
