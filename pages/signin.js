import React from "react";
import SigninModule from "desktop/module/front/signin"

const Signin = (props) => {
    return (
        <>
          {SigninModule.getView(props)}
        </>
    )
};

Signin.getInitialProps = (ctx, props) => {
  return SigninModule.getServerSideProps(ctx, props);
};

export default Signin;
