import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: import.meta.env.apiKey,
    authDomain: import.meta.env.authDomain,
    projectId: import.meta.env.projectId,
    storageBucket: import.meta.env.storageBucket,
    messagingSenderId: import.meta.env.messagingSenderId,
    appId: import.meta.env.appId,
};
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
