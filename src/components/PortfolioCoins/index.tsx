import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
export interface PortfolioCoinsProps {
  PortfolioCoins: {
    image: string;
    name: string;
    symbol: string;
    amount: number;
    valueUSD: number;
  };
}
const PortfolioCoin = (props: PortfolioCoinsProps) => {
  const {
    PortfolioCoins: { image, name, symbol, amount, valueUSD },
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
        <Text style={styles.amount}>
          {symbol} {amount}
        </Text>
      </View>
    </Pressable>
  );
};

export default PortfolioCoin;
