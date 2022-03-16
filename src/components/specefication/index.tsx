import React from "react";
import "./index.scss";

import {
  FireSvg,
  GardenSvg,
  GymSvg,
  HallSvg,
  LabiSvg,
  LandrySvg,
  SystemSvg,
  SonaSvg,
} from "../../constants";

const Specefication: React.FC = () => {
  return (
    <div className="specefication">
      <div className="specefication__content">
        <h1 className="specefication__title">ویژگی ها</h1>
        <div className="specefication__row">
          <div className="specefication__item">
            <GymSvg className="specefication__image" />
            <span className="specefication__text">سالن ورزش</span>
          </div>
          <div className="specefication__item">
            <SonaSvg className="specefication__image" />
            <span className="specefication__text">استخر , سونا , جکوزی</span>
          </div>
          <div className="specefication__item">
            <HallSvg className="specefication__image" />
            <span className="specefication__text">سالن اجتماعات</span>
          </div>
          <div className="specefication__item">
            <LandrySvg className="specefication__image" />
            <span className="specefication__text">لاندری</span>
          </div>
          <div className="specefication__item">
            <SystemSvg className="specefication__image" />
            <span className="specefication__text">سیستم هوشمند خانه</span>
          </div>
          <div className="specefication__item">
            <LabiSvg className="specefication__image" />
            <span className="specefication__text">لابی</span>
          </div>
          <div className="specefication__item">
            <GardenSvg className="specefication__image" />
            <span className="specefication__text">روف گاردن</span>
          </div>
          <div className="specefication__item">
            <FireSvg className="specefication__image" />
            <span className="specefication__text">سیستم اطفاع حریق</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specefication;
