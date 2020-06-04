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
      .post(path, values)
      .then((res) => {
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
      {mailSent ? (
        <p className="thank-you-msg">
          message Sent Thank you for contacting me{" "}
        </p>
      ) : loading ? (
        <p className="thank-you-msg loading">loading</p>
      ) : (
        <div className="send-me-mail">
          <h4>Send me a message :</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <input
                type="text"
                size="20"
                name="name"
                placeholder="name"
                ref={register({
                  required: "Required",
                  minLength: 3,
                  maxLength: 25,
                })}
              />
              {errors.name && errors.name.type === "minLength" && (
                <p>Short Name</p>
              )}
              {errors.name && errors.name.type === "maxLength" && (
                <p>too long</p>
              )}
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div className="field">
              <input
                size="19"
                name="email"
                placeholder="Email"
                ref={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address",
                  },
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="field">
              <input
                size="50"
                name="subject"
                placeholder="Subject"
                ref={register({
                  required: "Required",
                  maxLength: 25,
                })}
              />
              {errors.subject && errors.subject.type === "maxLength" && (
                <p>too long</p>
              )}
              {errors.subject && <p>{errors.subject.message}</p>}
            </div>
            <div className="field" id="message">
              <textarea
                name="msg"
                rows="6"
                cols="20"
                placeholder="Message..."
                ref={register({
                  required: "Required",
                })}
              ></textarea>
              {errors.msg && <p>{errors.msg.message}</p>}
            </div>
            <input type="submit" value="Submit" id="submit" />
          </form>
        </div>
      )}
    </div>
  );
}
