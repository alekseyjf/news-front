import React from "react";

import AdminLayout from "desktop/layouts/admin/layout"
import Link from "components/link/Link";
import CreateNews from "desktop/module/admin/news/create";

const EditNews = (props) => {
  const getView = () => {
    return CreateNews.getView(props);
  };

  return (
    <AdminLayout>
      <Link to="/admin/champions-league/news/">Вернуться к постам</Link>
      {getView()}
    </AdminLayout>
  )
};

EditNews.getInitialProps = async (ctx, props) => {
  const {edit, league} = ctx.query;
  const res = await fetch(`http://localhost:5000/admin/${league}/news/edit/${edit}`);
  const editNews = await res.json();

  return editNews
};

export default EditNews;
