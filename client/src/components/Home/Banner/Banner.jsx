import BannerImg from "../../../assets/banner-img.png";

import "./Banner.scss";

const Banner = () => {
  return (
    <div className="heroBanner">
      <div className="content">
        <div className="textContent">
          <h1>SALES</h1>
          <p>
            Convallis interdum purus adipiscing dis parturient posuere ac a quam
            a eleifend montes parturient posuere curae tempor
          </p>
          <div className="ctas">
            <div className="bannerCta">Read More</div>
            <div className="bannerCta v2">Shop Now</div>
          </div>
        </div>
        <img className="bannerImg" src={BannerImg} alt="Banner Image" />
      </div>
    </div>
  );
};

export default Banner;
