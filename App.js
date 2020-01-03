import React, { Component } from "react";
import Login from "./screens/login";
import Profile from "./screens/profile";
import Dashboard from "./screens/dashboard";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import fifth from "./screens/fifth";
import fourth from "./screens/fourth";
import third from "./screens/third";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const MainNavigator = createMaterialBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Ionicons name="ios-desktop" size={22} color={focused?"blue":"grey"} />
        )
      }
    },
    Fifth: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Ionicons name="md-checkmark-circle" size={22} color={focused?"blue":"grey"} />
        )
      }
    },
    Camera: {
      screen: third,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Ionicons name="ios-aperture" size={22} color={focused?"blue":"grey"} />
        )
      }
    },
    Fourth: {
      screen: fourth,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Ionicons name="md-checkmark-circle" size={22} color={focused?"blue":"grey"} />
        )
      }
    },
    Profile: {
      screen: fifth,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Ionicons name="ios-contact" size={22} color={focused?"blue":"grey"} />
        )
      }
    }
  },
  {
    initialRouteName: "Dashboard",
    activeColor: "blue",
    barStyle: { backgroundColor: "white" }
  }
);

const RootNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    MainNavigator: {
      screen: MainNavigator,
      navigationOptions: {
        header: null
      }
    }
  }
);

const AppContainer = createAppContainer(RootNavigator);
