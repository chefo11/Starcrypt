import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
const image = require("../../../assets/images/Saly-16.png");
const ProfileScreen = () => {
  const [user, setUser] = React.useState({
    id: "1",
    name: "Chefo",
    email: "fran6cool@gmail.com",
    image:
      "https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-logo-6278329__480.png",
    networth: 12345,
  });

  const signOut = () => {
    console.warn("Signing out");
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.label}>Profile</Text>
      <View style={styles.userContainer}>
        <View style={styles.left}>
          <Image style={styles.userImage} source={{ uri: user.image }} />
          <View style={styles.coinTitle}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.value}>${user.networth}</Text>
        </View>
      </View>
      <Pressable onPress={signOut} style={styles.button}>
        <Text>Sign out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
