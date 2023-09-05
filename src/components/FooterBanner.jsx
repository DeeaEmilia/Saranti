import { Link } from "react-router-dom";
import { urlFor } from "../helpers/client";

const FooterBanner = ({ footerBanner }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{footerBanner.discount}</p>
          <h3>{footerBanner.largeText1}</h3>
          <h3>{footerBanner.largeText2}</h3>
          <p>{footerBanner.saleTime}</p>
        </div>
        <div className="right">
          <p>{footerBanner.smallText}</p>
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.description}</p>
          <Link to={`/product/${footerBanner.product}`}>
            <button className="btn">{footerBanner.buttonText}</button>
          </Link>
        </div>
        {footerBanner.image && (
          <img
            src={urlFor(footerBanner.image).url()}
            className="footer-banner-image"
          />
        )}
      </div>
    </div>
  );
};

export default FooterBanner;
