import { View, Text } from "react-native";
import React from "react";
interface PercentageChangeProps {
  value: number;
  style?: object;
}
const PercentageChange = ({ value, style = {} }: PercentageChangeProps) => {
  return (
    <View>
      <Text style={[style, { color: value > 0 ? "#3a960c" : "#f10000" }]}>
        {value > 0 && "+"}
        {value}%
      </Text>
    </View>
  );
};

export default PercentageChange;
