import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import ToastContainer from "./ToastContainer";

const Home = () => {
  return (
    <>
      <TopBar />
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;