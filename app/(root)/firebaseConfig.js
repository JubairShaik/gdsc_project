import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpm8S-ePqZE52qZsL-YDkPBx_qrX7Binw",
  authDomain: "gdsc-debfb.firebaseapp.com",
  projectId: "gdsc-debfb",
  storageBucket: "gdsc-debfb.appspot.com",
  messagingSenderId: "795432604764",
  appId: "1:795432604764:web:541b9f50294e5deca24299",
  measurementId: "G-V9QSR4CR0B",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
