import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import MarketCoin from "../../components/MarketCoins";
const image = require("../../../assets/images/Saly-20.png");

const PortfolioCoins = [
  {
    id: "1",
    name: "Virtual Dollar",
    image:
      "https://cdn2.vectorstock.com/i/1000x1000/69/61/golden-dollar-symbol-with-two-vertical-lines-i-vector-20826961.jpg",
    symbol: "USDT",
    ValueChange: -0.23,
    valueUSD: 123.0,
  },
  {
    id: "2",
    name: "Bitcoin",
    image:
      "https://previews.123rf.com/images/pixelae/pixelae1801/pixelae180100009/94515688-%E3%83%93%E3%83%83%E3%83%88%E3%82%B3%E3%82%A4%E3%83%B3%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E3%83%9E%E3%83%8D%E3%83%BC%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E3%81%AB%E7%BD%B2%E5%90%8D%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%E3%82%A6%E3%82%A7%E3%83%96%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%82%84%E3%83%A2%E3%83%90%E3%82%A4%E3%83%AB%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%A7%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E6%9A%97%E5%8F%B7%E9%80%9A%E8%B2%A8%E8%A8%98%E5%8F%B7%E3%81%A8%E3%82%B3%E3%82%A4%E3%83%B3%E7%94%BB%E5%83%8F%E3%80%82%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%83%81%E3%82%A7%E3%83%BC%E3%83%B3%E3%83%99%E3%83%BC%E3%82%B9%E3%81%AE%E5%AE%89%E5%85%A8%E3%81%AA%E6%9A%97%E5%8F%B7%E9%80%9A%E8%B2%A8%E3%80%82%E5%88%86%E9%9B%A2%E3%83%99%E3%82%AF%E3%83%88%E3%83%AB%E5%9B%B3%E3%80%82.jpg",
    symbol: "BTC",
    ValueChange: 0.13,
    valueUSD: 390.0,
  },
  {
    id: "3",
    name: "Ethereum",
    image:
      "https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-logo-6278329__480.png",
    symbol: "ETH",
    ValueChange: 0.1,
    valueUSD: 723.0,
  },
  {
    id: "4",
    name: "Ethereum",
    image:
      "https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-logo-6278329__480.png",
    symbol: "ETH",
    ValueChange: 1.4,
    valueUSD: 723.0,
  },
  {
    id: "5",
    name: "Ethereum",
    image:
      "https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-logo-6278329__480.png",
    symbol: "ETH",
    ValueChange: 1.4,
    valueUSD: 723.0,
  },
  {
    id: "6",
    name: "Ethereum",
    image:
      "https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-logo-6278329__480.png",
    symbol: "ETH",
    ValueChange: 1.4,
    valueUSD: 723.0,
  },
  {
    id: "7",
    name: "Ethereum",
    image:
      "https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-logo-6278329__480.png",
    symbol: "ETH",
    ValueChange: 1.4,
    valueUSD: 723.0,
  },
  {
    id: "8",
    name: "Ethereum",
    image:
      "https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-logo-6278329__480.png",
    symbol: "ETH",
    ValueChange: 1.4,
    valueUSD: 723.0,
  },
  {
    id: "9",
    name: "Ethereum",
    image:
      "https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-logo-6278329__480.png",
    symbol: "ETH",
    ValueChange: 1.4,
    valueUSD: 723.0,
  },
];
const RankingsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ alignItems: "center" }}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <Text style={styles.label}>Rankings</Text>
          </>
        )}
        style={{ width: "100%" }}
        data={PortfolioCoins}
        renderItem={({ item }) => <MarketCoin MarketCoins={item} />}
      />
    </View>
  );
};

export default RankingsScreen;
