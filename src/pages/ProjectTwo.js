import React from "react";
import Background2 from "../components/Background2.js";
import UCD2 from "../components/UCD2";
import People from "../components/People";
import Y from "../images/YM.jpeg";
import Z from "../images/pfp.png";
import S from "../images/headshot.png";
import M from "../images/M.png";
import V from "../images/VF.jpeg";

function ProjectTwo() {
  return (
    <section>
      <Background2 />
      <UCD2 />

      <div className="flex flex-col items-center justify-center">
        <div className="flex mb-8">
          <h1 className="underline font-bold text-3xl">Final Solution</h1>
        </div>
        <div className="flex mb-8 px-24">
          <p className="font-semibold text-lg text-center">
            For our final solution, our group decided to take all of the
            previous steps used in the design process, and develop a functional
            high fidelity prototype based on those previous steps. 
          </p>
        </div>
        <div>
          <h1 className="flex justify-center text-md font-semibold mb-4">
            Some key features that we have included in our virtual environment:
          </h1>
    
        </div>
      </div>

      <div className="pl-10 pr-10 flex-row grid grid-cols-5">
        <People name="Yiru Mu" res="Prototype Design, Website Design" img={Y} />
        <People
          name="Zander Bournand"
          res="Prototype Design, Website Design"
          img={Z}
        />
        <People
          name="Vincent Fleming"
          res="Prototype Design, Website Design"
          img={V}
        />
        <People
          name="Shravya Iruvanti"
          res="Prototype Design, Poster Design"
          img={S}
        />
        <People
          name="Mitchell Thanath"
          res="Prototype Design, Poster Design"
          img={M}
        />
      </div>
    </section>
  );
}

export default ProjectTwo;
