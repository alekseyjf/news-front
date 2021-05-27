import React from "react";
import SignupModule from "desktop/module/front/signup";

const Signup = (props) => {
    return (
        <>
            {SignupModule.getView(props)}
        </>
    )
};

Signup.getInitialProps = (ctx, props) => {
  return SignupModule.getServerSideProps(ctx, props);
};

export default Signup;
