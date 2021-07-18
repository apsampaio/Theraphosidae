import React from "react";

import { ScrollView, View, Text } from "react-native";
import style from "./style";

import { MenuButton } from "../../components/MenuButton";

const Menu: React.FC = () => {
  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
      <View style={style.header}>
        <Text style={style.title}>Menu</Text>
      </View>
      <MenuButton
        icon="bell"
        title="Notificações"
        description="Gerenciar notificações do aplicativo"
        onPress={() => {}}
      />
      <MenuButton
        icon="bookmark"
        title="Toca das Tarântulas"
        redirect
        description="Conheça o blog"
        onPress={() => {}}
      />
      <MenuButton
        icon="mail"
        title="Entrar em contato"
        redirect
        description="Entre em contato com o desenvolvedor"
        onPress={() => {}}
      />
      <MenuButton
        icon="heart"
        title="Apoiar"
        description="Apoie o desenvolvedor deste aplicativo"
        redirect
        onPress={() => {}}
      />
      <MenuButton
        icon="star"
        title="Avaliar"
        description="Avalie este aplicativo"
        onPress={() => {}}
      />
    </ScrollView>
  );
};

export { Menu };
