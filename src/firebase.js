// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyATQW7zjr-QI1063yfgzQfx09WmbvWgFto',
  authDomain: 'chat-app-33bdb.firebaseapp.com',
  projectId: 'chat-app-33bdb',
  storageBucket: 'chat-app-33bdb.appspot.com',
  messagingSenderId: '370592289403',
  appId: '1:370592289403:web:a078ec4a1c7655b5fc08de',
  measurementId: 'G-PTBP4VFWSC'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
