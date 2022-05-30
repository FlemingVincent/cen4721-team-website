import React from "react";
import Background from "../components/Background.js";
import UCD from "../components/UCD";
import People from "../components/People";
import Y from "../images/YM.jpeg";
import Z from "../images/pfp.png";
import S from "../images/headshot.png";
import M from "../images/M.png";
import V from "../images/VF.jpeg";

function ProjectOne() {
  return (
    <section>
      <Background />
      <UCD />

      <div className="flex flex-col items-center justify-center">
        <div className="flex mb-8">
          <h1 className="underline font-bold text-3xl">Final Solution</h1>
        </div>
        <div className="flex mb-8">
          <p className="font-semibold text-lg text-center">
            For our final solution, our group decided to take all of the
            previous steps used in the design process, and develop a functional
            high fidelity prototype based on those previous steps. In order to
            do this, we took a look at some current software that is being used
            today by some of the top companies in the world. We ultimately
            decided on using Figma to develop this high fidelity prototype, as
            Figma has the proper tools to allow us to develop quickly and
            collaborate as a team. Below we have provided functional prototypes
            for both the rider and driver flows:
          </p>
        </div>
        <div className="flex-row">
          <iframe
            title="Rider Flow"
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FmHyBlPItF9fgZa9fT5ABgp%2FCEN4721---Project-1%3Fpage-id%3D145%253A100%26node-id%3D182%253A4908%26viewport%3D571%252C370%252C0.11%26scaling%3Dscale-down%26starting-point-node-id%3D182%253A4944"
            allowfullscreen
          ></iframe>
          <iframe
            title="Driver Flow"
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FmHyBlPItF9fgZa9fT5ABgp%2FCEN4721---Project-1%3Fpage-id%3D0%253A1%26node-id%3D27%253A10%26viewport%3D149%252C263%252C0.33%26scaling%3Dscale-down%26starting-point-node-id%3D27%253A8"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="pl-10 pr-10 flex flex-row grid grid-cols-5">
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

export default ProjectOne;
