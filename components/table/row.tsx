import React from "react";
import { Text, View } from "react-native";

const Rows = ({ data }: { data: { [key: string]: any } }) => {
  return (
    <View className="flex flex-row justify-between items-center w-[357px] mx-auto mb-[20px]">
      <View className="flex flex-row gap-x-[10px] items-center w-[40%]">
        <View className="bg-[#0068FF] h-[57px] w-[53px] rounded-[20px] flex items-center justify-center">
          {data?.icon}
        </View>
        <View>
          <Text className="text-[16px]">{data?.name?.split("\x20")[0]}</Text>
          <Text className="text-[12px] text-[#0068FF] font-bold">
            {data?.date}
          </Text>
        </View>
      </View>
      <View className="w-[2px] h-full bg-[#00D09E]" />
      <View className="w-[18%]">
        <Text className="text-[16px]">{data?.type}</Text>
      </View>
      <View className="w-[2px] h-full bg-[#00D09E]" />
      <View>
        <Text
          className="text-[16px] font-bold"
          style={{
            color: (data?.amount?.toString() as string)?.includes("-")
              ? "#0068ff"
              : "#000000",
          }}
        >
          ${data?.amount}
        </Text>
      </View>
    </View>
  );
};

export default Rows;
