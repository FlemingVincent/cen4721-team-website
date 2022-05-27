import "./ucd.css"
import React from "react";
import solution from "../images/solutions.png"
import stages from "../images/ev.png"
import Images from "../components/Images"


const UCD= () =>{
    return (
        <div className="pl-20 flex flex-row-reverse grid grid-cols-1 gap-y-5">
            <article  className="explore">
                <div className="explore">
                    <h3 className="explore_title">Exploration</h3>
                    <span className="explore_subtitle">Where Our User-Centered Design Begins</span>
                    <Images/>
                    <p className="explore_description">
                        Our app, Carpool Mobile, allows the users can choose to be a rider or a driver and the app has several features according to their choice. A few core features included in the app are individual profile creation, ride tracking,
                        chatbox to communicate, secure payment, feedback, and more.
                    </p>
                </div>
            </article>


            <article  className="explore">
                <div className="explore">
                    <h3 className="explore_title float-right">Generation</h3>
                    <span className="explore_subtitle">Brainstorm, Prototype</span>
                    <img src={solution} className="h-80 w-65 float-left"/>
                    <p className="explore_description">
                        Our app, Carpool Mobile, allows the users can choose to be a rider or a driver and the app has several features according to their choice. A few core features included in the app are individual profile creation, ride tracking,
                        chatbox to communicate, secure payment, feedback, and more.
                    </p>
                </div>
            </article>


            <article  className="explore">
                <div className="explore">
                    <h3 className="explore_title">Refinement</h3>
                    <span className="explore_subtitle float-right">  Evaluate, Observe, Iterate</span>
                    <p className="explore_description">
                        During our refinement stage, we test the usages of our prototypes and identify any potential problems and room for improvements through user evaluation and observation.
                        Once we have identified any issues and areas where we can improve, we go back to the stage of generation to create new prototypes accordingly.
                        As shown in the prototype line below, we have created different levels of prototypes ranging from very low fidelity prototype to higher fidelity protoptypes to our final solution.
                    </p>
                    <img src={stages} className="h-80 w-90 float-left"/>
                </div>
            </article>



        </div>
    );
}

export default UCD;