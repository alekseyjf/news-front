import React from "react";

import { useRouter } from 'next/router'

import AdminLayout from "desktop/layouts/admin/layout"
import Link from "../../../../../src/components/link/Link";
import CreateNews from "../../../../../src/desktop/module/admin/news/create";

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
  const edit = ctx.query.edit;
  const league = ctx.query.league;
  console.log(`http://localhost:5000/admin/${league}/news/edit/${edit}`);
  const res = await fetch(`http://localhost:5000/admin/${league}/news/edit/${edit}`);
  const editNews = await res.json();

  return editNews
};

export default EditNews;
