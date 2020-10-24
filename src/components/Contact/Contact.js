import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="Contact-me" className="Contact">
      <div className="Contact-header-wrapper">
        <i class="icon fas fa-envelope fa-3x"></i>
        <h1 className="Contact-header">Let's get in touch...</h1>
      </div>
      <form class="Contact-form" action="/" method="POST">
        <label for="name">Full Name:</label>
        <input class="Contact-form-input" type="text" id="name" name="fullName" />

        <label for="text">Message:</label>
        <textarea
          class="Contact-form-input"
          name="emailText"
          id="text"
          cols="30"
          rows="10"
        ></textarea>

        <button class="Contact-form-btn" type="submit" name="button">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
