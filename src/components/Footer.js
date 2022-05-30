import React from "react";
import "./footer.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Gator from "../images/download.png";

const Footer = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5rtl7sj",
        "template_p8jt2ll",
        formRef.current,
        "CI1KCRkhA9H8Lvnml"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Want to discuss more about our projects?</h1>
          <img src={Gator} className=" w-60 h-72" alt="gator" />
        </div>

        <div className="c-right">
          <p className="c-desc">
            <b>Have questions or requests?</b> Always feel free to reach out to
            us
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="message" name="message" />
            <button>Submit</button>
            {done && "Thank you :) We have received your email."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
