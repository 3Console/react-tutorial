import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAcpM4GvQdi-dpjwj7fdFKAWttJVW3Wty8",
  authDomain: "react-tutorial-e8594.firebaseapp.com",
  databaseURL: "https://react-tutorial-e8594.firebaseio.com",
  projectId: "react-tutorial-e8594",
  storageBucket: "react-tutorial-e8594.appspot.com",
  messagingSenderId: "145633408769",
  appId: "1:145633408769:web:e9e083dc813594832c8d00"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
