import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="Contact-me" className="Contact">
      <div className="Contact-header-wrapper">
        <i className="icon fas fa-envelope fa-3x"></i>
        <h1 className="Contact-header">Let's get in touch...</h1>
      </div>
      <form className="Contact-form" action="/" method="POST">
        <label htmlFor="name">Full Name:</label>
        <input className="Contact-form-input" type="text" id="name" name="fullName" />

        <label htmlFor="text">Message:</label>
        <textarea
          className="Contact-form-input"
          name="emailText"
          id="text"
          cols="30"
          rows="10"
        ></textarea>

        <button className="Contact-form-btn" type="submit" name="button">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
