import React from 'react';
import "../CSS/Checkout.css";
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from "./StateProvider";
import Header from './Header';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div>
            <Header />
            <div className="checkout">
            <div className="checkout-left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Smallappliances/Adhoc/cookingdays_pc_header.jpg" alt="" className="checkout-ad" />
                <div>
                    <h2 className="checkout__title"> Your Shopping Basket </h2>
             
           {basket.map(item => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
                </div>
            </div>
            <div className="checkout-right">
            <Subtotal />
            </div>
        </div>
        </div>
    )
}

export default Checkout;
