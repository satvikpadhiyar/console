import React, { Component } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import fire from "../config/fire";

export default class Profile extends Component {
  _signOut = () => {
    fire.auth().signOut();
  };
  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <TouchableOpacity onPress={this._signOut.bind(this)}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
