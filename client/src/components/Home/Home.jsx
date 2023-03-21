import Banner from "./Banner/Banner";
import Category from "./Category/Category";

import "./Home.scss";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mainContent">
        <div className="layout">
          <Category />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
