import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TopRated from "./SubTabs/TopRated";
import Newest from "./SubTabs/Newest";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Newest"
      tabBarOptions={{
        activeTintColor: "black",
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: "white" },
      }}
    >
      <Tab.Screen
        name="Newest"
        component={Newest}
        options={{ tabBarLabel: "Newest" }}
      />
      <Tab.Screen
        name="TopRated"
        component={TopRated}
        options={{ tabBarLabel: "Top Rated" }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
