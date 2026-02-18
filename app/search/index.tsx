import Header from "@/components/header";
import RadioButton from "@/components/RadioButton";
import Select from "@/components/selectComponent";
import { categories } from "@/constants/categorylist";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

const SearchCalendar = () => {
  const router = useRouter();
  const [buttons, setButtons] = useState<Record<string, boolean>>({
    income: false,
    expenses: false,
  });
  return (
    <View>
      <Header pageTitle={"Search"} backAction={() => router.back()} />
      <TextInput
        className="w-[90%] bg-[#ffffff] mx-auto rounded-[20px] mt-[30px] px-[20px]"
        placeholder="Search..."
        placeholderClassName="text-[14px] font-bold text-[red]"
      />
      <View
        className="flex-0 bg-[#ffffff] min-h-full w-full rounded-t-full"
        style={{
          borderTopLeftRadius: 80,
          borderTopRightRadius: 80,
          marginTop: 40,
          paddingTop: 40,
        }}
      >
        <View className="w-[80%] mx-auto">
          <Select
            type="dropdown"
            options={categories.map((cat) => cat?.name)}
            label="Catogories"
            key={"cat1"}
          />
        </View>
        <View className="w-[80%] mx-auto mt-[50px]">
          <Select
            type="calendar"
            selectedDate={""}
            label="Date"
            key={"date1"}
          />
        </View>
        <View className="mt-[50px] w-[80%] mx-auto">
          <Text className="text-[16px] font-bold mb-[10px]">Report</Text>
          <View className="flex flex-row gap-x-[40px]">
            <RadioButton
              label={"Income"}
              selected={buttons?.income}
              onPress={() => {
                setButtons({
                  expenses: false,
                  income: true,
                });
              }}
            />
            <RadioButton
              label={"Expenses"}
              selected={buttons?.expenses}
              onPress={() => {
                setButtons({
                  income: false,
                  expenses: true,
                });
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchCalendar;
