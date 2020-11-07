import React from "react";

// import Head from 'next/head'
import Header from "./header/Header";
import Aside from "../../../components/admin/aside/Aside";
import Styles from "./style/AdminLayout.module.scss";

const AdminLayout = (props) => {
  return (
    <section>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Aside />
          </div>
          <div className="col-9">
            <main className={`w-100 ${Styles.main}`}>
              {props.children}
            </main>
          </div>
        </div>
      </div>
    </section>
  )
};


export default AdminLayout;