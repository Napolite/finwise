import React from "react";
import { StyleSheet, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

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
        className="max-w-[357px] max-h-[15vw] bg-[#00D09E] mx-auto"
        style={{ height: 152, width: 357, ...hscStyles?.tabStyle }}
      >
        <CircularProgress value={60} />
      </View>
    </View>
  );
};

const hscStyles = StyleSheet.create({
  tabStyle: {
    borderRadius: 31,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default HomeScreen;
