import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDpabHfz2uaYAn2J0b3hKJSTUbNRitvsqE",
  authDomain: "book-faster.firebaseapp.com",
  databaseURL: "https://book-faster.firebaseio.com",
  projectId: "book-faster",
  storageBucket: "book-faster.appspot.com",
  messagingSenderId: "398159551634",
  appId: "1:398159551634:web:5b9b5120fe4c7932"
};

class FirebaseInstance {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  // *** Auth API ***

  createUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);  
  
  signOut = () => this.auth.signOut();

  passwordReset = email => this.auth.sendPasswordResetEmail(email);

  passwordUpdate = password => this.auth.currentUser.updatePassword(password);

  getDB = () => this.db;
}

export default FirebaseInstance;
