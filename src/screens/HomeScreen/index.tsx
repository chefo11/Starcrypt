import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import Colors from '../../constants/Colors'
const image = require('../../../assets/images/Saly-1.png');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.header1}>Welcome to StarCrypt</Text>
      <Text style={styles.header2}>Invest your virtual $1,000 and compete with others</Text>
    </View>
  ) 
}

export default HomeScreen