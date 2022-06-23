import React from "react";
import Background from "../components/ProjectTwo/BackgroundTwo"
import UCD from "../components/ProjectTwo/UCDTwo"
import People from "../components/People";
import Y from "../images/YM.jpeg";
import Z from "../images/pfp.png";
import S from "../images/headshot.png";
import M from "../images/M.png";
import V from "../images/VF.jpeg";

function ProjectTwo() {
  return (
      <section>
          <Background/>
          <UCD/>

          <div className="flex mb-8">
              <h1 className="underline font-bold text-3xl">Final Solution</h1>
          </div>
          <div className="flex mb-8 px-24">
              <p className="font-semibold text-lg text-center">
                  [describe final solution here and add picture/video accordingly]
              </p>
          </div>


        <div className="pl-10 pr-10 flex-row grid grid-cols-5">
          <People name="Yiru Mu" res="Prototype Design, Poster Design" img={Y} />
          <People
              name="Zander Bournand"
              res="Prototype Design, Poster Design"
              img={Z}
          />
          <People
              name="Vincent Fleming"
              res="Prototype Design, Video Design"
              img={V}
          />
          <People
              name="Shravya Iruvanti"
              res="Prototype Design, Website Design"
              img={S}
          />
          <People
              name="Mitchell Thanath"
              res="Prototype Design, Website Design"
              img={M}
          />
        </div>
      </section>
  );
}

export default ProjectTwo;
