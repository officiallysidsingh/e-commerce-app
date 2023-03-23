import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";

import "./Search.scss";

const Search = ({ setShowSearch }) => {
  return (
    <div className="searchModal">
      <div className="formField">
        <input type="text" autoFocus placeholder="Search for products...." />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="searchResultContent">
        <div className="searchResults">
          <div className="searchResultItem">
            <div className="imgContainer">
              <img src={prod} alt="product" />
            </div>
            <div className="prodDetails">
              <span className="name">Product Name</span>
              <span className="desc">Product Desc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
