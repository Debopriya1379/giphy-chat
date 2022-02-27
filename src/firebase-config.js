import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.firebase_apikey,
    authDomain: "giphy-chat-bc67e.firebaseapp.com",
    projectId: "giphy-chat-bc67e",
    storageBucket: "giphy-chat-bc67e.appspot.com",
    messagingSenderId: "1054815659897",
    appId: "1:1054815659897:web:ae45302b439ee22183f1a8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;