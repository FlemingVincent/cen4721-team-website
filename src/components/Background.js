import React from "react"
import "./background.css"
import carpool from "../images/map.png"
import compass from "../images/compass.png"

const Background = () => {
    return(
        <div className ="h-screen flex items-center">
            <div className ="relative flex-1 flex items-center justify-center h-full">
                <div className = "a-card bg"/>
                <div className = "a-card">
                    <img
                        src = {carpool}
                        alt =""
                        className = "w-full h-full object-cover "
                    />
                </div>

            </div>

            <div className ="flex-1">
                <h1 className ="a-title text-4xl"> Carpool Mobile App </h1>
                <p className ="a-desc">
                    Carpooling is very common for students here at the University of Florida because not every college student is able to afford a car. Even though there are many carpooling apps already available, such as Waze Carpool, most of the students still favor using the Facebook UF carpooling group due to
                    its convenience, flexibility, and security.
                    However, the Facebook group page still has many issues like scams and unoptimized user matching.
                    Thus, we intend to design a carpool app exclusive to UF students and staff to create an even safer and more convenient carpooling experience for all UF students.

                </p>

                <div className ="solution">
                    <img src ={compass} alt ="" className="solution-img"/>
                    <div className ="text">
                        <h4 className="title">Our Proposed Solution</h4>
                        <p className="description">
                            Our app, Carpool Mobile, allows the users can choose to be a rider or a driver and the app has several features according to their choice.
                            A few core features included in the app are individual profile creation, ride tracking, chatbox to communicate, secure payment, feedback, and more.
                        </p>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default Background;