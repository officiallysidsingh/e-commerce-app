import Products from "../Products/Products";

import "./Category.scss";

const Category = () => {
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
