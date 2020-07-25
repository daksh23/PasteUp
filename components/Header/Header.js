import React from "react";
import { Text, View, SafeAreaView, StyleSheet, Platform } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.HeaderContainer}>
      <View>
        <Text style={styles.HeaderText}> Paste UP </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    marginTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
    height: 50,
    backgroundColor: "white",
    justifyContent: "center",
    borderBottomColor: "black",
  },
  HeaderText: {
    color: "black",
    marginLeft: 10,
    fontSize: 18,
  },
});

export default Header;
