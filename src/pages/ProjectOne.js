import React from "react";
import Background from "../components/Background.js";
import UCD from "../components/UCD";
import People from "../components/People";
import Y from "../images/YM.jpeg";
import Z from "../images/pfp.png";
import S from "../images/headshot.png";
import M from "../images/M.png";
import V from "../images/VF.jpeg";
import home from "../images/home.png";
import search from "../images/search.png";
import profile from "../images/profile.png";
import messages from "../images/messages.png";

function ProjectOne() {
  return (
    <section>
      <Background />
      <UCD />

      <div className="flex flex-col items-center justify-center">
        <div className="flex mb-8">
          <h1 className="underline font-bold text-3xl">Final Solution</h1>
        </div>
        <div className="flex mb-8 px-24">
          <p className="font-semibold text-lg text-center">
            For our final solution, our group decided to take all of the
            previous steps used in the design process, and develop a functional
            high fidelity prototype based on those previous steps. In order to
            do this, we took a look at some current software that is being used
            today by some of the top companies in the world. We ultimately
            decided on using Figma to develop this high fidelity prototype, as
            Figma has the proper tools to allow us to develop quickly and
            collaborate as a team.
          </p>
        </div>
        <div>
          <h1 className="flex justify-center text-md font-semibold mb-4">
            Some key features that we have included in our app:
          </h1>

          <h1 className="flex justify-center text-2xl font-bold">
            Home Screen:
          </h1>
          <div className="flex flex-row justify-center items-center">
            <div className="flex-1 pr-16">
              <img className="" src={home} alt="home" />
            </div>
            <div className="flex-1">
              <p className="text-lg leading-8">
                1. Let user choose to be in driver mode or rider mode <br />
                2. Driver Mode: Allow driver to create rides <br />
                Rider Mode: Allow riders to request and manage rides <br />
                3. Show upcoming drives/rides <br />
                Driver Mode: Allow drivers to notify, message riders and cancel
                the drive <br />
                Rider Mode: Allow riders to message drivers and/or cancel the
                ride <br />
                4. Show past drives <br />
                5. Show rider/driver request near user <br />
                6. Navigation bar <br />
              </p>
            </div>
          </div>

          <h1 className="flex justify-center text-2xl font-bold">
            Search Screen:
          </h1>
          <div className="flex flex-row justify-center items-center">
            <div className="flex-1 pr-16">
              <img className="" src={search} alt="search" />
            </div>
            <div className="flex-1">
              <p className="text-lg leading-9">
                1. Enter search information <br />
                2. Search button <br />
                3. Navigation bar <br />
              </p>
            </div>
          </div>

          <h1 className="flex justify-center text-2xl font-bold">
            Messages Screen:
          </h1>
          <div className="flex flex-row justify-center items-center">
            <div className="flex-1 pr-16">
              <img className="" src={messages} alt="messages" />
            </div>
            <div className="flex-1">
              <p className="text-lg leading-9">
                1. Search for messages <br />
                2. List of messages <br />
                3. Navigation bar <br />
              </p>
            </div>
          </div>

          <h1 className="flex justify-center text-2xl font-bold">
            Profile Screen:
          </h1>
          <div className="flex flex-row justify-center items-center">
            <div className="flex-1 pr-16">
              <img className="" src={profile} alt="profile" />
            </div>
            <div className="flex-1">
              <p className="text-lg leading-9">
                1. Username <br />
                2. Rating of user <br />
                3. Description of user <br />
                4. Navigation bar <br />
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="flex justify-center text-xl py-8 font-semibold my-4">
            Below we have attached two interactive figma prototypes:
          </h1>
          <h1 className="flex justify-center font-bold text-2xl">Rider Flow</h1>
          <iframe
            title="Rider Flow"
            width="800"
            height="650"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FmHyBlPItF9fgZa9fT5ABgp%2FCEN4721---Project-1%3Fpage-id%3D145%253A100%26node-id%3D182%253A4908%26viewport%3D571%252C370%252C0.11%26scaling%3Dscale-down%26starting-point-node-id%3D182%253A4944"
            allowfullscreen
          ></iframe>
          <h1 className="flex justify-center font-bold text-2xl">
            Driver Flow
          </h1>
          <iframe
            title="Driver Flow"
            width="800"
            height="650"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FmHyBlPItF9fgZa9fT5ABgp%2FCEN4721---Project-1%3Fpage-id%3D0%253A1%26node-id%3D27%253A10%26viewport%3D149%252C263%252C0.33%26scaling%3Dscale-down%26starting-point-node-id%3D27%253A8"
            allowfullscreen
          ></iframe>
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

export default ProjectOne;
