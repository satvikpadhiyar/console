import React, { Component } from "react";
import { View, Button } from "react-native";

export default class login extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="press"
          onPress={() => {
            this.props.navigation.navigate("MainNavigator", {
              name: "dvanshu"
            });
          }}
        />
      </View>
    );
  }
}
