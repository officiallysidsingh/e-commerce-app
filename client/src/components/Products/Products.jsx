import Product from "./Product/Product";

import "./Products.scss";

const Products = ({ products, innerPage, headingText }) => {
  return (
    <div className="productsContainer">
      {!innerPage ? <div className="sectionHeading">{headingText}</div> : null}
      <div className="products">
        {products?.data?.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Products;
