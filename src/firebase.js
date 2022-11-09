import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0YUl0CWrmNyZHuhhvcRu-dED4wiZK2Lc",
    authDomain: "reader-blog.firebaseapp.com",
    projectId: "reader-blog",
    storageBucket: "reader-blog.appspot.com",
    messagingSenderId: "509904579406",
    appId: "1:509904579406:web:2340cf796a87493e908c1f"
  };

  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)
  export const storage = getStorage(app);