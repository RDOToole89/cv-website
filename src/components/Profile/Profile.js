import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <section className="Profile">
      <h2 className="Profile-header-profile">Profile</h2>
      <p className="Profile-text">
        I am a recent graduate of the Codaisseur Coding Academy and eager to get my hands dirty in
        my first role as a developer. I consider myself a hard working individual that strives for
        excellence, and is dedicated to delivering high-quality work in an efficient and
        professional manner. I have a proven record of academic achievement and a strong desire to
        grow and develop myself. Most of my professional life I have spent working as a chef,
        however this line of work was no longer giving me the satisfaction it once did. From the
        start of the corona crisis in March, I have been learning to code which lead to me seeking a
        more formal course to increase the speed at which I could attain this new skill. Even though
        I do not have a background in Computer Science I have always been fascinated by how
        computers work and how the world interacts with computer and computer systems. A carreer
        switch to coding seems a good fit with my natural interests in computers and technology.
      </p>
      <h2 className="Profile-header-education">Education</h2>
      <div className="Profile-education">
        <p className="Profile-education-text">2020 - Codaisseur Full Stack Developer Bootcamp</p>
        <p className="Profile-education-text">
          2013 – 2017 Amsterdam School of International Business (AMSIB) International Business &
          Management (BBA) Graduated Cum Laude (with honors), 8.3 / 10 (GPA 4.0).
        </p>
        <p className="Profile-education-text">
          2014 – 2015 TEC de Monterrey, México City International Business & Management, Exchange
          Semester Finished the semester with an 8.8 average
        </p>
      </div>
    </section>
  );
}

export default Profile;
