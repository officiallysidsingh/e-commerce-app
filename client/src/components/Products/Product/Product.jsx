import "./Product.scss";

const BASE_URL = import.meta.env.VITE_APP_DEV_URL;

const Product = ({ data, id }) => {
  return (
    <div className="productCard">
      <div className="thumbnail">
        <img
          src={BASE_URL + data.Img.data[0].attributes.url}
          alt="Product Image"
        />
      </div>
      <div className="productDetails">
        <span className="name">{data.Title}</span>
        <span className="price">&#8377;{data.Price}</span>
      </div>
    </div>
  );
};

export default Product;
