import { initializeApp } from 'firebase/app';
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDcNSZs3tGsvPK3wpNB2enG-11nqNRcmx0",
    authDomain: "shamsu-shop-db.firebaseapp.com",
    projectId: "shamsu-shop-db",
    storageBucket: "shamsu-shop-db.appspot.com",
    messagingSenderId: "82061628844",
    appId: "1:82061628844:web:274b5b9d618c9d8d73d609"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

 export const auth = getAuth();
 export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider);