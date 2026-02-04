import Header from "@/components/header";
import React from "react";
import { View } from "react-native";

const Profile = () => {
  return (
    <View className="bg-[#00D09E] min-h-full">
      <Header pageTitle="Profile" />
      <View
        className="bg-[#ffffff] min-h-full w-full rounded-t-full"
        style={{
          borderTopLeftRadius: 80,
          borderTopRightRadius: 80,
          marginTop: 40,
          paddingTop: 40,
          paddingBottom: 40,
          height: "100%",
        }}
      >
        <View>
          <Profile />
        </View>
      </View>
    </View>
  );
};

export default Profile;
