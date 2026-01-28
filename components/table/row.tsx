import React from "react";
import { View } from "react-native";

const Rows = ({ data }: { data?: { [key: string]: any } }) => {
  console.log("hierachy", data);
  return (
    <View>
      <View></View>
      <View></View>
      <View></View>
    </View>
  );
};

export default Rows;
