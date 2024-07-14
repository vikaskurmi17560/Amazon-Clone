import React from "react";
import "../CSS/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link,useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider.jsx";
import { signOut } from 'firebase/auth';
import { auth } from "../Firebase/Firebase.jsx"
import { useUserstore } from "./Store.js";

function Header() {
  const navigate = useNavigate();
  const user=useUserstore((state)=>state.user);
  const updateuser=useUserstore((state)=>state.updateuser);
  const handleSignOut = () => {
    
    signOut(auth).then(() => {
      // Sign-out successful.
      updateuser(null);
      navigate(0);
    }).catch((error) => {
      // An error happened.
      console.error('Error signing out: ', error);
    });
  };


  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">

      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
       {
        user?(
          <div className="header__option">
            <span className="header__optionLineOne">Hello User</span>
            <span style={{cursor:"pointer"}} className="header__optionLineTwo" onClick={handleSignOut } >Sign Out</span>
          </div>
        ):(<Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello User</span>
            <span className="header__optionLineTwo" >Sign in</span>
          </div>
        </Link>)
       }

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to='/checkout'>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
