import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

const ProfilePic = () => {
  return (
    <View
      className=""
      style={{
        // position: "relative",
        top: -100,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        source={require("@/assets/images/ava.png")}
        style={{ width: 117, height: 117 }}
      />
      <Text className="mt-[20px] text-[20px] font-bold">John Smith</Text>
      <View className="flex flex-row">
        <Text className="text-[13px] font-bold">ID:</Text>
        <Text className="text-[13px]">25030024</Text>
      </View>
    </View>
  );
};

export default ProfilePic;
