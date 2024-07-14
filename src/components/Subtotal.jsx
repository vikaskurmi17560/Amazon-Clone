import React from 'react';
import "../CSS/Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider.jsx";
import { getBasketTotal } from "./Reducer.jsx";

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
        <CurrencyFormat
         renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> this order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeperator={true}
          prefix={"$"}
        />
          <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
