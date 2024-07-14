import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase";
import {createUserWithEmailAndPassword} from "firebase/auth"
import "../CSS/Login.css";


function Signup() {

  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const register = (e) => {
       e.preventDefault();
    // Firebase register process
      createUserWithEmailAndPassword(auth,email, password)
      .then((auth) => {
        // If the authentication is successful, then it redirects to the home page
        navigate('/login');
      })
      .catch((error) => alert("Account Already Exist"));
  };

  return (
    <div className="login">
      
      <div>
        
      <img
          className="login__logo"
          src="https://1000logos.net/wp-content/uploads/2019/07/Amazon-logo-2000%E2%80%93present.jpg"
          alt="Amazon Logo"
        />
        
      </div>
      
      <div className="login__container">
        <h1>Sign-up</h1>

        <form onSubmit={register}>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            
            className="login__signInButton"
            
          >
            Sign-up
          </button>
        </form>

        <p>
          By signing up you agree to Amazon's conditions of use and sale. Please see our privacy notice, cookies notice, and interest-based ads notice.
        </p>
      </div>
    </div>
  );
}

export default Signup;
