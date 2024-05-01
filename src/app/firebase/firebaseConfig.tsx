import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBKbTz1h9yjtki-pQDo8kq5ff2o-MHM-g0",
    authDomain: "projeto-igor-food.firebaseapp.com",
    projectId: "projeto-igor-food",
    storageBucket: "projeto-igor-food.appspot.com",
    messagingSenderId: "574703615082",
    appId: "1:574703615082:web:b0dbc4ec8315ec9b45de13"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);