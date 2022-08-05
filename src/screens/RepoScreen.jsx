import React from "react";
import { Text, View } from "react-native";
import RepoList from "../components/RepoList";
//
export default function RepoScreen(props) {
  return (
    <View style={{ backgroundColor: "rgb(255, 204, 255)", padding: "20px" }}>
      <RepoList repoHandler={props.route.params.repoHandler} />
      <Text>Other Stuff</Text>
    </View>
  );
}
