import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDupUbYgaSxJlvBD5xa7B9w5B241jiJXcs",
  authDomain: "sih2k20.firebaseapp.com",
  databaseURL: "https://sih2k20.firebaseio.com",
  projectId: "sih2k20",
  storageBucket: "sih2k20.appspot.com",
  messagingSenderId: "137123564575",
  appId: "1:137123564575:web:68ffbe16274b429e9f592a",
  measurementId: "G-0Y8S0LWT0V"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
