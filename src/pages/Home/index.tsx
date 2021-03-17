import React, { useEffect, useState } from "react";

import { Button, ScrollView } from "react-native";
import style from "./style";

import CalendarComponent from "../../components/Calendar";
import Separator from "../../components/Separator";
import TaskList from "../../components/TaskList";
import CardList from "../../components/CardList";

import PushNotification from "react-native-push-notification";

import { useFocusEffect } from "@react-navigation/native";
import { useDrawer } from "../../hooks/Drawer";

const Home: React.FC = () => {
  const { releaseDrawer, lockDrawer } = useDrawer();

  useFocusEffect(() => {
    releaseDrawer();
    return () => lockDrawer();
  });

  const notificate = () => {
    console.log("Notificate");
    PushNotification.localNotification({
      title: "My Notification Title", // (optional)
      message: "My Notification Message", // (required)
      channelId: "channel-id",
    });
  };

  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
      <Button onPress={notificate} title="teste"></Button>
      <CalendarComponent />
      <Separator />
      <TaskList />
      <Separator />
      <CardList />
    </ScrollView>
  );
};

export default Home;
