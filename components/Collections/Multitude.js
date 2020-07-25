import React, { Component, useState, useEffect,useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import WallapaperList from "../Wallpapers/WallpaperList";
import { Keyowrd } from "../../Helper/HelperApi";
import Loader from "../Extra/Loader";

const Multitude = ({ route, navigation }) => {
  const [PhotoList, setPhotoList] = useState("");
  const [loading, setloading] = useState(true);

  const { Name } = route.params;

  useEffect(() => {
    getData(Name);
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title:`${Name}`
    });
  }, []);

  const getData = async (key) => {
    const resData = await Keyowrd(key);
    setPhotoList(resData);
  };

  return (
    <View style={styles.container}>
      <Loader loading={loading} />

      <FlatList
        contentContainerStyle={{ padding: 4 }}
        renderItem={(obj) => (
          <WallapaperList {...obj.item} navigate={navigation} />
        )}
        data={PhotoList}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Multitude;
