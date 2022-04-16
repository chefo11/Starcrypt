import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import PercentageChange from "../../components/percentageChange";

const CoinDetailsScreen = () => {
  const [coinData, setCoinData] = useState({
    id: "1",
    name: "Ethereum",
    image:
      "https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-logo-6278329__480.png",
    symbol: "ETH",
    ValueChange24H: -1.4,
    ValueChange1D: 1.8,
    ValueChange7D: 1.4,
    currentPrice: 723.0,
    amount: 2.5,
  });
  const onBuy = () => {
    console.log("buy");
  };
  const onSell = () => {
    console.log("sell");
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.left}>
          <Image style={styles.image} source={{ uri: coinData.image }} />
          <View style={styles.coinTitle}>
            <Text style={styles.name}>{coinData.name}</Text>
            <Text style={styles.symbol}>{coinData.symbol}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <AntDesign name="staro" size={30} color={"#2f95dc"} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.valueContainer}>
          <Text style={styles.label}>Current Price</Text>
          <Text style={styles.value}>{coinData.currentPrice}</Text>
        </View>
        <View style={styles.changeContainer}>
          <View style={styles.valueContainer}>
            <Text style={styles.label}>1 Hour</Text>
            <PercentageChange value={coinData.ValueChange24H} />
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.label}>1 Day</Text>
            <PercentageChange value={coinData.ValueChange1D} />
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.label}>7 Days</Text>
            <PercentageChange value={coinData.ValueChange7D} />
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <Text>Position</Text>
        <Text>
          {coinData.symbol}
          {coinData.amount} (${coinData.currentPrice * coinData.amount})
        </Text>
      </View>
      <View style={[styles.row, { marginTop: "auto" }]}>
        <Pressable
          style={[styles.button, { backgroundColor: "#20b100" }]}
          onPress={onBuy}
        >
          <Text style={styles.buttonText}>Buy</Text>
        </Pressable>
        <Pressable
          style={[styles.button, { backgroundColor: "#ff0000" }]}
          onPress={onSell}
        >
          <Text style={styles.buttonText}>Sell</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CoinDetailsScreen;
