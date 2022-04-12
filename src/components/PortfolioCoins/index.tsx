import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
export interface PortfolioCoinsProps {
    PortfolioCoins: {
    image: string,
    name: string,
    symbol: string,
    amount: number,
    valueUSD: number,
    }
}
const PortfolioCoin = (props: PortfolioCoinsProps) => {
    const { PortfolioCoins: { image, name, symbol, amount, valueUSD }} = props;
  return (
    <View style={styles.container}>
      <View style={styles.left}>
          <Image style={styles.image} source={{uri: image}} />
          <View style={styles.coinTitle}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.symbol}>{symbol}</Text>
          </View>
      </View>
      <View>
          <Text style={styles.name}>${valueUSD}</Text>
          <Text style={styles.amount}>{symbol} {amount}</Text>
      </View>
    </View>
  )
}

export default PortfolioCoin