import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import Products from "../Products/Products";
import "./Category.scss";

const Category = () => {
  const { id } = useParams();

  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );

  return (
    <div className="categoryMainContent">
      <div className="layout">
        <div className="categoryTitle">Category Title</div>
        <Products innerPage={true} />
      </div>
    </div>
  );
};

export default Category;
