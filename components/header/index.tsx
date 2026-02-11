import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Header = ({
  pageTitle,
  backAction,
}: {
  pageTitle: string;
  backAction?: any;
}) => {
  return (
    <View className="w-full justify-between bg-transparent flex flex-row h-[45px] px-[30px] items-center">
      <Pressable onPress={backAction}>
        <AntDesign name="arrow-left" size={24} color="#ffffff" />
      </Pressable>
      <Text className="text-[#052224] text-[24px] font-semibold">
        {pageTitle}
      </Text>
      <View className="bg-[#ffffff] w-[30px] h-[30px] rounded-full flex place-items-center items-center justify-center">
        <AntDesign name="bell" size={18} color="black" />
      </View>
    </View>
  );
};

export default Header;
