import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Form from "../components/Form";
import RepoList from "../components/RepoList";
import User from "../components/User";

export default function App() {
  //user
  // const [userAvat, setUserAvat] = useState("");
  // const [username, setUsername] = useState("taha");
  // const [bio, setBio] = useState("co-founder");
  // const [following, setFollowing] = useState(33);
  // const [followers, setFollowers] = useState(33);
  const [userProps, setUserProps] = useState({
    userAvat: "",
    username: "",
    bio: "",
    following: 0,
    followers: 0,
  });
  //dest
  const { userAvat, username, bio, following, followers } = userProps;
  //from form
  //users
  const userHandler = (
    newUserAvat,
    newUser,
    newBio,
    newFollowing,
    newFollowers
  ) => {
    setUserProps({
      userAvat: newUserAvat,
      username: newUser,
      bio: newBio,
      following: newFollowing,
      followers: newFollowers,
    });
  };
  //repos
  const [repoHandler, setRepoHandler] = useState([]);
  //the re-render
  console.log("render");
  //
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Form userHandler={userHandler} setRepoHandler={setRepoHandler} />
      {repoHandler.length !== 0 && (
        <User
          userAvat={userAvat}
          username={username}
          bio={bio}
          following={following}
          followers={followers}
        />
      )}
      {repoHandler.length !== 0 ? (
        <Text
          style={{
            fontSize: "2rem",
            marginVertical: "10px",
            textAlign: "center",
            color: "rgb(62, 0, 225)",
            fontFamily: "tahoma",
          }}
          onPress={() => {
            navigation.navigate("Repo", { repoHandler });
          }}
        >
          Repositories
        </Text>
      ) : null}
      <RepoList repoHandler={repoHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcf",
    padding: 10,
  },
});
