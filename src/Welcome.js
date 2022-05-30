import React from "react";
import "./Scss/style.scss";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className="image img1"></div>
      {/* <div className="bgimg-1"></div> */}
      <div className="image img2"></div>
      {/* <div className="bgimg-1"></div> */}
      <div className="image img3"></div>
      {/* <div className="bgimg-1"></div> */}
      <div className="image img4"></div>
      {/* <div className="bgimg-1"></div> */}
      <div className="image img5"></div>
      <Link to={"/Home"}>
        <div className="welcome-text">Welcome</div>
      </Link>
    </>
  );
};

export default Welcome;
