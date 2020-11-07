import React from "react";

import Styles from "./style/header.module.scss"

const Header = (props) => {
  return (
    <header className={Styles.header}>
      <div className="logo">
        <img className={Styles['header img']} src="https://png.pngtree.com/png-vector/20190530/ourlarge/pngtree-kick-ball-logo-icon-vector-png-image_1127541.jpg" alt="logo"/>
      </div>
    </header>
  )
};

export default Header;
