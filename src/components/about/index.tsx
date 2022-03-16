import React from "react";
import "./index.scss";

const About: React.FC = () => {
  return (
    <div className="about" id="about">
      <div className="about__content">
        <h1 className="about__title">درباره پروژه</h1>
        <p className="about__desc">
          شرکت تیسا کیش اقدام به ساخت پروژه ای به مساحت 82,113 متر مربع در قالب
          5 برج 18 طبقه جمعا به تعداد 655 واحد مسکونی در ساحل مرجان جزیزه کیش
          نموده است
        </p>
        <p className="about__desc">
          محوطه فاز برج ها به مساحت 36,000 متر مربع به همراه فضای سبز مناسب است
          . طراحی برج ها به صورت مثلث شکل میباشد و به گونه ای قرار گرفته اند که
          همه واحد ها چشم اندازی زیبا از خلیج فارس و جزیزه داشته باشد
        </p>
      </div>
    </div>
  );
};

export default About;
