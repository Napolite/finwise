import { View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const AnalysisGraph = () => {
  const barData = [
    {
      value: 40,
      label: "Mon",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#00D09E",
    },
    { value: 20, frontColor: "#0068FF" },
    {
      value: 50,
      label: "Tue",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#00D09E",
    },
    { value: 40, frontColor: "#0068FF" },
    {
      value: 75,
      label: "Wed",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#00D09E",
    },
    { value: 25, frontColor: "#0068FF" },
    {
      value: 30,
      label: "Thu",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#00D09E",
    },
    { value: 20, frontColor: "#0068FF" },
    {
      value: 60,
      label: "Fri",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#00D09E",
    },
    { value: 40, frontColor: "#0068FF" },
  ];
  return (
    <View className="w-full h-full">
      <BarChart
        barWidth={6}
        noOfSections={3}
        barBorderRadius={4}
        frontColor="lightgray"
        data={barData}
        yAxisThickness={0}
        xAxisThickness={0}
        roundedTop
        roundedBottom
        spacing={50}
        stepHeight={50}
        // height={8}
      />
    </View>
  );
};

export default AnalysisGraph;
