import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store/Store";
import Setup from "./src/Setup";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Setup />
      </Provider>
    );
  }
}
