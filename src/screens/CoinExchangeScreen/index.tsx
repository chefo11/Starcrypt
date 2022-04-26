import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";
import { parse } from "@babel/core";
const image = require("../../../assets/images/Saly-31.png");

const CoinExchangeScreen = () => {
  const [coinAmount, setCoinAmount] = useState("");
  const [coinUSDValue, setCoinUSDAValue] = useState("");
  const maxUSD = 100000;

  const route = useRoute();
  const isBuy = route?.params?.isBuy;
  const coinData = route?.params?.coinData;

  useEffect(() => {
    const amount = parseFloat(coinAmount);
    if (!amount && amount !== 0) {
      setCoinAmount("");
      setCoinUSDAValue("");
      return;
    }
    setCoinUSDAValue((amount * coinData?.currentPrice).toString());
  }, [coinAmount]);
  useEffect(() => {
    const value = parseFloat(coinUSDValue);
    if (!value && value !== 0) {
      setCoinAmount("");
      setCoinUSDAValue("");
      return;
    }
    setCoinAmount((value / coinData?.currentPrice).toString());
  }, [coinUSDValue]);
  const onPlaceOrder = () => {
    if (coinAmount != "" && parseFloat(coinAmount) > 0) {
      if (isBuy && parseFloat(coinUSDValue) > maxUSD) {
        Alert.alert(`Not enough USD coins. Max: ${maxUSD}`);
      }
      if (!isBuy && parseFloat(coinAmount) > coinData?.amount) {
        Alert.alert(
          `Not enough ${coinData?.symbol} coins. Max ${coinData.symbol}: ${coinData.amount}`
        );
      }
    }
    Alert.alert("Please enter coin amount");
  };

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={100} style={styles.container}>
      <Text style={styles.title}>
        {isBuy ? "Buy" : "Sell"} {coinData?.name}
      </Text>
      <Text style={styles.subTitle}>
        1 {coinData?.symbol} {"="} ${coinData?.currentPrice}
      </Text>
      <Image style={styles.image} source={image} />
      <View style={styles.inputSection}>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="decimal-pad"
            placeholder="0"
            value={coinAmount}
            onChangeText={setCoinAmount}
          />
          <Text>{coinData.symbol}</Text>
        </View>
        <Text style={{ fontSize: 30 }}>=</Text>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="decimal-pad"
            placeholder="0"
            value={coinUSDValue}
            onChangeText={setCoinUSDAValue}
          />
          <Text>USD</Text>
        </View>
      </View>
      <Pressable style={styles.button} onPress={onPlaceOrder}>
        <Text style={styles.buttonText}>Place Oreder</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default CoinExchangeScreen;
