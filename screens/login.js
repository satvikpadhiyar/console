import React, { Component } from "react";
import { View, Button } from "react-native";
import * as Google from "expo-google-app-auth";
import firebase from "firebase";
import fire from "../config/fire";
import Spinner from "react-native-loading-spinner-overlay";

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false
    };
  }
  signInWithGoogleAsync = async () => {
    this.setState({ spinner: true });
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "137123564575-vbjbjd17ier5pqb6o6b3tps20pvqb02k.apps.googleusercontent.com",
        // iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          result.idToken,
          result.accessToken
        );
        await fire.auth().signInWithCredential(credential);
      } else {
        this.setState({ spinner: false });
      }
    } catch (e) {
      this.setState({ spinner: false });
      console.log(e);
    }
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Spinner
          visible={this.state.spinner}
          textContent={"Loading..."}
          textStyle={{
            color: "#FFF"
          }}
        />
        <Button
          title="Google Sign In !!"
          onPress={this.signInWithGoogleAsync.bind(this)}
        />
      </View>
    );
  }
}
