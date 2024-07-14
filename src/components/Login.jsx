import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase";
import {signInWithEmailAndPassword} from "firebase/auth"
import "../CSS/Login.css";
import { useUserstore } from "./Store";


function Login() {

  const updateuser=useUserstore((state)=>state.updateuser);
  const user=useUserstore((state)=>state.user);
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) => {
    e.preventDefault();
    
    // Firebase sign-in process
    signInWithEmailAndPassword(auth,email, password)
      .then((auth) => {
        console.log(auth);
        const datauser=auth.user.providerData[0];
        console.log(datauser);
        updateuser(datauser);
        console.log("User is",user);
        // If the authentication is successful, then it redirects to the home page
        navigate('/');
      })
      .catch((error) => alert("Somthing is Wrong, Try Again "));
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
        <h1>Sign-in</h1>

        <form onSubmit={signin}>
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
             className="login__signInButton">
            Sign-in
          </button>
        </form>

        <p>
          By signing in you agree to Amazon's conditions of use and sale. Please see our privacy notice, cookies notice, and interest-based ads notice.
        </p>

        <button className="login__registerButton" onClick={()=>navigate('/signup')}>
          Create Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
