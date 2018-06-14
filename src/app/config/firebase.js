import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBxGiU3Cm0r-TYaoNzzrTWtZNVB4MzZzQI",
    authDomain: "gooberu-testscreens.firebaseapp.com",
    databaseURL: "https://gooberu-testscreens.firebaseio.com",
    projectId: "gooberu-testscreens",
    storageBucket: "gooberu-testscreens.appspot.com",
    messagingSenderId: "931119937625"
  }

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
}
firestore.settings(settings);

export default firebase;
