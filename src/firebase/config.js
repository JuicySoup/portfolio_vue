import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCg9ssg2C8MP2VgzWaI_j8wk2Z81wv3Ap8",
    authDomain: "portfolio-website-56c0e.firebaseapp.com",
    projectId: "portfolio-website-56c0e",
    storageBucket: "portfolio-website-56c0e.appspot.com",
    messagingSenderId: "528232948891",
    appId: "1:528232948891:web:6d7e2f4bbbbd3b61ed523e"
  };


//init firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const storage = getStorage(app)
const firestore = getFirestore(app)


export { auth, storage, firestore}