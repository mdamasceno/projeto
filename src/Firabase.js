import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBZ__cFgeBAAyBY28xwuJICDdBTq57xxu4",
    authDomain: "devweb-6e293.firebaseapp.com",
    projectId: "devweb-6e293",
    storageBucket: "devweb-6e293.appspot.com",
    messagingSenderId: "1013283539311",
    appId: "1:1013283539311:web:2ad746ca5f2859e0e1009a"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;