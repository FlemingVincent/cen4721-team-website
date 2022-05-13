import React from "react";

import BioCard from "../components/BioCard";

function Home() {
  return (
    <div className="px-4 py-8">
      <h1 className="text-4xl my-8 flex justify-center">Meet the Team</h1>
      <div className="grid grid-cols-2 gap-4">
        <BioCard
          firstName="vincent"
          lastName="fleming"
          major="computer science"
          interests="UI design, frontend development, and mobile"
          bio="After graduating, Vincent plans on becoming a frontend software engineer. He spends most of his time designing and developing projects to better his abilities using programs such as Figma, and frameworks such as React and React Native. Vincent is currently a mobile development intern at FLYJETS, helping develop and launch their app this summer."
        />
        <BioCard
          firstName="zander"
          lastName="bournand"
          major="computer science"
          interests="Full Stack Mobile and Web Development"
          bio="Zander is currently a Junior at The University of Florida, studying Computer Science. Most of his schedule consists of school work and personal development of full stack projects to improve his skills as a software engineer in general. Following graduation, Zander plans on working as a Software Engineer within a tech company to start off his proffesional life. "
        />
      </div>
    </div>
  );
}

export default Home;
