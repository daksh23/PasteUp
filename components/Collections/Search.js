import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import WallapaperList from "../Wallpapers/WallpaperList";
import Icon from "react-native-vector-icons/Ionicons";
import { Keyowrd } from "../../Helper/HelperApi";
import Loader from '../Extra/Loader'

class Search extends Component {
  constructor(e) {
    super(e);

    this.state = {
      value: null,
      dataArr: null,
      NotFound: false,
      loading:false
    };
  }

  onSearch = async () => {
    this.setState({loading:true})
    const keyword = this.state.value;
    const that = this;

    const datas = await Keyowrd(keyword);

    if (datas === "Not Found !!!") that.setState({ NotFound: true });
    else if (datas != "Not Found !!!") that.setState({ NotFound: false });
    that.setState({ dataArr: datas });
    that.setState({loading:false})
  };

  render() {
    return (
      <View style={styles.searchScreen}>
        <View style={styles.screenBox1}>
          <TextInput
            style={styles.TextInput}
            onChangeText={(text) => this.setState({ value: text })}
            value={this.state.value}
          />
          <TouchableOpacity
            style={{ marginRight: 15 }}
            onPress={() => this.onSearch()}
          >
            <Icon size={28} name={"ios-search"} />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
          {this.state.value != null ? (
            this.state.dataArr != null ? (
              this.state.NotFound === false ? (
                <View style={styles.container}>

                  <FlatList
                    contentContainerStyle={{ padding: 4 }}
                    renderItem={(obj) => (
                      <WallapaperList
                        {...obj.item}
                        navigate={this.props.navigation}
                      />
                    )}
                    data={this.state.dataArr}
                    numColumns={2}
                  />
                </View>
              ) : (
                <View style={styles.WallPaperList}>
                  <Text style={styles.Hint}>Not Found Sorry :(</Text>
                </View>
              )
            ) : (
              <View style={styles.WallPaperList}>
                  <Loader loading={this.state.loading} />
              </View>
            )
          ) : (
            <View style={styles.WallPaperList}>
              <Text style={styles.Hint}>Type Word and Click Search</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenBox1: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 10,
  },
  searchScreen: {
    flex: 1,
  },
  TextInput: {
    flex: 1,
    borderBottomColor: "#12343b",
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 20,
  },
  WallPaperList: {
    height: "100%",
  },
  Hint: {
    marginTop: 50,
    color: "#00263B",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Search;
