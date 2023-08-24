import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase-config"; // Import your Firebase config




const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
