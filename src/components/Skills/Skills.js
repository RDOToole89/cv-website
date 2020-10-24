import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="Experience">
      <div className="Experience-header-wrapper">
        <i class="icon Experience-icon fas fa-cog fa-3x"></i>
        <h1 className="Experience-header">My Skills and Tools</h1>
      </div>
      <p className="Experience-header-text">What I've learned so far...</p>
      <div className="Experience-frontend">
        <i class="icon Experience-icon fas fa-laptop fa-3x"></i>
        <h3>Front-end</h3>
        <ul className="Experience-list">
          <li className="Experience-list-item">HTML5</li>
          <li className="Experience-list-item">CSS3</li>
          <li className="Experience-list-item">Javascript</li>
          <li className="Experience-list-item">React</li>
          <li className="Experience-list-item">Bootstrap</li>
          <li className="Experience-list-item">Api | Ajax</li>
        </ul>
      </div>
      <div className="Experience-backend">
        <i class="icon Experience-icon fas fa-server fa-3x"></i>
        <h3>Back-end</h3>
        <ul className="Experience-list">
          <li className="Experience-list-item">NodeJS</li>
          <li className="Experience-list-item">NPM</li>
          <li className="Experience-list-item">Express</li>
          <li className="Experience-list-item">SQL</li>
          <li className="Experience-list-item">Mongo</li>
          <li className="Experience-list-item">REST Api</li>
        </ul>
      </div>
      <div className="Experience-tools">
        <i class="icon Experience-icon fas fa-briefcase fa-3x"></i>
        <h3>Tools</h3>
        <ul className="Experience-list">
          <li className="Experience-list-item">VS Code</li>
          <li className="Experience-list-item">Yarn</li>
          <li className="Experience-list-item">Ubuntu</li>
          <li className="Experience-list-item">Github</li>
          <li className="Experience-list-item">SSH</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
