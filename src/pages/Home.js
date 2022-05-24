import React from "react";

import BioCard from "../components/BioCard.js";
import "../components/Component.css";
import Footer from "../components/Footer.js"

function Home() {
  return (
    <div className="px-4 py-8">
        <h2 className="text-4xl my-8 flex justify-center">About Us</h2>
        <div className="flex pl-12 pr-12 text-lg justify-center">
            Hello! We are a team of enthusiastic software engineers that strive to develop better and
            easier to use applications.
            This is our team's website for CEN4721 - Human Computer Interaction.
            This website will display the projects that we have worked on throughout Summer,2022.
        </div>
      <h1 className="text-4xl my-8 flex justify-center">Meet the Team</h1>
      <div className="pl-16 grid grid-cols-3 gap-y-6  gap-x-4 ">

          <article className="card_Vincent">
              <div className="card_content">
                  <h3 className="card_title">Vincent Fleming</h3>
                  <span className="card_subtitle">Computer Science</span>
                  <span className="card_subtitle">UI design, frontend development, and mobile</span>
                  <p className="card_description">After graduating, Vincent plans on becoming a frontend software engineer. He spends most of his time designing and developing projects to better his abilities using programs such as Figma, and frameworks such as React and React Native. Vincent is a mobile development intern at FLYJETS, helping develop and launch their app this summer.</p>
              </div>
          </article>

          <article  className="card_Zander">
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

          <article  className="card_S">
              <div className="card_content">
                  <h3 className="card_title">Shravya Iruvanti </h3>
                  <span className="card_subtitle">Computer Engineering</span>
                  <span className="card_subtitle">UX/UI, Frontend Development and Product Development</span>
                  <p className="card_description">Shravya is a senior at the University of Florida. She has taken and learned several skills from her classes which include software development and electrical engineering (circuit logic, digital logic, microprocessors applications). She plans on working as a Software developer in UX/UI or product design within a tech/ start-up company after graduation.</p>
              </div>
          </article>


          <article  className="card">
              <div className="card_content">
                  <h3 className="card_title">Mitchell Thanath</h3>
                  <span className="card_subtitle">Computer Science</span>
                  <span className="card_subtitle">Backend development, UX design </span>
                  <p className="card_description">Mitchell is a rising junior majoring in computer science. After graduation he plans on pursuing a career in software engineering. He is interested in exploring topics such as AI and machine learning. Mitchell has experience working on projects involving backend development.</p>
              </div>
          </article>

      </div>
        <Footer/>
      </div>



  );
}

export default Home;
