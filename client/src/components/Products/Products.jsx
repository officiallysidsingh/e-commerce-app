import Product from "./Product/Product";

import "./Products.scss";

const Products = ({ innerPage }) => {
  return (
    <div className="productsContainer">
      {!innerPage ? (
        <div className="sectionHeading">Section Heading</div>
      ) : null}
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
