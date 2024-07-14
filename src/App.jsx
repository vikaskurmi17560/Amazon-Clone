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















// import React, { useEffect }   from "react";
// import Home from "./components/Home";
// import {Routes,  Route } from "react-router-dom";
// import Checkout from "./components/Checkout";
// import Login from "./components/Login";
// import Signup from "./components/Signup"
// import { useStateValue } from "./components/StateProvider.jsx";

// import "./App.css";

// function App() {
//   const [{ user }, dispatch] = useStateValue();

//   useEffect(() => {
//     onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         dispatch({
//           type: "SET_USER",
//           user: user,
//         });
//         const basketDoc = await getDoc(doc(db, "baskets", user.uid));
//         if (basketDoc.exists()) {
//           dispatch({
//             type: "SET_BASKET",
//             basket: basketDoc.data().basket,
//           });
//         } else {
//           dispatch({
//             type: "SET_BASKET",
//             basket: [],
//           });
//         }
//       } else {
//         dispatch({
//           type: "SET_USER",
//           user: null,
//         });
//         dispatch({
//           type: "SET_BASKET",
//           basket: [],
//         });
//       }
//     });
//   }, [dispatch]);
 
// return (

//   <div className="app">
 
//   <Routes>
//   <Route path="/" element={<Login />} />
//    <Route path="/home" element={<Home />} />
//    <Route path="/checkout" element={<Checkout />} />
//    <Route path="/signup" element={<Signup />} />
   
//   </Routes>
 
//   </div>
  
// );
// }
// export default App;