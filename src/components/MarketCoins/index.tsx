import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
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
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.coinTitle}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.value}>${valueUSD}</Text>
        <Text style={{ color: ValueChange > 0 ? "#3a960c" : "#f10000" }}>
          {ValueChange > 0 && "+"}
          {ValueChange}
        </Text>
      </View>
    </View>
  );
};

export default MarketCoin;
