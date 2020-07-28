import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./contactme.css";
import axios from "axios";
import Linkedin from "../images/linkedin.png";
import Github from "../images/github.png";

export default function ContactMe() {
  const { handleSubmit, register, errors } = useForm();
  const [mailSent, setMailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const path = process.env.REACT_APP_BASE_URL;

  const onSubmit = (values) => {
    setLoading(true);
    axios
      .post("http://localhost:5000/api/send/mail", values)
      .then((res) => {
        console.log(res);
        setLoading(false);
        setMailSent(true);
      })
      .catch((error) => {
        setLoading(false);
        setMailSent(false);
      });
  };

  return (
    <div className="contactme-com">
      <div className="contact-links-dev">
        <div className="email-contact">
          <h5>Email:</h5>
          <p>ruwaidah.riyadh@gmail.com</p>
        </div>
        <div className="links">
          <div className="github-linkedin">
            <a
              href="https://github.com/Ruwaidah"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={Github} alt="github-logo" />
            </a>
            <a
              href="https://github.com/Ruwaidah"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div className="github-linkedin">
            {" "}
            <a
              href="https://www.linkedin.com/in/ruwaidah-a-930b9a8b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="linkedin-logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/ruwaidah-a-930b9a8b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
