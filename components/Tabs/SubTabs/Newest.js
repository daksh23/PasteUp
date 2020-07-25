import React, { Component } from "react";
import { Text, View, Image, FlatList, StyleSheet } from "react-native";
import { Latest } from "../../../Helper/HelperApi";

import WallapaperList from "../../Wallpapers/WallpaperList";
import Loader from '../../Extra/Loader'

class Newest extends Component {
  state = {
    Latests: [],
    loading: true,
  };

  componentDidMount() {
    this.getLatest();
  }

  getLatest = async () => {
    const result = await Latest();
    this.setState({
      Latests: result,
      loading:false
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Loader loading={this.state.loading} />
        <FlatList
          contentContainerStyle={{ padding: 4 }}
          renderItem={(obj) => (
            <WallapaperList {...obj.item} navigate={this.props.navigation} />
          )}
          data={this.state.Latests}
          numColumns={2}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default Newest;
