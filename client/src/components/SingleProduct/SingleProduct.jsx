import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-1.webp";

import "./SingleProduct.scss";

const SingleProduct = () => {
  return (
    <div className="singleProductMainContent">
      <div className="layout">
        <div className="singleProductPage">
          <div className="left">
            <img src={prod} alt="Product Image" />
          </div>
          <div className="right">
            <span className="name">Product Name</span>
            <span className="price">Price</span>
            <span className="desc">Product Description</span>

            <div className="cartButtons">
              <div className="quantityButtons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className="addToCartButton">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />

            <div className="infoItem">
              <span className="textBold">
                Category:
                <span> Headphones</span>
              </span>
              <span className="textBold">
                Share:
                <span className="socialIcons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
