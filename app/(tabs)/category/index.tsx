import BalanceStatement from "@/components/balanceStatement";
import Header from "@/components/header";
import { categories } from "@/constants/categorylist";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const Category = () => {
  return (
    <ScrollView className="bg-[#00D09E] h-full flex-1">
      <View>
        <Header pageTitle={"Analysis"} />
      </View>
      <BalanceStatement />
      <View
        className="bg-[#ffffff] min-h-full w-full rounded-t-full"
        style={{
          borderTopLeftRadius: 80,
          borderTopRightRadius: 80,
          marginTop: 40,
          paddingTop: 40,
        }}
      >
        <View className="flex flex-row max-w-[90%] flex-wrap mx-auto justify-between b">
          {categories.map((cat) => (
            <View
              key={cat.name}
              className="w-[32%] h-[150px]  flex items-center justify-center gap-y-[10px] mb-[20px]"
            >
              <View className="bg-[#0068FF] rounded-[30px] w-[105px] h-[98.7px] flex items-center justify-center">
                {cat.icon}
              </View>
              <Text className="text-[16px] font-semibold">{cat.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Category;
