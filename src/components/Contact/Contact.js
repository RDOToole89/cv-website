import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="Contact">
      <h2 class="Contact-heading">
        <span class="icon">
          <i class="fas fa-envelope"></i>
        </span>
        Lets get in touch...
      </h2>
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
