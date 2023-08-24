import "../routes/SignUpStyles.css";
import React, { useState } from "react";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import { Login } from "../Login";
import { Register } from "../Register";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { auth } from "..//firebase-config";

function SignUp() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <>
      <div className="Signup">
        {currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>

      <Navbar />
      <Footer />
    </>
  );
}

export default SignUp;
