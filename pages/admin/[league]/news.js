import React from "react";

import AdminLayout from "desktop/layouts/admin/layout"
import NewsModule from "desktop/module/admin/news/main"

const News = (props) => {
  const getView = () => {
    return NewsModule.getView(props);
    // NewsModule.normalizeInitialProps()
  };

  return (
    <AdminLayout>
      {getView()}
    </AdminLayout>
  )
};

News.getInitialProps = async (ctx, props) => {
  return NewsModule.getServerSideProps(ctx, props);
};

export default News;
