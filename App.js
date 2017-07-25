import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./src/components/Header";
import SearchContainer from "./src/components/SearchContainer";


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header>NY Times</Header>
        <SearchContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
