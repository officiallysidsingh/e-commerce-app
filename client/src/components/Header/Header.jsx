import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context.jsx";

import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const { cartCount } = useContext(Context);

  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`mainHeader ${scrolled ? "stickyHeader" : ""}`}>
        <div className="headerContent">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            SID-TECH-STORE
          </div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <span className="cartIcon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {cartCount > 0 ? <span>{cartCount}</span> : null}
            </span>
          </div>
        </div>
      </header>
      {showCart ? <Cart setShowCart={setShowCart} /> : null}
      {showSearch ? <Search setShowSearch={setShowSearch} /> : null}
    </>
  );
};

export default Header;
