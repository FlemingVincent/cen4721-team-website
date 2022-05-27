import React from "react";
import Background from "../components/Background.js"
import UCD from "../components/UCD"
import People from "../components/People"
import Y from "../images/YM.jpeg"
import Z from "../images/pfp.png"
import S from "../images/headshot.png"
import M from "../images/M.png"
import V from "../images/VF.jpeg"

function ProjectOne() {
  return (
      <section>
          <Background/>
          <UCD/>

        <div>Solution</div>

          <div className ="pl-10 pr-10 flex flex-row grid grid-cols-5">
              <People name="Yiru Mu" res="Prototype Design, Website Design" img={Y}/>
              <People name="Zander Bournand" res="Prototype Design, Website Design" img={Z}/>
              <People name="Vincent Fleming" res="Prototype Design, Website Design" img={V}/>
              <People name="Shravya Iruvanti" res="Prototype Design, Poster Design" img ={S}/>
              <People name="Mitchell Thanath" res="Prototype Design, Poster Design" img={M}/>
          </div>


      </section>

  );
}

export default ProjectOne;
