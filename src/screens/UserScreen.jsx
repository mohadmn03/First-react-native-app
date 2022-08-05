import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import User from "../components/User";

export default function UserScreen(props) {
  const user = props.route.params;
  return (
    <View>
      <User
        userAvat={user.userAvat}
        username={user.username}
        bio={user.bio}
        following={user.following}
        followers={user.followers}
      />
      <Text>Other Stuff</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  userAvatar: {
    width: 90,
    height: 90,
    borderRadius: "50%",
  },
});
/*

*/
