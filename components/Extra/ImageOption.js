import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import * as Permissions from "expo-permissions";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import Loader from "./Loader";

const ImageOption = (props) => {
  const [loading, setloading] = useState(false);

  const downloadResumable = FileSystem.createDownloadResumable(
    props.route.params.URL,
    FileSystem.documentDirectory + ".jpg",
    {}
  );

  const downloadImage = async () => {
    setloading(true);
    let cameraPer = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    if (cameraPer.status !== "granted") {
      cameraPer = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    }
    if (cameraPer.status === "granted") {
      const { uri } = await downloadResumable.downloadAsync();
      MediaLibrary.saveToLibraryAsync(uri);
      setloading(false);
      alert("Download successFully");
    } else {
      alert("Something is wrong");
    }
  };

  const openShareDialogAsync = async () => {
    setloading(true);
    const { uri } = await downloadResumable.downloadAsync();
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }
    Sharing.shareAsync(uri);
    setloading(false);
  };
  return (
    <View style={styles.optionBox}>
      <Loader loading={loading} />
      <View style={styles.Box}>
        <View>
          <TouchableOpacity onPress={openShareDialogAsync}>
            <Icon size={25} name={"ios-share"} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => alert("coming soon")}>
            <Icon size={25} name={"ios-images"} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => downloadImage()}>
            <Icon size={25} name={"ios-save"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionBox: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 5,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  Box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});

export default ImageOption;
