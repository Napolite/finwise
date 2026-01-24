import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const TabsLayout = () => {
  return (
    <>
      <SafeAreaView
        style={{ backgroundColor: "#00D09E" }}
        className="bg-[#1a1a1a]"
      />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#DFF7E2",
            borderTopWidth: 0,
            paddingBottom: 6,
            paddingTop: 6,
            height: 60,
          },
        }}
      >
        <Tabs.Screen
          name="home/index"
          options={{
            tabBarLabel: () => null,
            tabBarIcon: () => <Feather name="home" size={25} color="black" />,
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
