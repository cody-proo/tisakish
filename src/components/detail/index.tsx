import React from "react";
import "./index.scss";
import { BorjImage } from "../../constants";

const Detail: React.FC = () => {
  return (
    <div className="detail">
      <div className="detail__row">
        <div className="building">
          <h1 className="building__title">مشخصات برج</h1>
          <img className="building__image" src={BorjImage} alt="" />
        </div>
        <ul className="information">
          <li className="information__item">
            <span className="information__value">18</span>
            <span className="information__text">طبقه</span>
          </li>
          <li className="information__item">
            <span className="information__value">131</span>
            <span className="information__text">واحد</span>
          </li>
          <li className="information__item">
            <span className="information__value">19707</span>
            <span className="information__text">متر مربع زیربنای کل</span>
          </li>
          <li className="information__item">
            <span className="information__value">14412</span>
            <span className="information__text">متر مربع زیربنای مفید</span>
          </li>
        </ul>
      </div>
      <div className="detail__area">
        <button className="detail__button">واحد ها</button>
      </div>
    </div>
  );
};

export default Detail;
