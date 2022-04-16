import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
export interface UserRankingItemProps {
  User: {
    image: string;
    name: string;
    networth: number;
  };
  place: number;
}
const UserRankingItem = (props: UserRankingItemProps) => {
  const {
    User: { image, name, networth },
    place,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.place}>{place + 1}</Text>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.coinTitle}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.value}>${networth}</Text>
      </View>
    </View>
  );
};

export default UserRankingItem;
