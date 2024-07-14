import React   from "react";
import Home from "./components/Home";
import {Routes,  Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Signup from "./components/Signup"

function App() {
 
return (

  <div className="app">
 
  <Routes>
  <Route path="/login" element={<Login />} />
   <Route path="/" element={<Home />} />
   <Route path="/checkout" element={<Checkout />} />
   <Route path="/signup" element={<Signup />} />
   
  </Routes>
 
  </div>
  
);
}
export default App;
