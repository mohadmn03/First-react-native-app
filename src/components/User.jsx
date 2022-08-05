import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const User = ({ userAvat, username, bio, following, followers }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.to}
      onPress={() => {
        navigation.navigate("User", {
          userAvat,
          username,
          bio,
          following,
          followers,
        });
      }}
    >
      <Image
        style={styles.userAvatar}
        source={
          userAvat === ""
            ? require("../../assets/userAvatar.png")
            : { uri: userAvat }
        }
      />
      <View style={{ flex: "3" }}>
        <Text style={[styles.textSize, { fontWeight: "bold" }]}>
          {username}
        </Text>
        <Text style={styles.textSize}>{bio}</Text>
        <Text style={styles.textSize}>following: {following}</Text>
        <Text style={styles.textSize}>followers: {followers}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  to: {
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px",
    border: "1px solid black",
    borderRadius: "13px",
    padding: "10px",
  },
  userAvatar: {
    width: 90,
    height: 90,
    borderRadius: "50%",
  },
  textSize: {
    fontSize: "1.1rem",
  },
});
//
export default User;
