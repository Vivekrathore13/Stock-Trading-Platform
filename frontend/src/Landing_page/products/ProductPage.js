import React from "react";

import Hero from "./Hero";
import Leftimg from "./Leftimg";
import Rightimg from "./Rightimg";
import Universe from "./Universe";

import Navbar from "../Navbar";
import Footer from "../Footer";

function ProductPage() {
  return (
    <>
      <Hero />

      {/* Kite */}
      <Leftimg
        imageURL="Media/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, elegant UI, and more. Available seamlessly on both web and mobile."
        tryDemo="https://kite-demo.zerodha.com/"
        learnMore="https://zerodha.com/products/kite"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/in/app/kite-by-zerodha/id1449453802"
      />

      {/* Console */}
      <Rightimg
        imageURL="Media/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports, visualisations, and analytics."
        learnMore="https://zerodha.com/products/console"
      />

      {/* Coin */}
      <Leftimg
        imageURL="Media/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, completely commission-free, and have them delivered directly to your Demat account. Accessible on both web and mobile."
        tryDemo="https://coin.zerodha.com/"
        learnMore="https://zerodha.com/products/coin"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        appStore="https://apps.apple.com/in/app/coin-by-zerodha/id1449453730"
      />

      {/* Kite Connect */}
      <Rightimg
        imageURL="Media/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, you can even showcase your apps to our client base."
        learnMore="https://kite.trade/"
      />

      {/* Varsity */}
      <Leftimg
        imageURL="Media/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy-to-grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-sized cards to help you learn on the go."
        tryDemo="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        learnMore="https://zerodha.com/varsity"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1493257302"
      />

      {/* Blog link */}
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack?{" "}
        <a
          href="https://zerodha.tech"
          className="text-primary fw-semibold"
          style={{ textDecoration: "none" }}
        >
          Check out the Zerodha.tech blog →
        </a>
      </p>

      <Universe />
      <Footer />
    </>
  );
}

export default ProductPage;
