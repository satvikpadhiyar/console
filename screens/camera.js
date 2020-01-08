import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import * as ImageManipulator from "expo-image-manipulator";
import API from "../config/API";
export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  var camera;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        ref={ref => {
          camera = ref;
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 20
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.2)",
              width: 60,
              height: 60,
              backgroundColor: "#fff",
              borderRadius: 50,
              alignSelf: "flex-end",
              alignItems: "center",
              justifyContent: "center"
            }}
            onPress={async () => {
              setIsLoading(true);
              await pictureInfo(camera);
              setIsLoading(false);
            }}
          ></TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

async function pictureInfo(camera) {
  var details = await camera.takePictureAsync({
    quality: 0
  });
  console.log(details.uri);
  const manipResult = await ImageManipulator.manipulateAsync(
    details.uri,
    [{ resize: { width: 1000 } }],
    { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG, base64: true }
  );
  console.log(manipResult.base64);
  var base64 =
    "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";

  let body = JSON.stringify({
    requests: [
      {
        image: {
          content: manipResult.base64
        },
        features: [
          {
            maxResults: 3,
            type: "LANDMARK_DETECTION"
          }
        ]
      }
    ]
  });
  let response = await fetch(

    `https://vision.googleapis.com/v1/images:annotate?key=${API}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: body
    }
  );
  let responseJson = await response.json();
  if (responseJson) {
    console.log(responseJson);
  } else {
    console.log("none found");
  }
  alert(responseJson.responses[0].landmarkAnnotations[0].description);
}
