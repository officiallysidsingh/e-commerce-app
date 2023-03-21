import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletterSection">
      <div className="newsletterContent">
        <span className="smallText">Newsletter</span>
        <span className="bigText">Sign up for latest updates and offers</span>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be used in accordance with our Privacy Policy
        </div>
        <div className="socialIcons">
          <div className="icon">
            <FaLinkedin size={14} />
          </div>
          <div className="icon">
            <FaGithub size={14} />
          </div>
          <div className="icon">
            <SiHashnode size={14} />
          </div>
          <div className="icon">
            <FaTwitter size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
