export const firebase = require('firebase/app');
const auth = require('firebase/auth');
const database = require('firebase/database');

const firebaseConfig = {
  apiKey: "AIzaSyCN2zDt8O36Ov3T7vTtrlgYqZ4uB3tJ5Qc",
  authDomain: "to-do-list-e576a.firebaseapp.com",
  databaseURL: "https://to-do-list-e576a.firebaseio.com",
  projectId: "to-do-list-e576a",
  storageBucket: "to-do-list-e576a.appspot.com",
  messagingSenderId: "629503005724",
  appId: "1:629503005724:web:f2cb9f1ebe5361bb"
};

firebase.initializeApp(firebaseConfig);


export const signIn = (email, password, callback) => {
  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
    // Handle Errors
    const errorMessage = error.message;
    console.log(`Error Message => ${errorMessage}`);
    callback({
      error: errorMessage,
      success: false
    })
  }).then(callback({
    error: null,
    success: true
  }))
};

export const register = (email, username, password, callback) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    // Handle Errors
    const errorMessage = error.message;
    console.log(`Error Message => ${errorMessage}`);
    callback({
      error: errorMessage,
      success: false
    })
  }).then((res) => {
    const uid = res.user.uid;
    console.log(res.user.uid);
    firebase.database().ref('users/' + uid).set({
      username: username,
      email: email
    }).catch((error) => {
      const errorMessage = error.message;
      console.log(`Error Message => ${errorMessage}`);
      callback({
        error: errorMessage,
        success: false
      })
    }).then(callback({
      error: null,
      success: true
    }))
  });
};
