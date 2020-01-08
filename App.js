import React, { Component } from "react";
import Login from "./screens/login";
import Dashboard from "./screens/dashboard";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Profile from "./screens/Profile";
import fourth from "./screens/fourth";
import Camera from "./screens/camera";
import AuthLoading from "./screens/authLoading";
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const MainNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Ionicons
            name="md-checkmark-circle"
            size={22}
            color={focused ? "blue" : "grey"}
          />
        )
      }
    },
    Fifth: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Ionicons
            name="md-checkmark-circle"
            size={22}
            color={focused ? "blue" : "grey"}
          />
        )
      }
    },
    Camera: {
      screen: Camera,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Ionicons
            name="ios-aperture"
            size={22}
            color={focused ? "blue" : "grey"}
          />
        )
      }
    },
    Fourth: {
      screen: fourth,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Ionicons
            name="md-checkmark-circle"
            size={22}
            color={focused ? "blue" : "grey"}
          />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Ionicons
            name="ios-contact"
            size={22}
            color={focused ? "blue" : "grey"}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Camera",
    activeColor: "blue",
    barStyle: { backgroundColor: "white" }
  }
);

const RootNavigator = createSwitchNavigator({
  AuthLoading: {
    screen: AuthLoading,
    navigationOptions: {
      headerShown: false
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false
    }
  },
  MainNavigator: {
    screen: MainNavigator,
    navigationOptions: {
      headerShown: false
    }
  }
});

const AppContainer = createAppContainer(RootNavigator);
