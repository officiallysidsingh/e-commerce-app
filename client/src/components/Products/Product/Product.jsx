import { useNavigate } from "react-router-dom";

import "./Product.scss";

const BASE_URL = import.meta.env.VITE_APP_DEV_URL;

const Product = ({ data, id }) => {
  const navigate = useNavigate();
  return (
    <div className="productCard" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img
          src={BASE_URL + data.Img.data[0].attributes.url}
          alt={data.Title}
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
