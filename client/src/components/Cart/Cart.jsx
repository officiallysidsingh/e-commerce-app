import { useContext } from "react";
import { Context } from "../../utils/context";

import CartItem from "./CartItem/CartItem";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import "./Cart.scss";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);
  return (
    <div className="cartPanel">
      <div className="opacLayer"></div>
      <div className="cartContent">
        <div className="cartHeader">
          <span className="heading">Shopping Cart</span>
          <span className="closeBtn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>

        {!cartItems?.length ? (
          <div className="emptyCart">
            <BsCartX />
            <span>No products in the cart.</span>
            <button className="returnCta">RETURN TO SHOP</button>
          </div>
        ) : (
          <>
            <CartItem />
            <div className="cartFooter">
              <div className="subtotal">
                <span className="text">Subtotal: </span>
                <span className="text total">&#8377;{cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkoutCta">Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
