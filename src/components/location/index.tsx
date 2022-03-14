import React, { useEffect, useRef, useState } from "react";
import { CloudSvg } from "../../constants";
import "./index.scss";

const Location: React.FC = () => {
  const [isVisit, setIsVisit] = useState<boolean>(false);
  const [isSetClass, setIsClass] = useState<boolean>(false);
  const locationRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleObserver = (entry: IntersectionObserverEntry[]) => {
      if (!isSetClass && entry[0]?.isIntersecting) {
        setIsClass(true);
        setIsVisit(true);
      }
    };
    const intersectionObserver = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    if (locationRef.current) {
      intersectionObserver.observe(locationRef.current);
    }

    return () => {
      if (locationRef.current) {
        intersectionObserver.unobserve(locationRef.current);
      }
    };
  }, [isSetClass, locationRef]);

  const visitClass = isVisit ? "location__cloud--animation" : "";

  return (
    <div className="location" ref={locationRef}>
      <div className="location__content">
        <h1 className="location__title">موقعیت پروژه</h1>
        <p className="location__text">کیش - جنب میدان مرجان - قطعه VC168</p>
      </div>

      <CloudSvg className={`location__cloud ${visitClass}`} />
    </div>
  );
};

export default Location;
