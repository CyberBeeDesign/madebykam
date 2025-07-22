import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contactform.css";

const Contactform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const formValues = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (name.length <= 3) {
      alert("Name should exceed 3 characters");
      return;
    }
    if (name.length === 0) {
      alert("Name field cannot be empty");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }
    if (email.length === 0) {
      alert("Email field cannot be empty");
      return;
    }

    if (message.length < 10) {
      alert("Message should be at least 10 characters long");
      return;
    }
    if (message.length === 0) {
      alert("Message field cannot be empty");
      return;
    }

    emailjs
      .sendForm(
        "service_oc9xk1r",
        "template_h43pek4",
        formValues.current,
        "Dmf7NHBnhkP8_Y45S"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formValues.current.reset();
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert("Failed to send message, please try again later", error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <form ref={formValues} onSubmit={sendEmail}>
        <div className="top-form">
          <div className="form-left">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="form-right">
            <label htmlFor="message">Message</label>
            <textarea
              type="textarea"
              name="message"
              value={message}
              onChange={handleMessageChange}
              required
            />
          </div>
        </div>
        <button type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contactform;
