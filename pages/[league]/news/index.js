import React from "react";

// import FrontLayout from "desktop/module/front/allNews"
import AllNewsModule from "desktop/module/front/allNews"
// import NewsModule from "desktop/module/admin/news/main"

const News = (props) => {
  const getView = () => {
    return AllNewsModule.getView(props);
    // NewsModule.normalizeInitialProps()
  };

  return (
    <div>
      {getView()}
    </div>
  )
};

News.getInitialProps = async (ctx, props) => {
  return AllNewsModule.getServerSideProps(ctx, props);
};

export default News;
