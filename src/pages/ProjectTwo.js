import React from "react";
import Background2 from "../components/Background2.js";
import UCD2 from "../components/UCD2";
import People from "../components/People";
import Y from "../images/YM.jpeg";
import Z from "../images/pfp.png";
import S from "../images/headshot.png";
import M from "../images/M.png";
import V from "../images/VF.jpeg";
import spokeDome from "../images/spokeDome.JPG";
import spokeTop from "../images/spokeTop.JPG";
import spokeSide from "../images/spokeSide.JPG";
import spokeResearch from "../images/spokeResearch.JPG";
import spokeSoftware from "../images/spokeSoftware.JPG";
import spokeSTEM from "../images/spokeSTEM.JPG";
import spokeDesign from "../images/spokeDesign.JPG";

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
            For our final solution, our group took all of the
            previous steps used in the design process, and developed a complete
            virutal envrionment that displayed a variety of information about the club. 
          </p>
        </div>

         <div className="flex flex-col justify-center items-center my-8 pt-8 pb-4">
            <img
              src={spokeSide}
              className="h-1/3 w-1/3 float-left"
              alt="solution"
            />
         </div>
        <div className="flex flex-col justify-center items-center my-8 pt-8 pb-4">
          <img
            src={spokeTop}
            className="h-1/3 w-1/3 float-left"
            alt="solution"
          />
        </div>

        <div>
          <h1 className="flex justify-center text-md font-semibold mb-4">
            Some key areas that we have included in our virtual environment:
          </h1>

          <h3 className="flex justify-center text-md font-semibold mb-4">
            Main Lobby
          </h3>
          <div className="flex flex-col justify-center items-center my-8 pt-8 pb-4">
            <img
              src={spokeDome}
              className="h-1/3 w-1/3 float-left"
              alt="solution"
            />
          </div>

          <h3 className="flex justify-center text-md font-semibold mb-4">
            Design area
          </h3>
          <div className="flex flex-col justify-center items-center my-8 pt-8 pb-4">
            <img
              src={spokeDesign}
              className="h-1/3 w-1/3 float-left"
              alt="solution"
            />
          </div>

          <h3 className="flex justify-center text-md font-semibold mb-4">
            Research area
          </h3>
          <div className="flex flex-col justify-center items-center my-8 pt-8 pb-4">
            <img
              src={spokeResearch}
              className="h-1/3 w-1/3 float-left"
              alt="solution"
            />
          </div>

          <h3 className="flex justify-center text-md font-semibold mb-4">
            Software engineering area
          </h3>
          <div className="flex flex-col justify-center items-center my-8 pt-8 pb-4">
            <img
              src={spokeSoftware}
              className="h-1/3 w-1/3 float-left"
              alt="solution"
            />
          </div>

          <h3 className="flex justify-center text-md font-semibold mb-4">
            STEM Special area
          </h3>
          <div className="flex flex-col justify-center items-center my-8 pt-8 pb-4">
            <img
              src={spokeSTEM}
              className="h-1/3 w-1/3 float-left"
              alt="solution"
            />
          </div>
    
        </div>
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
          res="Prototype Design, Website Design"
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
