import firebase from "firebase/compat/app"; 
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
});

export default app;

export const auth = app.auth();