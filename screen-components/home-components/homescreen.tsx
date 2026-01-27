import React from "react";
import { Text, View } from "react-native";

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
        className="w-[357px] h-[15vw] bg-[#00D09E] mx-auto px-[20px] rounded-[20px]"
        style={{ height: 152, width: 357 }}
      >
        <Text>Helooooooooooooooooo</Text>
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
