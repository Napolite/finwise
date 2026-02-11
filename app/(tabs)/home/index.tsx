import BalanceStatement from "@/components/balanceStatement";
import HomeScreen from "@/screen-components/home-components/homescreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Text, View } from "react-native";
import {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

const Home = () => {
  const scrollY = useSharedValue(0);

  const handTableScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;

    // console.log("scrollY value", scrollY);
  });
  return (
    <View className="bg-[#00D09E] min-h-full">
      <View>
        <View className="w-full justify-between bg-transparent flex flex-row h-[45px] px-[30px] items-center">
          <View>
            <Text className="text-[#052224] text-[18px] font-semibold">
              Hi, Welcome back
            </Text>
            <Text>Good Morning</Text>
          </View>
          <View className="bg-[#ffffff] w-[30px] h-[30px] rounded-full flex place-items-center items-center justify-center">
            <AntDesign name="bell" size={18} color="black" />
          </View>
        </View>
      </View>
      <BalanceStatement />
      <HomeScreen handleScroll={handTableScroll} scrollY={scrollY} />
    </View>
  );
};

export default Home;
