import Header from "@/components/header";
import Select from "@/components/selectComponent";
import { useRouter } from "expo-router";
import React from "react";
import { TextInput, View } from "react-native";

const SearchCalendar = () => {
  const router = useRouter();
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
          <Select options={["hello", "wprld"]} />
        </View>
      </View>
    </View>
  );
};

export default SearchCalendar;
