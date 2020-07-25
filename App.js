import React from "react";
import { View } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import CollectionNav from "./components/Collections/CollectionNav";
import DownloadMostNav from "./components/Favorite/DownloadMostNav";
import SettingsNav from "./components/NavigationRoute/SettingNav";

import { createAppContainer } from "react-navigation";
import HomeScreenNav from './components/NavigationRoute/HomeScreenNav'

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreenNav,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-home"} />
          </View>
        ),
      },
      activeColor: "black",
      inactiveColor: "gray",
      barStyle: { backgroundColor: "white" },
    },
    Collections: {
      screen: CollectionNav,
      navigationOptions: {
        tabBarLabel: "Collections",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-images"}
            />
          </View>
        ),
        activeColor: "black",
        inactiveColor: "gray",
        barStyle: { backgroundColor: "white" },
      },
    },
    Favorites: {
      screen: DownloadMostNav,
      navigationOptions: {
        tabBarLabel: "Downloads",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-heart"}
            />
          </View>
        ),
        activeColor: "black",
        inactiveColor: "gray",
        barStyle: { backgroundColor: "white" },
      },
    },
    Settings: {
      screen: SettingsNav,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-settings"} />
          </View>
        ),
      },
      activeColor: "black",
      inactiveColor: "gray",
      barStyle: { backgroundColor: "white" },
    },
  },
  {
    initialRouteName: "Home",
    activeColor: "black",
    inactiveColor: "gray",
    barStyle: { backgroundColor: "white" },
  }
);

export default createAppContainer(TabNavigator);
