import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { initializeApp } from "firebase/app";
import { BrowserRouter } from "react-router-dom";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAzuxugr1oTF6v2quypKbsRevV3tPMCTkc",
  authDomain: "colson-site.firebaseapp.com",
  projectId: "colson-site",
  storageBucket: "colson-site.appspot.com",
  messagingSenderId: "250577896892",
  appId: "1:250577896892:web:c77bd5d99273b2989157b9",
  measurementId: "G-WM678XZMPG",
};

// @ts-ignore
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
