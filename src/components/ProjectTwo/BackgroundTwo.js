import React from "react";
import "../background.css";
import DTE from "../../images/DTE.png";
import Map from "../../images/map.png";

const Background = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="relative flex-1 flex items-center justify-center h-full">
        <div className="a-card bg" />
        <div className="a-card">
          <img src={DTE} alt="" className="w-full h-full object-cover " />
        </div>
      </div>

      <div className="relative flex-1 flex-col items-center justify-center h-full">
        <h1 className="a-title text-4xl"> Intro to DTE VR Project </h1>
        <p className="a-desc">
          Add problem statement here
        </p>

        <div className="solution">
          <img src={Map} alt="" className="solution-img" />
          <div className="text">
            <h4 className="title">Our Proposed Solution</h4>
            <p className="description">
              This immersive VR project is designed to showcase DTE projects and attract more potential applicants.
              The project will enable the users to learn about DTE as an organization in general,
              its active projects and impacts, and how to get involved.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
