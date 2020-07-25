import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../HomeScreen";
import EyeShot from "../Wallpapers/Eyeshot";

const Stack = createStackNavigator();

function HomeScreenNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Paste UP">
        <Stack.Screen name="Paste UP" component={HomeScreen} />
        <Stack.Screen name="EyeShot" component={EyeShot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeScreenNav;
