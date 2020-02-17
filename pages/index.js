import React from 'react'
import Head from 'next/head'

import Content from '../components/content';
import Cta from '../components/cta';

const Home = () => (
  <div id="home-page">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>

    {/* Need to create reusable components and content */}
    <section id="home">
    
      <div className="splash">

        <div className="left">

          <Content 
            type="content-standard" 
            title="" 
            body="
              We want to see eSports take hold.
            " />
          
        </div>

        <div className="right">
          <Content 
            type="content-card"
            title=""
            body=""
          />
        </div>
        
      </div>

      <div id="articles" className="articles">

        <div className="left">

          <Content
            type="content-minimalist"
            title="Articles"
            body="
              Get new articles written by our
              passionate eSports fans. Think you
              can write? Contact us and give it a go!
            " />

        </div>

        <div className="right">

          <Content
            type="newsfeed"
            title=""
            body=""
          />

        </div>

      </div>

      <div id="news" className="news">
      
      </div>

      <div id="stats" className="stats">
      
      </div>

    </section>

    <style jsx>{`

      // --------- Global ----------

      .section-title {
        position: absolute;
        width: 100%;
        justify-content: center;
        display: flex;
        font-size: 33px;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        margin: 20px 0px;
        color: #3d3d3d;
        flex-direction: column;
        align-items: center;
        text-transform: uppercase;
      }

      .section-title .underline {
        width: 72px;
        height: 1px;
        background-color: #b20101;
      }

    // ------------ HOME SECTION ------------ 

      #home-page {
        height: 100%;
        width: 100%;
      }

      #home {
        height: inherit;
        width: inherit;
      }

      // SPLASH SECTION

      .splash {
        height: 100%;
        width: 100%;
        display: flex;
      }

      .left, .right {
        height: 100%;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .splash .left {
        background-color: #e3e3e3;
      }

      .splash .right {
        background-color: #3d3d3d;
      }

      // ------------ ABOUT SECTION ------------ 

      .articles {
        height: 100%;
        width: 100%;
        background-color: #e3e3e3;
        display: flex;
        position: relative;
      }

      .articles .left {

      }

      .articles .right {
        display: flex;
        flex-direction: column;
      }

      // ------------ NEWS SECTION ------------ 

      .news {
        height: 100%;
        width: 100%;
      }

      // ------------ STATS SECTION ------------ 

      .stats {
        height: 100%;
        width: 100%;
      }

      @media (max-width: 926px) {

        .splash, .articles {
          display: flex;
          flex-direction: column;
        }

        .left, .right {
          height: 50%;
          width: 100%;
        }
      }
    `}</style>
  </div>
)

export default Home
