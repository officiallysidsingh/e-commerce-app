import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { MdClose } from "react-icons/md";

import useFetch from "../../../hooks/useFetch";

import "./Search.scss";

const BASE_URL = import.meta.env.VITE_APP_DEV_URL;

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }
  return (
    <div className="searchModal">
      <div className="formField">
        <input
          type="text"
          autoFocus
          placeholder="Search for products...."
          value={query}
          onChange={handleChange}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="searchResultContent">
        <div className="searchResults">
          {data?.data?.map((item) => (
            <div
              key={item.id}
              className="searchResultItem"
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
              }}
            >
              <div className="imgContainer">
                <img
                  src={BASE_URL + item.attributes.Img.data[0].attributes.url}
                  alt={item.attributes.Title}
                />
              </div>
              <div className="prodDetails">
                <span className="name">{item.attributes.Title}</span>
                <span className="desc">{item.attributes.Description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
