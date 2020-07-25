import React, { Component } from "react";
import { StyleSheet, View, Text, Modal, Image, Button } from "react-native";

const NewModal = (props) => {
    const { loading } = props
  return (
    <View>
      <Modal
        transparent={true}
        animationType={"none"}
        visible={loading}
        
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <Image source={require("../../assets/supporter.png")} />
            <Text style={{ fontSize: 20 }}> https://www.pexels.com </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040",
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: 300,
    width: 300,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default NewModal;
