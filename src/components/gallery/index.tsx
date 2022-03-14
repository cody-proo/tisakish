import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import {
  GalleryFive,
  GalleryOne,
  GalleryThree,
  GalleryFour,
  GallerySix,
  GallerySeven,
  GalleryTwo,
  GalleryEight,
} from "../../constants";
import "./index.scss";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>();

  const selectImageClicked = (event: React.MouseEvent<HTMLImageElement>) => {
    setSelectedImage(event.currentTarget.src);
  };

  const onCloseSelectedImage = () => {
    setSelectedImage(undefined);
  };

  return (
    <div className="gallery">
      <div className="gallery__header">
        <h1 className="gallery__title">گالری</h1>
      </div>
      <div className="gallery__row">
        <div className="gallery__first">
          <img
            onClick={selectImageClicked}
            src={GalleryOne}
            alt=""
            className="gallery__image"
          />
          <img
            onClick={selectImageClicked}
            src={GalleryThree}
            alt=""
            className="gallery__image"
          />
        </div>

        <div className="gallery__second">
          <div className="gallery__second-sec1">
            <div className="gallery__second-sec2">
              <img
                onClick={selectImageClicked}
                src={GallerySeven}
                alt=""
                className="gallery__image"
              />
              <img
                onClick={selectImageClicked}
                src={GalleryTwo}
                alt=""
                className="gallery__image"
              />
            </div>
            <img
              onClick={selectImageClicked}
              src={GalleryFive}
              alt=""
              className="gallery__image gallery__image-sec1"
            />
          </div>

          <img
            onClick={selectImageClicked}
            src={GalleryEight}
            className="gallery__image gallery__second-sec3"
            alt=""
          />
        </div>

        <div className="gallery__third">
          <img
            src={GallerySix}
            onClick={selectImageClicked}
            alt=""
            className="gallery__image"
          />
          <img
            src={GalleryFour}
            onClick={selectImageClicked}
            alt=""
            className="gallery__image"
          />
        </div>
      </div>
      <div
        className={`gallery__modal ${
          selectedImage ? "gallery__modal--open" : ""
        }`}
        onClick={onCloseSelectedImage}
      >
        <img src={selectedImage} className="gallery__modal-image" alt="" />
        <div className="gallery__modal-close" onClick={onCloseSelectedImage}>
          <BsX />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
