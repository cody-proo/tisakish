import React, { useState } from "react";
import {
  AirSvg,
  BedSvg,
  BoxSvg,
  CabinetSvg,
  DoorSvg,
  GallerySeven,
  InfoSvg,
  Plan1,
  Plan2,
  Plan3,
  Plan4,
  Plan5,
  Plan6,
  Plan7,
  Plan8,
  Slider1,
  Slider2,
  Slider3,
  SquareSvg,
  TableSvg,
  TouchSvg,
  WallSvg,
} from "../../constants";
import "./index.scss";

import SlickSlider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BsX } from "react-icons/bs";

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div className="slider__arrow slider__arrow--left" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div className="slider__arrow slider__arrow--right" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const unitsGallery = [
  Slider1,
  Slider2,
  Slider3,
  GallerySeven,
  Slider1,
  GallerySeven,
  Slider2,
  Slider3,
  Slider3,
  GallerySeven,
  Slider1,
];

const slickOptions: Settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  centerPadding: "10px",
  draggable: true,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  rtl: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        arrows: false,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};

const unitsName = [
  "واحد 1",
  "واحد 2",
  "واحد 3",
  "واحد 4",
  "واحد 5",
  "واحد 6",
  "واحد 7",
  "واحد 8",
];

const unitsLists = [
  {
    name: "واحد 1",
    area: 120,
    room: 1,
    masterRoom: 1,
    model: "https://panel.polygony.ir/model/6223796927f147048e90fca8",
    plan: Plan1,
  },
  {
    name: "واحد 2",
    area: 180,
    room: 2,
    masterRoom: 10,
    model: "https://panel.polygony.ir/model/6223796927f147048e90fca8",
    plan: Plan2,
  },
  {
    name: "واحد 3",
    area: 200,
    room: 3,
    masterRoom: 220,
    model: "https://panel.polygony.ir/model/6223796927f147048e90fca8",
    plan: Plan3,
  },
  {
    name: "واحد 4",
    area: 220,
    room: 4,
    masterRoom: 300,
    model: "https://panel.polygony.ir/model/6223796927f147048e90fca8",
    plan: Plan4,
  },
  {
    name: "واحد 5",
    area: 240,
    room: 5,
    masterRoom: 400,
    model: "https://panel.polygony.ir/model/6223796927f147048e90fca8",
    plan: Plan5,
  },
  {
    name: "واحد 6",
    area: 260,
    room: 6,
    masterRoom: 500,
    model: "https://panel.polygony.ir/model/6223796927f147048e90fca8",
    plan: Plan6,
  },
  {
    name: "واحد 7",
    area: 280,
    room: 7,
    masterRoom: 600,
    model: "https://panel.polygony.ir/model/6223796927f147048e90fca8",
    plan: Plan7,
  },
  {
    name: "واحد 8",
    area: 300,
    room: 8,
    masterRoom: 700,
    model: "https://panel.polygony.ir/model/6223796927f147048e90fca8",
    plan: Plan8,
  },
];

const Units: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>();
  const isOpenClassModal = selectedPlan ? "units__modal--open" : "";
  const [selectedUnits, setSelectedUnits] = useState<number>(0);

  const handleSelectedPlan = (plan: string) => {
    setSelectedPlan(plan);
  };

  const handleCloseModal = () => {
    setSelectedPlan(undefined);
  };

  const handleSelectedUnits = (index: number) => {
    setSelectedUnits(index);
  };

  return (
    <div className="units" id="units">
      <h1 className="units__title">واحد ها</h1>
      <ul className="units__lists">
        {unitsName.map((unitItem, unitItemIndex) => (
          <li
            className={`units__item ${
              unitItemIndex === selectedUnits ? "units__item--active" : ""
            }`}
            onClick={handleSelectedUnits.bind(null, unitItemIndex)}
          >
            {unitItem}
          </li>
        ))}
      </ul>
      <div className="building">
        {unitsLists.map((unitItem, unitIndex) => {
          if (unitIndex === selectedUnits) {
            return (
              <>
                <div className="building__detail">
                  <span className="building__text building__text--bold">
                    {unitItem.name}
                  </span>
                  <span className="building__text">
                    {unitItem.area} متر مربع
                  </span>
                  <span className="building__text">{unitItem.room} خواب</span>
                  <span className="building__text">
                    {unitItem.masterRoom} خواب مستر
                  </span>
                </div>

                <div className="building__3d">
                  <button
                    className="building__3d-btn"
                    onClick={handleSelectedPlan.bind(null, unitItem.plan)}
                  >
                    مشاهده پلان
                  </button>
                  <embed
                    height={"100%"}
                    width={"100%"}
                    className="building__view"
                    src={unitItem.model}
                  />
                </div>

                <div className="building__info">
                  <TouchSvg className="building__touch" />
                  <p className="building__info-title">
                    برای بازدید مجازی و قدم زدن در واحد روی تصویر بالا کلیک کنید
                  </p>
                </div>
              </>
            );
          }
        })}
      </div>

      <div className="features">
        <div className="features__header">
          <InfoSvg className="features__icon" />
          ویژگی ها
        </div>

        <div className="features__row">
          <div className="features__item">
            <SquareSvg className="features__item-icon" />
            <span className="features__text">120 متر مربع</span>
          </div>
          <div className="features__item">
            <TableSvg className="features__item-icon" />
            <span className="features__text">کفپوش سرامیک</span>
          </div>
          <div className="features__item">
            <WallSvg className="features__item-icon" />
            <span className="features__text">دیوار ها : عایق حرارت و صدا</span>
          </div>
          <div className="features__item">
            <CabinetSvg className="features__item-icon" />
            <span className="features__text">
              کابینت : هایگلس - بدون دستگیره
            </span>
          </div>
          <div className="features__item">
            <BedSvg className="features__item-icon" />
            <span className="features__text">2 خواب - 1 خواب مستر</span>
          </div>
          <div className="features__item">
            <DoorSvg className="features__item-icon" />
            <span className="features__text">درب ضد سرقت</span>
          </div>
          <div className="features__item">
            <BoxSvg className="features__item-icon" />
            <span className="features__text">
              کمد ها : باکس - طبقه بندی شده
            </span>
          </div>
          <div className="features__item">
            <AirSvg className="features__item-icon" />
            <span className="features__text">سرمایش و گرمایش</span>
          </div>
        </div>
      </div>

      <div className="slider">
        <SlickSlider {...slickOptions}>
          {unitsGallery.map((element, index) => (
            <div key={index}>
              <img className="slider__image" alt="" src={element} />
            </div>
          ))}
        </SlickSlider>
      </div>

      <div
        className={`units__modal ${isOpenClassModal}`}
        onClick={handleCloseModal}
      >
        <div className="units__modal-close">
          <BsX />
        </div>
        <img className="units__modal-img" src={selectedPlan} alt="" />
      </div>
    </div>
  );
};

export default Units;
