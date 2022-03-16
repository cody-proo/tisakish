import React, { useState } from "react";
import "./index.scss";
import MobileMenu from "../mobile-menu";
import { FaBars } from "react-icons/fa";
import DesktopMenu from "../desktop-menu";



import { TisaLogo, TisaSvg } from "../../constants";

const Landing: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const onOpenMenu = () => setIsOpenMenu(true);
  const onCloseMenu = () => setIsOpenMenu(false);

  return (
    <div className="landing" id="home">
      <div className="landing__header">
        <div className="landing__icon" onClick={onOpenMenu}>
          <FaBars />
        </div>
        <DesktopMenu />
        <TisaLogo className="landing__logo" />
      </div>

      <div className="landing__content">
        <div className="landing__detail">
          <div className="landing__detail-icon">
            <TisaSvg />
          </div>
          <h1 className="landing__fa-title">رویای کیش</h1>
          <h1 className="landing__en-title">Royaye Kish</h1>
        </div>
      </div>

      <MobileMenu isOpenMenu={isOpenMenu} onCloseMenu={onCloseMenu} />
    </div>
  );
};

export default Landing;
