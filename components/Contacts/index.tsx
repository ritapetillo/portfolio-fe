import React, { useState } from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { BsTextarea } from "react-icons/bs";
import { Col, Row } from "../../styles/uielements";
import { ImageWork } from "../CardWork/cardwork.elements";
import emailjs from "emailjs-com";
import {
  ContactContainer,
  ImageContact,
  RowSocials,
  TitleContact,
} from "./contacts.elements";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      message,
      email,
    };
    emailjs
      .send(
        process.env.EMAIL_SERVICE_ID,
        process.env.EMAIL_TEMPLATE_ID,
        data,

        process.env.EMAIL_USER_ID
      )
      .then(
        (result) => {
          setEmail("");
          setMessage("");
          setName("");
          toast.success("Message Correctly Sent!", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <ContactContainer id="contacts">
        <Col sm={12} md={6}>
          <TitleContact>
            <h2>Contact me</h2>
          </TitleContact>
          <RowSocials>
            <a href="mailto:rita.petillo@gmail.com" target="_blank">
              <AiFillMail />
            </a>
            <a href="https://www.instagram.com/ritapetillo/" target="_blank">
              <AiFillInstagram />
            </a>
            <a href="https://www.linkedin.com/in/ritapetillo/" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/ritapetillo" target="_blank">
              <AiFillGithub />
            </a>
          </RowSocials>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button type="submit">Send</button>
          </form>
        </Col>
        <Col sm={12} md={6} className="contact__image">
          <ImageContact height="380px" width="100%">
            <img src="/img/rita.green.jpg" className="contact__pic" />
          </ImageContact>{" "}
        </Col>
      </ContactContainer>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Contacts;
