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
      </div>
    </div>
  );
}

export default Home;
