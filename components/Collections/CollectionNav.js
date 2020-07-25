import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Search from "./Search";
import Collections from "./Collections";
import Multitude from "./Multitude";
import EyeShot from "../Wallpapers/Eyeshot";

const Stack = createStackNavigator();

const CollectionNav = (props) => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="Collections">
          <Stack.Screen
            name="Collections"
            component={Collections}
          ></Stack.Screen>
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Multitude" component={Multitude} />
          <Stack.Screen name="EyeShot" component={EyeShot} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default CollectionNav;

/* {
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => ("EyeShot")}
                >
                  <Icon
                    style={{ marginRight: 10 }}
                    size={25}
                    name={"ios-search"}
                  />
                </TouchableOpacity>
              ),
            } */
