import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDFBgRyT_iL0dvCIrAJI7poXpcFHZy0BLc",
	authDomain: "react-my-burger-2ab33.firebaseapp.com",
	databaseURL: "https://react-my-burger-2ab33-default-rtdb.firebaseio.com",
	projectId: "react-my-burger-2ab33",
	storageBucket: "react-my-burger-2ab33.appspot.com",
	messagingSenderId: "336950971083",
	appId: "1:336950971083:web:01e7a5564ad24a0224294e",
	measurementId: "G-831VFGERWQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { firebaseApp }
export { auth, provider }