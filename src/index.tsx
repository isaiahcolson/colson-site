import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const {
  REACT_APP_FIREBASE_APIKEY,
  REACT_APP_FIREBASE_AUTHDOMAIN,
  REACT_APP_FIREBASE_PROJECTID,
  REACT_APP_FIREBASE_STORAGEBUCKET,
  REACT_APP_FIREBASE_MESSAGINGSENDERID,
  REACT_APP_FIREBASE_APPID,
  REACT_APP_FIREBASE_MEASUREMENTID,
} = process.env;

const firebaseConfig = {
  apiKey: { REACT_APP_FIREBASE_APIKEY },
  authDomain: { REACT_APP_FIREBASE_AUTHDOMAIN },
  projectId: { REACT_APP_FIREBASE_PROJECTID },
  storageBucket: { REACT_APP_FIREBASE_STORAGEBUCKET },
  messagingSenderId: { REACT_APP_FIREBASE_MESSAGINGSENDERID },
  appId: { REACT_APP_FIREBASE_APPID },
  measurementId: { REACT_APP_FIREBASE_MEASUREMENTID },
};

// @ts-ignore
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);
