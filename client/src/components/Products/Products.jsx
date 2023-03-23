import Product from "./Product/Product";

import "./Products.scss";

const Products = ({ innerPage, headingText }) => {
  return (
    <div className="productsContainer">
      {!innerPage ? <div className="sectionHeading">{headingText}</div> : null}
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
