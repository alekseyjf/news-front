import React from "react";
import Banner from "./banner/Banner";
import Header from "components/header/Header";
import Footer from "desktop/layouts/front/footer/Footer";
import Aside from "./aside/Aside";
import MainNews from "./mainNews/MainNews";
import LatestNews from "./latestNews/LatestNews";

const View = (props) => {
  const {mainNews} = props;
  const {latestNews} = props;

    return (
    <div>
      <Banner />
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Aside />
          </div>
          <div className="col-10">
            <MainNews mainNews={mainNews} />

            <LatestNews latestNews={latestNews} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default View;
