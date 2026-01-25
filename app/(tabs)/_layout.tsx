import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#DFF7E2",
            borderTopWidth: 0,
            paddingBottom: 6,
            paddingTop: 6,
            height: 80,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            position: "absolute",
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
