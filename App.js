import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import UserScreen from "./src/screens/UserScreen";
import RepoScreen from "./src/screens/RepoScreen";

export default function App() {
  const homeStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <homeStack.Navigator>
        <homeStack.Screen name="Home" component={HomeScreen} />
        <homeStack.Screen name="User" component={UserScreen} />
        <homeStack.Screen name="Repo" component={RepoScreen} />
      </homeStack.Navigator>
    </NavigationContainer>
  );
}
