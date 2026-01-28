import React from "react";
import { View } from "react-native";
import Rows from "./row";

const Table = ({ data }: { data: { [key: string]: any }[] }) => {
  return (
    <View>
      {data?.map((d, index) => (
        <Rows data={d} key={index} />
      ))}
    </View>
  );
};

export default Table;
