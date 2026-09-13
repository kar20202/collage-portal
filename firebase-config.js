import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBgjfNUvNAI8pmlUaWEHwthzOihIYTuKt8",
  authDomain: "collage-portal-4d495.firebaseapp.com",
  databaseURL: "https://collage-portal-4d495-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "collage-portal-4d495",
  storageBucket: "collage-portal-4d495.firebasestorage.app",
  messagingSenderId: "879166928535",
  appId: "1:879166928535:web:f1471aaafba14356b11bd2",
  measurementId: "G-XVGDSXMC40"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
