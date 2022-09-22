// Import the functions you need from the SDKs you need
import { initializeApp ,getApps ,getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrH0Gen5cfOuDYsxevqe9HeSyd46Xf3U0",
  authDomain: "instagram-v2-43940.firebaseapp.com",
  projectId: "instagram-v2-43940",
  storageBucket: "instagram-v2-43940.appspot.com",
  messagingSenderId: "929944514805",
  appId: "1:929944514805:web:4d5bc084fe9e6d46f555bc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();

export {app,db,storage};  

