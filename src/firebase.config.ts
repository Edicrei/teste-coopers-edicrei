import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


let config = {
    apiKey: "AIzaSyCgy7wTRO8DTvgl4rrDI1zgzbIKoDUxSnY",
    authDomain: "nft-cardano-5e819.firebaseapp.com",  
    projectId: "nft-cardano-5e819",  
    storageBucket: "nft-cardano-5e819.appspot.com",  
    messagingSenderId: "21503569153",  
    appId: "1:21503569153:web:fa0781ec6cc8c505d87f00",  
    measurementId: "G-1CVPZKML8M"
  };
  
 
const app = initializeApp(config);
export const auth = getAuth(app);
export const db = getFirestore(app);
  
