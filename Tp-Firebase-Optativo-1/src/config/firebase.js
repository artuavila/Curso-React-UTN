import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDMaguiUaMZE04oZwOXbLMUkTXiMbuvhzg",
    authDomain: "tpfirebaseoptativo1.firebaseapp.com",
    projectId: "tpfirebaseoptativo1",
    storageBucket: "tpfirebaseoptativo1.firebasestorage.app",
    messagingSenderId: "865572531660",
    appId: "1:865572531660:web:6e000fa6220c86ef31c169"
};

const app = initializeApp(firebaseConfig);

const database = getFirestore(app)

export default database