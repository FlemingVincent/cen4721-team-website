import React from "react";
import "./background.css";
import DTE from "../images/DTE.png";
import DreamTeam from "../images/DreamTeam.webp";

const Background = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="relative flex-1 flex items-center justify-center h-full">
        <div className="a-card bg" />
        <div className="a-card">
          <img src={DreamTeam} alt="" className="w-full h-full object-cover " />
        </div>
      </div>

      <div className="relative flex-1 flex-col items-center justify-center h-full">
        <h1 className="a-title text-4xl"> Dream Team Engineering</h1>
        <p className="a-desc">
        Dream Team Engineering is a group of engineering and non-engineering students alike that are dedicated to making novel 
        technologies to enhance the lives of the Children at UF Health Shands and other non-profit organizations. It consists of
        different design teams work alongside physicians, nurses, child-life specialists, and PT/OT to create engineering devices 
        to impact the patient experience. The organization originated from the Dream Team Volunteering, a larger and more well-known 
        volunteering student organization that collaborates with Childrens Hospital at Shands. Even though Dream Team Engineering 
        has been growing rapidly over the past few years, it is still less well-known compared to its parent organization. The most
        accurate and reliable source for students at UF to learn about DTE and join DTE is through friends that are already in the
        organization. 
        </p>

        <div className="solution">
          <img src={DTE} alt="" className="solution-img" />
          <div className="text">
            <h4 className="title">Our Proposed Solution</h4>
            <p className="description">
            With a new semester and recruiting season for DTE coming up, this immersive VR project is designed to showcase 
            DTE projects and attract more potential applicants. The project will enable the users to learn about DTE as an organization 
            in general, its active projects and impacts, and how to get involved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;