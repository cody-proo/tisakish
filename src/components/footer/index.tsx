import React from "react";
import { BsLaptop } from "react-icons/bs";
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TisaLogo } from "../../constants";
import "./index.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__content">
        <div className="footer__about">
          <ul className="footer__list">
            <li className="footer__item">دفتر تهران</li>
            <li className="footer__item">
              میدان آرژانتین, خیابان بخارست , خیابان هشتم , پلاک 11 , طبقه اول
            </li>
            <li className="footer__item">شماره تماس 88528608-10</li>
            <li className="footer__item">دورنگار 88505344</li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">دفتر کیش</li>
            <li className="footer__item">
              جزیره کیش, میدان ساحل, جنب ساختمان VC144 انفورماتیک, قطعه
            </li>
            <li className="footer__item">شماره تماس 44421750-6</li>
            <li className="footer__item">دورنگار 44424031</li>
          </ul>
        </div>
        <div className="footer__contact">
          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <TisaLogo />
            </li>
            <li className="footer__contact-item">
              <a
                href="mailto:info@tisakish.com"
                className="footer__contact-icon"
              >
                <FaEnvelope className="footer__contact-svg" />
              </a>
              <a href="http://www.instagram.com/tisa.kish" className="footer__contact-icon">
                <FaInstagram className="footer__contact-svg" />
              </a>
              <a href="http://tisakish.com" className="footer__contact-icon">
                <BsLaptop className="footer__contact-svg" /> 
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__detail">
        <p className="footer__text">
          کلیه حقوق این وب سایت متعلق به شرکت تیسا کیش میباشد
        </p>
      </div>
    </footer>
  );
};

export default Footer;
