import React from "react";
import './index.scss';
import { BsX } from "react-icons/bs";

interface Props {
  isOpenMenu: boolean;
  onCloseMenu: () => void;
}

const MobileMenu: React.FC<Props> = ({ isOpenMenu, onCloseMenu }) => {
  const menuClass = isOpenMenu ? "menu--open" : "";
  const menuItemClass = isOpenMenu ? "menu__list--open" : "";
  return (
    <div className={`menu ${menuClass}`}>
      <div className="menu__icon" onClick={onCloseMenu}>
        <BsX />
      </div>
      <ul className={`menu__list ${menuItemClass}`}>
        <li className="menu__item">
          <a href="#home" className="menu__link">
            خانه ها
          </a>
        </li>
        <li className="menu__item">
          <a href="#units" className="menu__link">
            واحد ها
          </a>
        </li>
        <li className="menu__item">
          <a href="#about" className="menu__link">
            درباره ما
          </a>
        </li>
        <li className="menu__item">
          <a href="#contact" className="menu__link">
            تماس با ما
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
