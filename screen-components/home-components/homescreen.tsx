import Circular from "@/components/circularProgress";
import React from "react";
import { View } from "react-native";

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
        className="w-[357px] h-[15vh] bg-[#00D09E] mx-auto px-[20px] rounded-[20px] py-[10px]"
        style={{ width: 357 }}
      >
        <View>
          <Circular
            size={68}
            progress={0.5}
            fill1={"#0068FF"}
            fill2={"#0068FF"}
            id={"size1"}
            strokeWidth={5}
            track={true}
          ></Circular>
        </View>
      </View>
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
