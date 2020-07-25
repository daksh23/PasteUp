import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import NewModal from '../Extra/NewModal'

const Setting = (props) => {

  const [loading, setloading] = useState(false)

  const DarkModeUs = () =>
    Alert.alert(
      "Dark Mode",
      "Coming Soon",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK"},
      ],
      { cancelable: false }
    );
  
    const ImageByUs = () =>{
      setloading(true)
      setTimeout(() => {
        setloading(false)
      },4000);
    }

  return (
    <View style={styles.MainCardBox}>
    <NewModal loading={loading}/>

      <TouchableOpacity onPress={() => DarkModeUs()}>
        <View style={styles.Card}>
          <Icon size={25} name={"ios-contrast"} />
          <Text style={styles.CardText}> DarkMode </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>props.navigation.navigate("About")}>
        <View style={styles.Card}>
          <Icon size={25} name={"ios-information-circle"} />
          <Text style={styles.CardText}> About </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => ImageByUs()}>
        <View style={styles.Card}>
          <Icon size={25} name={"ios-image"} />
          <Text style={styles.CardText}> ImageBy </Text>
        </View>
      </TouchableOpacity>
{/* 
      <TouchableOpacity onPress={() => alert("done")}>
        <View style={styles.Card}>
          <Icon size={25} name={"ios-flag"} />
          <Text style={styles.CardText}> Feedback </Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  MainCardBox: {
    flex: 1,
    paddingLeft: 15,
    backgroundColor: "#fff",
  },
  Card: {
    flexDirection: "row",
    width: "100%",
    paddingTop: 20,
  },
  CardText: {
    fontSize: 18,
    color: "#000",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  alertContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default Setting;
