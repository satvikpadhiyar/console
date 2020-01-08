import React, { Component } from "react";
import { View } from "react-native";
import fire from "../config/fire";
import Spinner from "react-native-loading-spinner-overlay";

export default class authLoading extends Component {
  constructor(props) {
    super(props);
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate("MainNavigator");
      } else {
        this.props.navigation.navigate("Login");
      }
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Spinner
          visible={true}
          textContent={"Loading..."}
          textStyle={{
            color: "#FFF"
          }}
        />
      </View>
    );
  }
}
