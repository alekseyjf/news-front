import React from "react"
import '../styles/globals.scss'
import Head from "next/dist/next-server/lib/head";
import { useRouter } from 'next/router'

const MyApp = (props) => {
  let { Component, hasError, pageProps, pageInfo } = props;
    console.log(props);
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
