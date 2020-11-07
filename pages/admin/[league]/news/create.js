import React from "react";

import AdminLayout from "../../../../src/desktop/layouts/admin/layout"
import CreateNews from "../../../../src/desktop/module/admin/news/create/index";

const News = (props) => {
  const getView = (props) => {
    return CreateNews.getView(CreateNews.normalizeInitialProps(props));
  }

  return (
    <AdminLayout>
      {getView(props)}
    </AdminLayout>
  )
};

News.getInitialProps = (ctx, props) => {
  return CreateNews.getServerSideProps(ctx, props);
};

export default News;
