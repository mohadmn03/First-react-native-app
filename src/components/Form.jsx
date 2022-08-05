import React, { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  ActivityIndicator,
  Text,
} from "react-native";

const Form = ({ userHandler, setRepoHandler }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  //fetching data
  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      //users
      const responseUsers = await fetch(
        `https://api.github.com/users/${inputValue}`
      );
      const jsonResponseU = await responseUsers.json();
      userHandler(
        jsonResponseU.avatar_url,
        jsonResponseU.name,
        jsonResponseU.bio,
        jsonResponseU.following,
        jsonResponseU.followers
      );
      //repos
      const responseRepos = await fetch(
        `https://api.github.com/users/${inputValue}/repos`
      );
      const jsonResponseR = await responseRepos.json();
      setRepoHandler(jsonResponseR);
      setIsLoading(false);
    } catch (err) {
      console.log("c pas logique from users", err);
    }
  };
  //fetching data
  return (
    <View>
      <TextInput
        style={{
          outline: "none",
          border: "1px solid black",
          borderRadius: "13px",
          padding: "7px",
          marginBottom: "3px",
          fontSize: "1.7rem",
        }}
        placeholder="your username"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      {isLoading === true ? <ActivityIndicator /> : null}
      {/* <Button
        title="done"
        style={styles.button}
        onPress={() => {
          inputValue !== "" ? fetchUserData() : null;
        }}
      /> */}
      <Pressable
        style={styles.button}
        onPress={() => {
          inputValue !== "" ? fetchUserData() : null;
        }}
      >
        <Text
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            color: "rgb(62,0,225)",
            fontWeight: "bold",
            fontFamily: "tahoma",
          }}
        >
          done
        </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({});

export default Form;
