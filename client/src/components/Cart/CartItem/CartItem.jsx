import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";

import "./CartItem.scss";

const CartItem = () => {
  return (
    <div className="cartProducts">
      <div className="cartProduct">
        <div className="imgContainer">
          <img src={prod} alt="product" />
        </div>
        <div className="prodDetails">
          <span className="name">Product Name</span>
          <MdClose className="closeBtn" />
          <div className="quantityButtons">
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>x</span>
            <span className="highlight">&#8377;4567</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
