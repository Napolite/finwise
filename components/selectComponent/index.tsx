import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Select = ({
  options,
  type = "dropdown",
  label,
  selectedDate,
}: {
  options?: string[];
  type?: "dropdown" | "calendar";
  label?: string;
  selectedDate?: string | Date;
}) => {
  const [selection, setSelection] = useState("");

  const [_selectedDate, setSelectedDate] = useState<Date | string>(
    selectedDate || Date.now().toLocaleString(),
  );

  const [dropOpen, setDropOpen] = useState(false);

  const renderDropDown = () => {
    return (
      <View
        className="w-full bg-[#DFF7E2] min-h-[40px] rounded-[20px] absolute top-[80px]"
        style={{ zIndex: 5 }}
      >
        {options?.map((opt) => (
          <Pressable
            onPress={() => {
              setSelection(opt);
              setDropOpen(false);
            }}
            key={opt}
          >
            <View className="my-[10px] px-[20px]">
              <Text className="text-[16px] font-bold">{opt}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    );
  };

  const renderDate = () => {
    return (
      <View
        className="w-full bg-[#DFF7E2] min-h-[40px] rounded-[20px] absolute top-[80px]"
        style={{ zIndex: 5 }}
      >
        <DateTimePickerModal
          isVisible={dropOpen && type === "calendar"}
          mode="date"
          onConfirm={(date) => {
            setSelectedDate(date?.toLocaleString());
            setDropOpen(false);
          }}
          onCancel={() => setDropOpen(false)}
        />
      </View>
    );
  };

  const renderOpt = () => {
    if (type === "dropdown") return renderDropDown();
    else return renderDate();
  };

  return (
    <View className="w-full">
      <Text className="text-[16px] font-bold mb-[10px]">{label}</Text>
      <Pressable onPress={() => setDropOpen(!dropOpen)}>
        <View className="w-full bg-[#DFF7E2] h-[50px] rounded-[20px] relative flex flex-row items-center justify-between px-[20px]">
          <Text className="text-[16px] font-bold ">
            {type === "dropdown"
              ? selection
              : _selectedDate.toLocaleString().split(",")[0]}
          </Text>
          {type === "calendar" ? (
            <Feather name="calendar" size={16} color="black" />
          ) : (
            <AntDesign name="caret-down" size={16} color="black" />
          )}
        </View>
      </Pressable>
      {dropOpen && renderOpt()}
    </View>
  );
};

export default Select;
