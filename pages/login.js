import React from "react";
import LoginModule from "desktop/module/front/login";

const Login = (props) => {
    return (
        <>
            {LoginModule.getView(props)}
        </>
    )
};

Login.getInitialProps = (ctx, props) => {
  return LoginModule.getServerSideProps(ctx, props);
};

export default Login;
