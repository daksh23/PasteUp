import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Loader from '../Extra/Loader'
import { MostDownloaded } from '../../Helper/HelperApi'
import WallapaperList from '../Wallpapers/WallpaperList'

class Download extends Component {
  state = {
    Downloaded: [],
    loading: true,
  };
  componentDidMount() {
    this.getMostDownloaded();
  }

  getMostDownloaded = async () => {
    const result = await MostDownloaded();
    this.setState({
      Downloaded: result,
      loading: false,
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
          data={this.state.Downloaded}
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

export default Download;
