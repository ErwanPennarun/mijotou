import React from "react";
import Head from "next/head.js";
import Footer from "./Footer.js";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Les recettes les plus chaudes de ta région.</title>
        <meta
          name="description"
          content="Les meilleures recettes de ta région !"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800;900;1000&family=Montserrat:wght@300;400;500;600&family=Raleway:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className="mt-12">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
