import { initializeApp } from "firebase/app";
import firebaseConfig from "../src/Firebase/Firebase.Config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}


export default initializeAuthentication;