import "./Category.scss";

const BASE_URL = import.meta.env.VITE_APP_DEV_URL;

const Category = ({ categories }) => {
  return (
    <div className="shopByCategory">
      <div className="categories">
        {categories?.data?.map((category) => (
          <div key={category.id} className="category">
            <img
              src={BASE_URL + category.attributes.Img.data.attributes.url}
              alt="Category"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
