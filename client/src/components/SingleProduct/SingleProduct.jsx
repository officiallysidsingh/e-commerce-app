import { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import useFetch from "../../hooks/useFetch";
import { Context } from "../../utils/context";

import "./SingleProduct.scss";

const BASE_URL = import.meta.env.VITE_APP_DEV_URL;

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  const { handleAddToCart } = useContext(Context);

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  if (!data) return;
  const product = data.data[0].attributes;
  return (
    <div className="singleProductMainContent">
      <div className="layout">
        <div className="singleProductPage">
          <div className="left">
            <img
              src={BASE_URL + product.Img.data[0].attributes.url}
              alt={product.Title}
            />
          </div>
          <div className="right">
            <span className="name">{product.Title}</span>
            <span className="price">&#8377;{product.Price}</span>
            <span className="desc">{product.Description}</span>

            <div className="cartButtons">
              <div className="quantityButtons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="addToCartButton"
                onClick={() => {
                  handleAddToCart(data.data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />

            <div className="infoItem">
              <span className="textBold">
                Category:{" "}
                <span>{product.categories.data[0].attributes.Title}</span>
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
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
