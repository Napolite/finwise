import BalanceStatement from "@/components/balanceStatement";
import Header from "@/components/header";
import Table from "@/components/table";
import AnalysisGraph from "@/screen-components/analysis-component/analysis-graph";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Animated, ScrollView, Text, View } from "react-native";
import { transactions } from "./expenses";

const QuickAnalysis = ({ setShowQAnalysis }: any) => {
  return (
    <ScrollView className="bg-[#00D09E] h-full flex-1">
      <View>
        <Header pageTitle={"Quick Analysis"} backAction={setShowQAnalysis} />
      </View>
      <BalanceStatement />
      <View
        className="flex-1 bg-[#ffffff] min-h-full w-full rounded-t-full"
        style={{
          borderTopLeftRadius: 80,
          borderTopRightRadius: 80,
          marginTop: 40,
          paddingTop: 40,
        }}
      >
        {/* Graoh component */}
        <View className="w-[80%] max-h-[257px] bg-[#DFF7E2] mx-auto mt-[30px] rounded-[30px] py-[10px] px-[20px]">
          <View className="mb-[20px] flex justify-between flex-row items-center">
            <Text className="text-[16px] font-bold">April Expenses</Text>
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
        {/* Table */}
        <Animated.View className="mb-[80px] mt-[50px]">
          <Table data={[...transactions]} handleScrollAction={() => {}} />
        </Animated.View>
      </View>
    </ScrollView>
  );
};

export default QuickAnalysis;
