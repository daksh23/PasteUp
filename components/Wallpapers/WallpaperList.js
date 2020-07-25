import React from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";

const WallpaperList = (props) => {
  return (
    <View style={styles.ImageBox}>
      <TouchableOpacity
        onPress={() =>
          props.navigate.navigate("EyeShot", {
            URL: `${props.src.original}`,
            Photographers: `${props.photographer}`,
            Heights: `${props.height}`,
            Widths: `${props.width}`,
          })
        }
      >
        <ImageBackground
          imageStyle={{ borderRadius: 7, borderColor: "#000", borderWidth: 1 }}
          source={{ uri: `${props.src.medium}` }}
          style={styles.imageView}
        ></ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageBox: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  imageView: {
    borderColor: "#12343b",
    height: 250,
    margin: 4,
  },
  iconView: {
    width: "16%",
    display: "flex",
  },
  favIcon: {
    color: "#d80000",
    padding: 5,
  },
});

export default WallpaperList;
