import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import ProgressBar from "../progress-bar";

const BalanceStatement = () => {
  return (
    <>
      <View className="flex flex-row w-[80%] justify-between mx-auto mt-[50px] px-[10px]">
        <View>
          <View className="flex flex-row gap-x-[10px] items-center">
            <View className="border border-[2px] border-black border-solid w-[16px] h-[16px] flex flex-row items-center justify-center rounded-[5px]">
              <Feather name="arrow-up-right" size={12} color="black" />
            </View>
            <Text className="text-[16px]">Total Balance</Text>
          </View>
          <Text className="text-[32px] font-bold text-[#f1fff3]">
            $7,783.00
          </Text>
        </View>
        <View className="w-[2px] h-full bg-[#ffffff]" />
        <View>
          <View className="flex flex-row gap-x-[10px] items-center">
            <View className="border border-[2px] border-black border-solid w-[16px] h-[16px] flex flex-row items-center justify-center rounded-[5px]">
              <Feather name="arrow-up-right" size={12} color="black" />
            </View>
            <Text className="text-[16px]">Total Expenses</Text>
          </View>
          <Text className="text-[32px] font-bold text-[#0068FF]">
            -$1.187.40
          </Text>
        </View>
      </View>
      <View className="w-[80%] mx-auto mt-[20px]">
        <ProgressBar innerText="30%" outerText="$20,000" progress="30%" />
        <View className="flex flex-row items-center gap-x-[10px] mx-auto mt-[10px]">
          <AntDesign name="check-square" size={20} color="black" />
          <Text className="text-[20px]">30% of your expenses. Looks good.</Text>
        </View>
      </View>
    </>
  );
};

export default BalanceStatement;
