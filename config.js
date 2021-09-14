import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyDkc4ruGHFZ8j22f49vrAVbkgfLCnqoH4E",
  authDomain: "complaintforum-e707d.firebaseapp.com",
  projectId: "complaintforum-e707d",
  storageBucket: "complaintforum-e707d.appspot.com",
  messagingSenderId: "244061091883",
  appId: "1:244061091883:web:1c1a51edd44e3495f2d26e"
};


  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

