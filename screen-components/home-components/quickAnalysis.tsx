import Circular from "@/components/circularProgress";
import Header from "@/components/header";
import Table from "@/components/table";
import AnalysisGraph from "@/screen-components/analysis-component/analysis-graph";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Animated, ScrollView, Text, View } from "react-native";

import { transactions } from "./expenses";

const QuickAnalysis = ({ setShowQAnalysis }: any) => {
  return (
    <View className="bg-[#00D09E] h-full flex-1">
      <View>
        <Header pageTitle={"Quick Analysis"} backAction={setShowQAnalysis} />
      </View>
      <ScrollView>
        <View
          className="w-[90%] flex flex-row justify-between items-center  h-[15vh] bg-[#00D09E] mx-auto px-[10px] rounded-[20px] py-[10px] mt-[50px]"
          style={[{ width: 357 }]}
        >
          <View className="flex items-center w-[30%]">
            <Circular
              size={95}
              progress={0.5}
              fill1={"#0068FF"}
              fill2={"#0068FF"}
              id={"size1"}
              strokeWidth={5}
              track={true}
            >
              <AntDesign name="car" size={52} color="black" />
            </Circular>
            <Text className="text-[14px] font-bold w-[63px] text-center mt-[10px]">
              Savings on Goals
            </Text>
          </View>
          <View className="w-[2px] h-full bg-[#ffffff]" />
          <View className="flex justify-between h-full w-[60%] items-center">
            <View className="flex flex-row items-center gap-x-[20px] flex-1">
              <FontAwesome name="money" size={34} color="black" />
              <View>
                <Text>Revenue last week</Text>
                <Text className="font-bold text-[16.8px]">$4,000</Text>
              </View>
            </View>
            <View className="w-full h-[2px] bg-[#ffffff]" />

            <View className="flex flex-row items-center gap-x-[20px] flex-1">
              <FontAwesome name="cutlery" size={27} color="black" />
              <View>
                <Text>Revenue last week</Text>
                <Text className="font-bold text-[16.8px]">$4,000</Text>
              </View>
            </View>
          </View>
        </View>
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
    </View>
  );
};

export default QuickAnalysis;
