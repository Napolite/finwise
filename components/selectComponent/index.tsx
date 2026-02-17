import { DateTimePicker } from "@expo/ui/jetpack-compose";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

const Select = ({
  options,
  type = "calendar",
  selectedDate,
  label,
}: {
  label?: string;
  options?: string[];
  type?: "dropdown" | "calendar";
  selectedDate?: string | Date;
}) => {
  const [selection, setSelection] = useState<string | Date>();

  const [dropOpen, setDropOpen] = useState(false);

  const renderDropdown = () => {
    return (
      <View className="w-full bg-[#DFF7E2] min-h-[40px] rounded-[20px] absolute top-[80px]">
        {options?.map((opt) => (
          <Pressable onPress={() => setSelection(opt)} key={opt}>
            <View className="my-[10px] px-[20px]">
              <Text className="text-[16px] font-bold">{opt}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    );
  };

  const renderCalendar = () => {
    return (
      <View className="w-full bg-[#DFF7E2] min-h-[40px] rounded-[20px] absolute top-[80px]">
        <DateTimePicker
          onDateSelected={(date) => {
            setSelection(date);
          }}
          displayedComponents="date"
          initialDate={
            selectedDate
              ? new Date(selectedDate).toISOString()
              : Date.now().toString()
          }
          variant="picker"
        />
      </View>
    );
  };

  const renderOpt = () => {
    if (type === "calendar") return renderCalendar();
    else return renderDropdown();
  };
  return (
    <View className="w-full">
      <Text>Categories</Text>
      <Pressable onPress={() => setDropOpen(!dropOpen)}>
        <View className="w-full bg-[#DFF7E2] h-[40px] rounded-[20px] relative flex flex-row items-center">
          <Text className="text-[16px] font-bold px-[20px]">
            {type === "calendar"
              ? selection?.toLocaleString()
              : (selection as string)}
          </Text>
        </View>
      </Pressable>
      {dropOpen && renderOpt()}
    </View>
  );
};

export default Select;
