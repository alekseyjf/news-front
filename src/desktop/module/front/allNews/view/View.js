import React from "react";
// import Banner from "./banner/Banner";
import Header from "components/header/Header";
import Footer from "desktop/layouts/front/footer/Footer";
import Aside from "./aside/Aside";
import AllNews from "./allNews/AllNews";

const View = (props) => {
  const {allNews} = props;
    return (
    <div>
      {/*<Banner />*/}
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Aside />
          </div>
          <div className="col-10">
            <AllNews allNews={allNews} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default View;
