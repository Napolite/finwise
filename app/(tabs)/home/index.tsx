import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View className="bg-[#00D09E] min-h-full">
      <View>
        <View className="w-full justify-between bg-transparent flex flex-row h-[45px] px-[30px] items-center">
          <View>
            <Text className="text-[#052224] text-[20px] font-semibold">
              Hi, Welcome back
            </Text>
            <Text>Good Morning</Text>
          </View>
          <View className="bg-[#ffffff] w-[30px] h-[30px] rounded-full flex place-items-center items-center justify-center">
            <AntDesign name="bell" size={18} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
