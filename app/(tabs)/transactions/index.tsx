import Header from "@/components/header";
import Table from "@/components/table";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { transactionsByMonth } from "./transaction";

const Transactions = () => {
  return (
    <View className="bg-[#00D09E] h-full w-full">
      <Header pageTitle="Transactions" />

      {/* header kinkan */}
      <ScrollView className="h-full flex-1 mt-[20px]">
        <View className="bg-[#F1FFF3] w-[90%] flex items-center rounded-[10px] py-[10px] gap-y-[5px] mx-auto">
          <View className="flex  gap-x-[10px] items-center gap-y-[5px]">
            <Text className="text-[16px]">Total Balance</Text>
          </View>
          <Text className="text-[24px] font-bold text-[#000000]">
            $7,783.00
          </Text>
        </View>

        {/* income and expenses */}
        <View className="flex flex-row w-[90%] justify-between mx-auto mt-[20px]">
          <View className="bg-[#F1FFF3] w-[47%] flex items-center rounded-[10px] py-[10px] gap-y-[5px]">
            <View className="flex  gap-x-[10px] items-center gap-y-[5px]">
              <View className="border border-[3px] border-[#00D09E] border-solid w-[25px] h-[25px] flex flex-row items-center justify-center rounded-[5px]">
                <Feather name="arrow-up-right" size={17} color="#00D09E" />
              </View>
              <Text className="text-[16px]">Income</Text>
            </View>
            <Text className="text-[24px] font-bold text-[#000000]">
              $4,120.00
            </Text>
          </View>

          <View className="bg-[#F1FFF3] w-[47%] flex items-center rounded-[10px] py-[10px] gap-y-[5px]">
            <View className="flex w gap-x-[10px] items-center gap-y-[5px]">
              <View className="border border-[3px] border-[#0068FF] border-solid w-[25px] h-[25px] flex flex-row items-center justify-center rounded-[5px]">
                <Feather name="arrow-down-right" size={17} color="#0068FF" />
              </View>
              <Text className="text-[16px]">Expenses</Text>
            </View>
            <Text className="text-[24px] font-bold text-[#0068FF]">
              -$1.187.40
            </Text>
          </View>
        </View>

        <View
          className="bg-[#ffffff] min-h-full w-full rounded-t-full"
          style={{
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
            marginTop: 40,
            paddingTop: 40,
            height: "100%",
          }}
        >
          <View>
            {transactionsByMonth.map((trans, index) => (
              <View className="mb-[20px]">
                <View className="flex w-[80%] mx-auto flex-row justify-between mb-[20px] items-center">
                  <Text className="  text-[18px] font-bold">
                    {trans?.month}
                  </Text>
                  <View className="h-[32px] w-[32px] rounded-[10px] bg-dgreen items-center justify-center flex">
                    <Feather name="calendar" size={20} color="black" />
                  </View>
                </View>
                <Table data={trans?.transactions} key={index} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Transactions;
