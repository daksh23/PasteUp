import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, ImageBackground, StyleSheet, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CollectionAPI } from "../../Helper/HelperApi";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import Loader from "../Extra/Loader";

const Collections = (props) => {
  const [CollectionView, setCollectionView] = useState([]);
  const [loading, setloading] = useState(true);
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => props.navigation.navigate("Search")}>
          <Icon style={{ marginRight: 10 }} size={25} name={"ios-search"} />
        </TouchableOpacity>
      ),
    });
  }, []);

  useEffect(() => {
    getUser();
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);

  const getUser = async () => {
    const result = await CollectionAPI();
    setCollectionView(result);
  };

  return (
    <View style={styles.mainBox}>
      <Loader loading={loading} />

      <ScrollView>
        {CollectionView.map((x) => (
          <TouchableOpacity
            key={x.Name}
            style={styles.TouchCard}
            onPress={() =>
              props.navigation.navigate("Multitude", {
                Name: `${x.Name}`,
              })
            }
          >
            <ImageBackground
              style={styles.CardImage}
              source={{ uri: `${x.Image}` }}
              imageStyle={{ borderRadius: 6 }}
            >
              <View style={styles.TextBox}>
                <Text style={styles.cardText}> {x.Name} </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    marginTop: 8,
    marginBottom: 8,
  },
  TouchCard: {
    padding: 5,
  },
  CardImage: {
    height: 200,
    width: "100%",
  },
  cardText: {
    color: "#12343b",
    fontSize: 30,
    color: "white",
  },
  TextBox: {
    justifyContent: "center",
  },
});

export default Collections;

/* */
