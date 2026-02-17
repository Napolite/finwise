import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RadioButton = ({
  label,
  selected,
  onPress,
}: {
  label: string;
  selected: boolean;
  onPress: () => any;
}) => {
  return (
    <TouchableOpacity style={styles.radioButtonWrapper} onPress={onPress}>
      <View
        style={[styles.outerCircle, selected && styles.outerCircleSelected]}
      >
        {selected && <View style={styles.innerCircle} />}
      </View>
      <Text style={styles.radioLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButtonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#00d09e",
    alignItems: "center",
    justifyContent: "center",
  },
  outerCircleSelected: {
    borderColor: "#00d09e", // Change color when selected
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#00d09e",
  },
  radioLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default RadioButton;
