import React, { Component } from "react";
import { Text, View, Image, FlatList, StyleSheet } from "react-native";
import { TopRate } from "../../../Helper/HelperApi";

import WallapaperList from "../../Wallpapers/WallpaperList";

class TopRated extends Component {
  state = {
    TopRate: [],
  };

  componentDidMount() {
    this.getTopRate();
  }

  getTopRate = async () => {
    const result = await TopRate();
    this.setState({
      TopRate: result,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{ padding: 4 }}
          renderItem={(obj) => (
            <WallapaperList {...obj.item} navigate={this.props.navigation} />
          )}
          data={this.state.TopRate}
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

export default TopRated;
