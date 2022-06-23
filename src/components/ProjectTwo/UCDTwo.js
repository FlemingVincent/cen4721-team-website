import "../ucd.css";
import React from "react";
import solution from "../../images/solutions.png";
import stages from "../../images/ev.png";
import needsG from "../../images/needs_grouped.png";
import needs from "../../images/needs.png";
import needsV from "../../images/needs_voted.png";
import features from "../../images/feature_hierachy.png";
import first_prototype from "../../images/first_prototype.png";
import julia from "../../images/JULIA.png";
import patrick from "../../images/PATRICK.png";
import julia_storyboard from "../../images/storyboard_julia.png";
import patrick_storyboard from "../../images/storyboard_patrick.png";
import { Slide } from "react-slideshow-image";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "react-slideshow-image/dist/styles.css";

const properties = {
  prevArrow: (
    <div style={{ width: "30px", marginRight: "-30px" }}>
      <BsFillArrowLeftCircleFill color="lightgray" size={24} />
    </div>
  ),
  nextArrow: (
    <div style={{ width: "30px", marginLeft: "-30px" }}>
      <BsFillArrowRightCircleFill color="lightgray" size={24} />
    </div>
  ),
};

const UCD = () => {
  return (
    <div className="pl-20 flex-row-reverse grid grid-cols-1 gap-y-5">
      <article className="explore">
        <div className="explore">
          <h3 className="explore_title">Exploration</h3>
          <span className="explore_subtitle">
            Where Our User-Centered Design Begins
          </span>

          <h4 className="font-bold text-3xl pt-8 underline text-center">
            Afinity Diagram
          </h4>
          <div className="pt-8">
            <Slide easing="ease" {...properties}>
              <div className="each-slide">
                <div>
                  <img src={needs} className="h-full w-auto" alt="needs" />
                </div>
              </div>
              <div className="each-slide">
                <div>
                  <img src={needsG} className="h-full w-auto" alt="needsg" />
                </div>
              </div>
              <div className="each-slide">
                <div>
                  <img src={needsV} className="h-full w-auto" alt="needsg" />
                </div>
              </div>
            </Slide>
            <p className="text-center p-4 text-lg font-semibold">
              Chagne the pictures and add text here; see project 1 for example
            </p>
          </div>

          <h4 className="font-bold text-3xl pt-4 underline text-center">
            Personas & Scenarios
          </h4>
          <div className="pt-8">
            <Slide easing="ease" {...properties}>
              <div className="each-slide">
                <div>
                  <img src={julia} className="h-full w-auto" alt="julia" />
                </div>
              </div>
              <div className="each-slide">
                <div>
                  <img src={patrick} className="h-full w-auto" alt="patrick" />
                </div>
              </div>
            </Slide>
            <p className="text-center p-4 text-lg font-semibold">
              change the picture and add text here; see project 1 for example
            </p>
          </div>

          <h4 className="font-bold text-3xl pt-4 underline text-center">
            Storyboards
          </h4>
          <div className="">
            <Slide easing="ease" {...properties}>
              <div className="each-slide">
                <div>
                  <img
                    src={julia_storyboard}
                    className="h-1/2 w-auto"
                    alt="jstoryboard"
                  />
                </div>
              </div>
              <div className="each-slide">
                <div>
                  <img
                    src={patrick_storyboard}
                    className="h-1/2 w-auto"
                    alt="pstoryboard"
                  />
                </div>
              </div>
            </Slide>
            <p className="text-center px-4 pb-8 text-lg font-semibold">
             change pictures and add text; see project 1 for example
            </p>
          </div>
        </div>
      </article>

      <article className="explore">
        <div className="explore">
          <h3 className="explore_title">Generation</h3>
          <span className="explore_subtitle">Brainstorm, Prototype</span>

          <div className="flex flex-col justify-center items-center my-8 pt-8 pb-4">
            <img
              src={solution}
              className="h-1/3 w-1/3 float-left"
              alt="solution"
            />
            <p className="text-center pt-8 pb-4 px-8 text-lg font-semibold w-3/4">
              change pictures above and add text
            </p>
          </div>

          <div className="flex flex-col justify-evenly items-center ">
            <img src={features} className="w-1/2 h-1/2" alt="features" />
            <p className="text-center py-8 text-lg font-semibold w-3/4">
              Our team then created a feature hiearachy displaying the
              ideas/features that had the most importance within our solution.
              This would then allow us to properly design a user interface in
              which user needs are properly accommodated for.
            </p>
          </div>

          <h4 className="font-bold text-3xl underline text-center py-4">
            Paper Prototype
          </h4>
          <div className="py-8 flex justify-center items-center">
            <img
              className="w-1/2 h-1/2"
              src={first_prototype}
              alt="firstprototype"
            />
            <p className="text-center pb-8 px-8 text-lg font-semibold py-8">
              change picture and text here; we only have one prototye this time
            </p>
          </div>
        </div>
      </article>

      <article className="explore">
        <div className="explore">
          <h3 className="explore_title">Refinement</h3>
          <span className="explore_subtitle"> Evaluate, Observe, Iterate</span>
          <div className="flex flex-col items-center">
            <img src={stages} className="w-1/2 float-left" alt="stages" />
            <p className="text-center pb-8 text-lg font-semibold py-8">
              During our refinement stage, we test the usages of our prototype
              and identify any potential problems and room for improvements
              through user evaluation and observation. Once we have identified
              any issues and areas where we can improve, we go back to the stage
              of generation to create new prototypes accordingly. [change picture and modify text here]
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default UCD;
