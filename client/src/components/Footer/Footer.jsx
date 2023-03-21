import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo eaque ipsa quae ab illo.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="cItem">
            <FaLocationArrow />
            <div className="text">
              Main Rd, Chira Chas, Bokaro Steel City, Jharkhand, 827013
            </div>
          </div>
          <div className="cItem">
            <FaMobileAlt />
            <div className="text">Phone: 8340 528 530</div>
          </div>
          <div className="cItem">
            <FaEnvelope />
            <div className="text">Email: siddharthsingh2014@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottomBar">
        <div className="bottomBarContent">
          <div className="text">
            SID-ECOM-STORE 2023 CREATED BY SIDDHARTH SINGH. PREMIUM E-COMMERCE
            SOLUTIONS.
          </div>
          <img src={Payment} alt="Accepted Payment Methods" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
