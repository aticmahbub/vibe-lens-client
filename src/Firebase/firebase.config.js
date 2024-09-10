import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD57YHa-MD6i2ooTqPih5Z_kHt1ukP1aNg",
  authDomain: "vibe-lens.firebaseapp.com",
  projectId: "vibe-lens",
  storageBucket: "vibe-lens.appspot.com",
  messagingSenderId: "266153054030",
  appId: "1:266153054030:web:a30eae10fbe4ea74c6981f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth