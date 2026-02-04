import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

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
            tabBarIcon: ({ focused }) => (
              <View
                className="bg-[red] h-[57px] w-[57px] m-auto flex items-center justify-center rounded-[40%]"
                style={{ backgroundColor: focused ? "#00D09E" : "transparent" }}
              >
                <Feather name="home" size={25} color="black" />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="analysis/index"
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <View
                className="bg-[red] h-[57px] w-[57px] m-auto flex items-center justify-center rounded-[40%]"
                style={{ backgroundColor: focused ? "#00D09E" : "transparent" }}
              >
                <FontAwesome name="search-plus" size={25} color="black" />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="transactions/index"
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <View
                className="bg-[red] h-[57px] w-[57px] m-auto flex items-center justify-center rounded-[40%]"
                style={{ backgroundColor: focused ? "#00D09E" : "transparent" }}
              >
                <FontAwesome6
                  name="arrow-right-arrow-left"
                  size={25}
                  color="black"
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="category/index"
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <View
                className="bg-[red] h-[57px] w-[57px] m-auto flex items-center justify-center rounded-[40%]"
                style={{ backgroundColor: focused ? "#00D09E" : "transparent" }}
              >
                <FontAwesome6
                  name="arrow-right-arrow-left"
                  size={25}
                  color="black"
                />
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
