import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCTUI1UP-tU8CsUBq2_KbAZF-pMUzrggA0",
  authDomain: "proyectofinalreactch.firebaseapp.com",
  projectId: "proyectofinalreactch",
  storageBucket: "proyectofinalreactch.appspot.com",
  messagingSenderId: "824402145701",
  appId: "1:824402145701:web:b1fb5391aa9e2f8a63f84c"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
)
