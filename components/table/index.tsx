import React from "react";
import Animated from "react-native-reanimated";
import Rows from "./row";

const Table = ({
  data,
  handleScrollAction,
}: {
  handleScrollAction?: (argv: any) => void | any;
  data: { [key: string]: any }[];
}) => {
  return (
    <Animated.ScrollView className="" onScroll={handleScrollAction}>
      {data?.map((d, index) => (
        <Rows data={d} key={index} />
      ))}
    </Animated.ScrollView>
  );
};

export default Table;
