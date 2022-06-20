import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
const image = require("../../../assets/images/Saly-1.png");
const googleButtonImage = require("../../../assets/images/google_Signin.png");

const WelcomeScreen = () => {
  const signInGoogle = () => {};
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.header1}>Welcome to StarCrypt</Text>
      <Text style={styles.header2}>
        Invest your virtual $1,000 and compete with others
      </Text>

      <Pressable onPress={signInGoogle} style={styles.googleButton}>
        <Image style={styles.buttonImage} source={googleButtonImage} />
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;
