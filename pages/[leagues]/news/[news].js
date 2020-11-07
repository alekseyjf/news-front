import React from "react";

import AdminLayout from "desktop/layouts/admin/layout"
import NewsModule from "desktop/module/admin/news/main"

const News = (props) => {
  console.log(props);
  const getView = () => {
    return NewsModule.getView(props);
    // NewsModule.normalizeInitialProps()
  };

  return (
    <div>
      Front
    </div>
  )
};

News.getInitialProps = async (ctx, props) => {
  return NewsModule.getServerSideProps(ctx, props);
};

export default News;
