import React from "react";
import "./index.scss";

const DesktopMenu: React.FC = () => {
  return (
    <ul className="desktop-menu">
      <li className="desktop-menu__item">
        <a href="#home" className="desktop-menu__link">
          خانه
        </a>
      </li>
      <li className="desktop-menu__item">
        <a href="#units" className="desktop-menu__link">
          واحد ها
        </a>
      </li>
      <li className="desktop-menu__item">
        <a href="#about" className="desktop-menu__link">
          درباره ما
        </a>
      </li>
      <li className="desktop-menu__item">
        <a href="#contact" className="desktop-menu__link">
          تماس با ما
        </a>
      </li>
    </ul>
  );
};

export default DesktopMenu;
