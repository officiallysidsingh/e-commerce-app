import Product from "./Product/Product";

import "./Products.scss";

const Products = () => {
  return (
    <div className="productsContainer">
      <div className="sectionHeading">Section Heading</div>
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
