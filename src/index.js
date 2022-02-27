import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBxAYVIJMzGSREaKbuxlTfzTEhLOYTS8Uc",
  authDomain: "popravni-858bb.firebaseapp.com",
  projectId: "popravni-858bb",
  storageBucket: "popravni-858bb.appspot.com",
  messagingSenderId: "301054610390",
  appId: "1:301054610390:web:f706b41e8534961c597277",
  measurementId: "G-971PKE7T8T"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
