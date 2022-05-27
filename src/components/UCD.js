import "./ucd.css"
import React from "react";
import needs from "../images/needs.png"
import needsG from "../images/needs:grouped.png"
import solution from "../images/solutions.png"

const UCD= () =>{
    return (
        <div className="pl-20 flex flex-row-reverse grid grid-cols-1 gap-y-5">
            <article  className="explore">
                <div className="explore">
                    <h3 className="explore_title">Exploration</h3>
                    <span className="explore_subtitle">Where Our User-Centered Design Begins</span>
                    <img src={needsG} className="h-60 w-65 float-left"/>
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
                    <img src={solution} className="h-60 w-65 float-left"/>
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
                        Our app, Carpool Mobile, allows the users can choose to be a rider or a driver and the app has several features according to their choice. A few core features included in the app are individual profile creation, ride tracking,
                        chatbox to communicate, secure payment, feedback, and more.
                    </p>
                </div>
            </article>


        </div>
    );
}

export default UCD;