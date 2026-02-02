import BalanceStatement from "@/components/balanceStatement";
import Header from "@/components/header";
import AnalysisGraph from "@/screen-components/analysis-component/analysis-graph";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Analysis = () => {
  const [tab, setTab] = useState("d");
  return (
    <View className="bg-[#00D09E] min-h-full">
      <View>
        <Header pageTitle={"Analysis"} />
      </View>
      <BalanceStatement />
      <View
        className="flex-1 bg-[#ffffff] h-full w-full rounded-t-full"
        style={{
          borderTopLeftRadius: 80,
          borderTopRightRadius: 80,
          marginTop: 40,
          paddingTop: 40,
        }}
      >
        <View className="w-[80%] flex flex-row items-center p-[10px] justify-between bg-[#DFF7E2] h-[61px] rounded-[20px] mt-[20px] mx-auto">
          <TouchableOpacity
            className="h-full w-[23%] rounded-[10px] flex flex-row justify-center items-center"
            style={{ backgroundColor: tab === "d" ? "#00d09e" : "transparent" }}
            onPress={() => setTab("d")}
          >
            <Text className="font-bold">Daily</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="h-full w-[23%] rounded-[10px] flex flex-row justify-center items-center"
            style={{ backgroundColor: tab === "w" ? "#00d09e" : "transparent" }}
            onPress={() => setTab("w")}
          >
            <Text className="font-bold">Weekly</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="h-full w-[23%] rounded-[10px] flex flex-row justify-center items-center"
            style={{ backgroundColor: tab === "m" ? "#00d09e" : "transparent" }}
            onPress={() => {
              setTab("m");
            }}
          >
            <Text className="font-bold">Monthly</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="h-full w-[23%] rounded-[10px] flex flex-row justify-center items-center"
            style={{ backgroundColor: tab === "y" ? "#00d09e" : "transparent" }}
            onPress={() => {
              setTab("y");
            }}
          >
            <Text className="font-bold">Yearly</Text>
          </TouchableOpacity>
        </View>
        <View className="w-[80%] max-h-[257px] bg-[#DFF7E2] mx-auto mt-[30px] rounded-[30px] py-[10px] px-[20px]">
          <View className="mb-[20px] flex justify-between flex-row items-center">
            <Text className="text-[16px] font-bold">Income & Expenses</Text>
            <View className="flex justify-between items-center flex-row gap-x-[20px]">
              <View className="h-[32px] w-[32px] rounded-[10px] bg-dgreen items-center justify-center flex">
                <Feather name="search" size={20} color="black" />
              </View>
              <View className="h-[32px] w-[32px] rounded-[10px] bg-dgreen items-center justify-center flex">
                <Feather name="calendar" size={20} color="black" />
              </View>
            </View>
          </View>
          <AnalysisGraph />
        </View>
      </View>
    </View>
  );
};

export default Analysis;
