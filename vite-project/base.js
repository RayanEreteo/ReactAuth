import firebase from "firebase/compat/app"; 
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyB2rxFxKHCHjaTvRhR9SmPNxh74fW4DE9A",
    authDomain: "authreact-78e06.firebaseapp.com",
    projectId: "authreact-78e06",
    storageBucket: "authreact-78e06.appspot.com",
    messagingSenderId: "86473982258",
    appId: "1:86473982258:web:aca0ea9be4b9aa0ee9d72b",
});

export default app;

export const auth = app.auth();