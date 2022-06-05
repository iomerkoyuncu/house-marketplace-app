// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDZLU-zEE7DecBCEwt9-7u6wAS0UjFyq1I",
	authDomain: "house-marketplace-app-b0890.firebaseapp.com",
	projectId: "house-marketplace-app-b0890",
	storageBucket: "house-marketplace-app-b0890.appspot.com",
	messagingSenderId: "436934703050",
	appId: "1:436934703050:web:b31ee5eb07f7a2f87ec133",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
