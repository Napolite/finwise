import BalanceStatement from "@/components/balanceStatement";
import Circular from "@/components/circularProgress";
import Header from "@/components/header";
import AnalysisGraph from "@/screen-components/analysis-component/analysis-graph";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Analysis = () => {
  const [tab, setTab] = useState("d");
  const router = useRouter();
  return (
    <View className="bg-[#00D09E] h-full flex-1">
      <View>
        <Header pageTitle={"Analysis"} />
      </View>
      <ScrollView>
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
          {/* top tab thingy */}
          <View className="w-[80%] flex flex-row items-center p-[10px] justify-between bg-[#DFF7E2] h-[61px] rounded-[20px] mt-[20px] mx-auto">
            <TouchableOpacity
              className="h-full w-[23%] rounded-[10px] flex flex-row justify-center items-center"
              style={{
                backgroundColor: tab === "d" ? "#00d09e" : "transparent",
              }}
              onPress={() => setTab("d")}
            >
              <Text className="font-bold">Daily</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="h-full w-[23%] rounded-[10px] flex flex-row justify-center items-center"
              style={{
                backgroundColor: tab === "w" ? "#00d09e" : "transparent",
              }}
              onPress={() => setTab("w")}
            >
              <Text className="font-bold">Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="h-full w-[23%] rounded-[10px] flex flex-row justify-center items-center"
              style={{
                backgroundColor: tab === "m" ? "#00d09e" : "transparent",
              }}
              onPress={() => {
                setTab("m");
              }}
            >
              <Text className="font-bold">Monthly</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="h-full w-[23%] rounded-[10px] flex flex-row justify-center items-center"
              style={{
                backgroundColor: tab === "y" ? "#00d09e" : "transparent",
              }}
              onPress={() => {
                setTab("y");
              }}
            >
              <Text className="font-bold">Yearly</Text>
            </TouchableOpacity>
          </View>
          {/* Graoh component */}
          <View className="w-[80%] max-h-[257px] bg-[#DFF7E2] mx-auto mt-[30px] rounded-[30px] py-[10px] px-[20px]">
            <View className="mb-[20px] flex justify-between flex-row items-center">
              <Text className="text-[16px] font-bold">Income & Expenses</Text>
              <View className="flex justify-between items-center flex-row gap-x-[20px]">
                {
                  <Pressable
                    onPress={() => router.navigate("/search-calendar")}
                  >
                    <View className="h-[32px] w-[32px] rounded-[10px] bg-dgreen items-center justify-center flex">
                      <Feather name="search" size={20} color="black" />
                    </View>
                  </Pressable>
                }
                <View className="h-[32px] w-[32px] rounded-[10px] bg-dgreen items-center justify-center flex">
                  <Feather name="calendar" size={20} color="black" />
                </View>
              </View>
            </View>
            <AnalysisGraph />
          </View>

          {/* other side */}

          <View className="flex flex-row w-[70%] justify-between mx-auto mt-[50px] px-[10px]">
            <View>
              <View className="flex  gap-x-[10px] items-center">
                <View className="border border-[3px] border-[#00D09E] border-solid w-[25px] h-[25px] flex flex-row items-center justify-center rounded-[5px]">
                  <Feather name="arrow-up-right" size={17} color="#00D09E" />
                </View>
                <Text className="text-[16px]">Total Balance</Text>
              </View>
              <Text className="text-[24px] font-bold text-[#000000]">
                $7,783.00
              </Text>
            </View>
            <View className="w-[2px] h-full bg-[#ffffff]" />
            <View>
              <View className="flex w gap-x-[10px] items-center">
                <View className="border border-[3px] border-[#0068FF] border-solid w-[25px] h-[25px] flex flex-row items-center justify-center rounded-[5px]">
                  <Feather name="arrow-down-right" size={17} color="#0068FF" />
                </View>
                <Text className="text-[16px]">Total Expenses</Text>
              </View>
              <Text className="text-[24px] font-bold text-[#0068FF]">
                -$1.187.40
              </Text>
            </View>
          </View>

          {/*my targets */}
          <View className="w-[80%] mx-auto mt-[30px]">
            <Text className="text-[18px] font-bold mb-[30px]">My Targets</Text>
            <View className="h-fit w-full flex-1 mb-[100px] flex flex-row justify-between">
              <View className="bg-[#6DB6FE] w-[47%] h-[167px] rounded-[50px] flex items-center justify-center">
                <Circular
                  size={103}
                  progress={0.3}
                  fill1={"#0068FF"}
                  fill2={"#0068FF"}
                  id={"size1"}
                  strokeWidth={5}
                  track={true}
                  trackStroke=""
                >
                  <Text className="text-[#F1FFF3] text-[20px] font-bold">
                    30%
                  </Text>
                </Circular>
                <Text className="text-[#F1FFF3] text-[16px] font-bold mt-[10px]">
                  Travel
                </Text>
              </View>
              <View className="bg-[#6DB6FE] w-[47%] h-[167px] rounded-[50px] flex items-center justify-center">
                <Circular
                  size={103}
                  progress={0.5}
                  fill1={"#0068FF"}
                  fill2={"#0068FF"}
                  id={"size1"}
                  strokeWidth={5}
                  track={true}
                  trackStroke=""
                >
                  <Text className="text-[#F1FFF3] text-[20px] font-bold">
                    50%
                  </Text>
                </Circular>
                <Text className="text-[#F1FFF3] text-[16px] font-bold mt-[10px]">
                  Car
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Analysis;
