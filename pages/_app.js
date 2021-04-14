import React from "react"
import '../styles/globals.scss'
import Head from "next/dist/next-server/lib/head";
import { useRouter } from 'next/router'
// import dotenv from 'dorenv';

import getConfig from 'next/config';

const MyApp = (props) => {
  let { Component, hasError, pageProps, pageInfo } = props;
  console.log(getConfig());
  // console.log(props);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
};

export default MyApp
