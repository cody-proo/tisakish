import React from "react";
import "./index.scss";

import About from "../components/about";
import Detail from "../components/detail";
import Landing from "../components/landing";
import Location from "../components/location";
import Specefication from "../components/specefication";
import Gallery from "../components/gallery";
import Units from "../components/units";
import Footer from "../components/footer";

const Root: React.FC = () => {
  return (
    <>
      <Landing />
      <About />
      <Detail />
      <Specefication />
      <Location />
      <Gallery />
      <Units />
      <Footer />
    </>
  );
};

export default Root;
