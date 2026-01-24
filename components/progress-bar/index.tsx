import React from "react";
import { DimensionValue, Text, View } from "react-native";

type ProgressBarProps = {
  innerText: string;
  outerText: string;
  progress: DimensionValue | undefined;
};

const ProgressBar = ({ innerText, outerText, progress }: ProgressBarProps) => {
  return (
    <View className="w-full bg-[#ffffff] h-[27px] rounded-full flex flex-row items-center">
      <View
        style={{ width: progress }}
        className=" bg-[#000000] flex justify-center flex-row items-center h-[27px] rounded-full"
      >
        <Text className="text-[#ffffff]">{innerText}</Text>
      </View>
      <Text className="text-center w-full">{outerText}</Text>
    </View>
  );
};

export default ProgressBar;
