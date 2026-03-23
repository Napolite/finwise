import {
  Feather,
  FontAwesome,
  FontAwesome6,
  Ionicons,
  Octicons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
// import {
//   Icon,
//   Label,
//   NativeTabs,
//   VectorIcon,
// } from "expo-router/unstable-native-tabs";
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
              <View className="min-w-full h-full">
                <View
                  className="h-[57px] w-[57px] m-auto flex items-center justify-center rounded-[40%]"
                  style={{
                    backgroundColor: focused ? "#00D09E" : "transparent",
                  }}
                >
                  <Feather name="home" size={25} color="black" />
                </View>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="analysis/index"
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <View className="min-w-full h-full">
                <View
                  className="h-[57px] w-[57px] m-auto flex items-center justify-center rounded-[40%]"
                  style={{
                    backgroundColor: focused ? "#00D09E" : "transparent",
                  }}
                >
                  <FontAwesome name="search-plus" size={25} color="black" />
                </View>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="transactions/index"
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <View className="min-w-full h-full">
                <View
                  className="h-[57px] w-[57px] m-auto flex items-center justify-center rounded-[40%]"
                  style={{
                    backgroundColor: focused ? "#00D09E" : "transparent",
                  }}
                >
                  <FontAwesome6
                    name="arrow-right-arrow-left"
                    size={25}
                    color="black"
                  />
                </View>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="category/index"
          options={{
            tabBarLabel: () => null,

            tabBarIcon: ({ focused }) => (
              <View className="min-w-full h-full">
                <View
                  className="h-[57px] w-[57px] m-auto flex items-center justify-center rounded-[40%]"
                  style={{
                    backgroundColor: focused ? "#00D09E" : "transparent",
                  }}
                >
                  <Octicons name="stack" size={25} color="black" />
                </View>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile/index"
          options={{
            tabBarLabel: () => null,

            tabBarIcon: ({ focused }) => (
              <View className="min-w-full h-full">
                <View
                  className="h-[57px] w-[57px] m-auto flex items-center justify-center rounded-[40%]"
                  style={{
                    backgroundColor: focused ? "#00D09E" : "transparent",
                  }}
                >
                  <Ionicons name="person-outline" size={25} color="black" />
                </View>
              </View>
            ),
          }}
        />
      </Tabs>

      {/* <NativeTabs>
        <NativeTabs.Trigger name="home/index">
          <Label>Home</Label>
          <Icon
            sf="house"
            androidSrc={<VectorIcon family={Feather} name="home" />}
          />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="analysis/index">
          <Label>Analysis</Label>
          <Icon
            // sf="search"
            androidSrc={<VectorIcon family={FontAwesome} name="search-plus" />}
          />
        </NativeTabs.Trigger>
      </NativeTabs> */}
    </>
  );
};

export default TabsLayout;
