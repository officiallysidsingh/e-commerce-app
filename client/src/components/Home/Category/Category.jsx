import cat1 from "../../../assets/category/cat-1.jpg";

import "./Category.scss";

const Category = () => {
  return (
    <div className="shopByCategory">
      <div className="categories">
        <div className="category">
          <img src={cat1} alt="Category" />
        </div>
        <div className="category">
          <img src={cat1} alt="Category" />
        </div>
        <div className="category">
          <img src={cat1} alt="Category" />
        </div>
        <div className="category">
          <img src={cat1} alt="Category" />
        </div>
      </div>
    </div>
  );
};

export default Category;
