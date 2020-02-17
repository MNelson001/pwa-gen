import App from 'next/app';
import React from 'react';
import GlobalLayout from '../components/global-layout';

class PwaGen extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <GlobalLayout>
                <Component {...pageProps} />
            </GlobalLayout>
        )
    }
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default PwaGen