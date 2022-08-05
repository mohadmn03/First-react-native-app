import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

const RepoList = ({ repoHandler }) => {
  return (
    <FlatList
      data={repoHandler}
      renderItem={({ item, index }) => {
        return (
          <View
            style={{
              marginTop: "10px",
              paddingBottom: "5px",
              borderBottom: "1px solid black",
            }}
            key={index}
          >
            <Text style={[styles.textSize, styles.textBold]}>
              {index} : {item.name}
            </Text>
            <Text
              style={[styles.textSize, styles.textBold, { color: "brown" }]}
            >
              {item.language || "No Language"}
            </Text>
            <Text style={[styles.textSize]}>Forks: {item.forks_count}</Text>
            <Text style={styles.textSize}>
              Open issues: {item.open_issues_count}
            </Text>
          </View>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  textSize: {
    fontSize: "1.3rem",
  },
  textBold: {
    fontWeight: "bold",
  },
});
export default RepoList;
//

{
  /* <View
        style={{
          marginTop: "10px",
          alignItems: "center",
          flexDirection: "column",
        }}
        key={index}
      >
        <Text style={{ fontWeight: "bold" }}>
          {index} : {repo.name}
        </Text>
        <Text style={{ fontWeight: "bold", color: "brown" }}>
          {repo.language}
        </Text>
        <Text>Forks: {repo.forks_count}</Text>
        <Text>Open issues: {repo.open_issues_count}</Text>
      </View> */
}
