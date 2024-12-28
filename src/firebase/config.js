import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  // Firebase console'dan alacağınız config bilgileri buraya gelecek
  apiKey: "AIzaSyDzrNs6OIcerAGa9w9URm2fwZkFGHBgZA8",
  authDomain: "lib-18147.firebaseapp.com",
  databaseURL: "https://lib-18147-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lib-18147",
  storageBucket: "lib-18147.appspot.com",
  messagingSenderId: "820862583790",
  appId: "1:820862583790:web:35e07b97260e3f9cbf04ff",
  measurementId: "G-L9P866D14B"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app); 