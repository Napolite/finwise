import React from "react";
import { ScrollView } from "react-native";
import Rows from "./row";

const Table = ({ data }: { data: { [key: string]: any }[] }) => {
  return (
    <ScrollView className="">
      {data?.map((d, index) => (
        <Rows data={d} key={index} />
      ))}
    </ScrollView>
  );
};

export default Table;
