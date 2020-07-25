import React, { useLayoutEffect } from "react";
import { View, StyleSheet, Text, Alert, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import ImageOption from "../Extra/ImageOption";

const Eyeshot = (props) => {
  const { URL, Heights, Widths, Photographers } = props.route.params;

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.iconView} onPress={Info}>
          <Icon
            style={styles.infoIcon}
            size={25}
            name={"ios-information-circle-outline"}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  const infoStr = `Resolution: ${Widths} x ${Heights} \nPhotoBy: ${Photographers} `;

  const Info = () => Alert.alert("Infomation", `${infoStr}`, [{ text: "OK" }]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ImageBackground
        imageStyle={{ width: "auto" }}
        source={{ uri: `${URL}` }}
        style={styles.imageView}
      >
        <View>
          <ImageOption {...props} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#12343b",
    height: "auto",
    padding: 10,
  },
  iconView: {
    paddingRight: 20,
  },
});

export default Eyeshot;
