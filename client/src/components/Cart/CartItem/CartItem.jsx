import { useContext } from "react";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";

import "./CartItem.scss";

import { Context } from "../../../utils/context";

const BASE_URL = import.meta.env.VITE_APP_DEV_URL;

const CartItem = () => {
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);
  return (
    <div className="cartProducts">
      {cartItems.map((item) => (
        <div key={item.id} className="cartProduct">
          <div className="imgContainer">
            <img
              src={BASE_URL + item.attributes.Img.data[0].attributes.url}
              alt="product"
            />
          </div>
          <div className="prodDetails">
            <span className="name">{item.attributes.Title}</span>
            <MdClose
              className="closeBtn"
              onClick={() => handleRemoveFromCart(item)}
            />
            <div className="quantityButtons">
              <span onClick={() => handleCartProductQuantity("dec", item)}>
                -
              </span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProductQuantity("inc", item)}>
                +
              </span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">&#8377;{item.attributes.Price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
