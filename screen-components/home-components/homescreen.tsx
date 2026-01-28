import Circular from "@/components/circularProgress";
import Table from "@/components/table";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import React from "react";
import { Text, View } from "react-native";
import { transactions } from "./expenses";

const HomeScreen = () => {
  return (
    <View
      className="flex-1 bg-[#ffffff] h-full w-full rounded-t-full"
      style={{
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        marginTop: 40,
        paddingTop: 40,
      }}
    >
      <View
        className="w-[357px] flex flex-row justify-between items-center  h-[15vh] bg-[#00D09E] mx-auto px-[20px] rounded-[20px] py-[10px]"
        style={{ width: 357 }}
      >
        <View className="flex items-center w-[30%]">
          <Circular
            size={68}
            progress={0.5}
            fill1={"#0068FF"}
            fill2={"#0068FF"}
            id={"size1"}
            strokeWidth={5}
            track={true}
          >
            <AntDesign name="car" size={34} color="black" />
          </Circular>
          <Text className="text-[14px] font-bold w-[63px] text-center mt-[10px]">
            Savings on Goals
          </Text>
        </View>
        <View className="w-[2px] h-full bg-[#ffffff]" />
        <View className="flex justify-between h-full f;ex-1">
          <View className="flex flex-row items-center gap-x-[10px] flex-1">
            <FontAwesome name="money" size={31} color="black" />
            <View>
              <Text>Revenue last week</Text>
              <Text className="font-bold">$4,000</Text>
            </View>
          </View>
          <View className="w-full h-[2px] bg-[#ffffff]" />

          <View className="flex flex-row items-center gap-x-[10px] flex-1">
            <FontAwesome name="cutlery" size={24} color="black" />
            <View>
              <Text>Revenue last week</Text>
              <Text className="font-bold">$4,000</Text>
            </View>
          </View>
        </View>
      </View>
      <Table data={[...transactions]} />
    </View>
  );
};

// const hscStyles = StyleSheet.create({
//   tabStyle: {
//     borderRadius: 31,
//     paddingLeft: 20,
//     paddingRight: 20,
//   },
// });
export default HomeScreen;
