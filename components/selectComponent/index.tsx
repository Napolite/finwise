import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

const Select = ({ options }: { options: string[] }) => {
  const [selection, setSelection] = useState("");
  return (
    <View className="w-full">
      <Text>Categories</Text>
      <View className="w-full bg-[#DFF7E2] h-[40px] rounded-[20px] relative flex flex-row items-center">
        <Text className="text-[16px] font-bold px-[10px]">{selection}</Text>
      </View>
      <View className="w-full bg-[#DFF7E2] min-h-[40px] rounded-[20px] absolute top-[80px]">
        {options.map((opt) => (
          <Pressable onPress={() => setSelection(opt)} key={opt}>
            <View className="my-[10px] px-[20px]">
              <Text className="text-[16px] font-bold">{opt}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Select;
