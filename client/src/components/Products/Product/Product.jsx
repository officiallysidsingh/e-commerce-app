import prod from "../../../assets/products/earbuds-prod-1.webp";

import "./Product.scss";

const Product = () => {
  return (
    <div className="productCard">
      <div className="thumbnail">
        <img src={prod} alt="Product Image" />
      </div>
      <div className="productDetails">
        <span className="name">Product Name</span>
        <span className="price">&#8377;499</span>
      </div>
    </div>
  );
};

export default Product;
