import { useEffect } from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";

import "./Home.scss";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";

const Home = () => {
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) =>
      console.log(res)
    );
  };

  return (
    <div>
      <Banner />
      <div className="mainContent">
        <div className="layout">
          <Category />
          <Products headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
