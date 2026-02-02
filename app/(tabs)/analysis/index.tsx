import BalanceStatement from "@/components/balanceStatement";
import Header from "@/components/header";
import AnalysisGraph from "@/screen-components/analysis-component/analysis-graph";
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
        <View className="w-[80%] max-h-[297px] bg-[#DFF7E2] mx-auto mt-[30px] rounded-[30px] p-[10px]">
          <View className="mb-[20px]">
            <Text className="text-[16px]">Income & Expenses</Text>
          </View>
          <AnalysisGraph />
        </View>
      </View>
    </View>
  );
};

export default Analysis;
