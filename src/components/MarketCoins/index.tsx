import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import PercentageChange from "../percentageChange";
export interface PortfolioCoinsProps {
  MarketCoins: {
    image: string;
    name: string;
    symbol: string;
    ValueChange: number;
    valueUSD: number;
  };
}
const MarketCoin = (props: PortfolioCoinsProps) => {
  const {
    MarketCoins: { image, name, symbol, ValueChange, valueUSD },
  } = props;
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("CoinDetails")}
    >
      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.coinTitle}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.value}>${valueUSD}</Text>
        <PercentageChange value={ValueChange} />
      </View>
    </Pressable>
  );
};

export default MarketCoin;
