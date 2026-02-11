import Circular from "@/components/circularProgress";
import Table from "@/components/table";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { transactions } from "./expenses";

const HomeScreen = ({ handleScroll, scrollY, setShowQAnalysis }: any) => {
  const [tab, setTab] = useState<String>("d");
  const [nativeHeight, setNativeHeight] = useState(0);

  const viewStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [0, 320],
      [0, -200],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{ translateY }],
    };
  });

  const tableStyle = useAnimatedStyle(() => {
    const animatedHeight = interpolate(
      scrollY.value,
      [0, 320],
      [300, 500],
      Extrapolation.CLAMP,
    );

    return {
      height: animatedHeight,
    };
  });

  const getHeight = (event: any) => {
    const { height } = event.nativeEvent.layout;

    setNativeHeight(height);
  };

  return (
    <Animated.View
      className="flex-0 bg-[#ffffff] h-fit w-full rounded-t-full"
      style={[
        {
          borderTopLeftRadius: 80,
          borderTopRightRadius: 80,
          marginTop: 40,
          paddingTop: 40,
        },
        viewStyle,
      ]}
      onLayout={getHeight}
    >
      <TouchableOpacity onPress={setShowQAnalysis}>
        <View
          className="w-[357px] flex flex-row justify-between items-center  h-[15vh] bg-[#00D09E] mx-auto px-[20px] rounded-[20px] py-[10px]"
          style={[{ width: 357 }]}
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
          <View className="flex justify-between h-full">
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
      </TouchableOpacity>

      <View className="w-[357px] flex flex-row items-center p-[10px] justify-between bg-[#DFF7E2] h-[61px] rounded-[20px] mt-[20px] mx-auto">
        <TouchableOpacity
          className="h-full w-[30%] rounded-[10px] flex flex-row justify-center items-center"
          style={{ backgroundColor: tab === "d" ? "#00d09e" : "transparent" }}
          onPress={() => setTab("d")}
        >
          <Text className="font-bold">Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="h-full w-[30%] rounded-[10px] flex flex-row justify-center items-center"
          style={{ backgroundColor: tab === "w" ? "#00d09e" : "transparent" }}
          onPress={() => setTab("w")}
        >
          <Text className="font-bold">Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="h-full w-[30%] rounded-[10px] flex flex-row justify-center items-center"
          style={{ backgroundColor: tab === "m" ? "#00d09e" : "transparent" }}
          onPress={() => {
            setTab("m");
          }}
        >
          <Text className="font-bold">Monthly</Text>
        </TouchableOpacity>
      </View>
      <Animated.View className="mb-[80px]" style={tableStyle}>
        <Table data={[...transactions]} handleScrollAction={handleScroll} />
      </Animated.View>
    </Animated.View>
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
