import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_BPAGRANK_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_BPAGRANK_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_BPAGRANK_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_BPAGRANK_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_BPAGRANK_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_BPAGRANK_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
