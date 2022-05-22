import React from "react";

import BioCard from "../components/BioCard.js";
import "../components/Component.css";

function Home() {
  return (
    <div className="px-4 py-8">
        <h2 className="text-4xl my-8 flex justify-center">About Us</h2>
      <h1 className="text-4xl my-8 flex justify-center">Meet the Team</h1>
      <div className="grid grid-cols-3 gap-4">

          <article className="card_Vincent">
              <div className="card_content">
                  <h3 className="card_title">Vincent Fleming</h3>
                  <span className="card_subtitle">Computer Science</span>
                  <span className="card_subtitle">UI design, frontend development, and mobile</span>
                  <p className="card_description">After graduating, Vincent plans on becoming a frontend software engineer. He spends most of his time designing and developing projects to better his abilities using programs such as Figma, and frameworks such as React and React Native. Vincent is a mobile development intern at FLYJETS, helping develop and launch their app this summer.</p>
              </div>
          </article>

          <article  className="card">
              <div className="card_content">
                  <h3 className="card_title">Zander Bournand</h3>
                  <span className="card_subtitle">Computer Science</span>
                  <span className="card_subtitle">Full Stack Mobile and Web Development</span>
                  <p className="card_description">Zander is a Junior at The University of Florida. Most of his schedule consists of school work and personal development of full stack projects to improve his skills as a software engineer in general. Following graduation, Zander plans on working as a Software Engineer within a tech company to start off his proffesional life.</p>
              </div>
          </article>


          <article  className="card_Yiru">
              <div className="card_content">
                  <h3 className="card_title">Yiru Mu</h3>
                  <span className="card_subtitle">Biomedical Engineering</span>
                  <span className="card_subtitle">Full stack web development</span>
                  <p className="card_description">Yiru is a senior at the University of Florida who is passionate about web development and software engineering. She has been doing research on brain segmentation, 3D reconstruction, and predictive coding. She intends to go to graduate school for computer science after graduation.</p>
              </div>
          </article>

      </div>

      </div>


  );
}

export default Home;
