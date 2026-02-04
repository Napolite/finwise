import Header from "@/components/header";
import ProfilePic from "@/components/profilepic/profile";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const Profile = () => {
  return (
    <View className="bg-[#00D09E] min-h-full">
      <Header pageTitle="Profile" />
      <View
        className="bg-[#ffffff] min-h-full w-full rounded-t-full"
        style={{
          borderTopLeftRadius: 80,
          borderTopRightRadius: 80,
          marginTop: 100,
          paddingTop: 40,
          paddingBottom: 40,
          height: "100%",
        }}
      >
        <View>
          <ProfilePic />
        </View>
        <View className="w-[80%] mx-auto gap-y-[30px]" style={{ top: -50 }}>
          <View className="flex flex-row items-center gap-x-[20px]">
            <View className="bg-[#0068FF] rounded-[22px] w-[57px] h-[53px] flex items-center justify-center">
              <Ionicons name="person-outline" size={28} color="white" />
            </View>
            <Text className="text-[18px]">Edit Profile</Text>
          </View>
          {/* Security */}
          <View className="flex flex-row items-center gap-x-[20px]">
            <View className="bg-[#0068FF] rounded-[22px] w-[57px] h-[53px] flex items-center justify-center">
              <Ionicons name="lock-closed-outline" size={28} color="white" />
            </View>
            <Text className="text-[18px]">Security</Text>
          </View>

          {/* Settings */}
          <View className="flex flex-row items-center gap-x-[20px]">
            <View className="bg-[#0068FF] rounded-[22px] w-[57px] h-[53px] flex items-center justify-center">
              <Ionicons name="settings-outline" size={28} color="white" />
            </View>
            <Text className="text-[18px]">Settings</Text>
          </View>

          {/* Help */}
          <View className="flex flex-row items-center gap-x-[20px]">
            <View className="bg-[#0068FF] rounded-[22px] w-[57px] h-[53px] flex items-center justify-center">
              <Ionicons name="help-circle-outline" size={28} color="white" />
            </View>
            <Text className="text-[18px]">Help</Text>
          </View>

          {/* Logout */}
          <View className="flex flex-row items-center gap-x-[20px]">
            <View className="bg-red-500 rounded-[22px] w-[57px] h-[53px] flex items-center justify-center">
              <Ionicons name="log-out-outline" size={28} color="white" />
            </View>
            <Text className="text-[18px] text-red-500">Logout</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
