import React from "react";
import "./Header.css";
import Typical from "react-typical";

function Header() {
  return (
    <div id="home" className="Header">
      <div className="Header-navbar">
        <div className="Header-logo">
          <h2 className="Header-logo-h2">
            &lt;<span>RDO</span>/&gt;
          </h2>
        </div>
        <img
          className="Header-profile-img"
          src="https://am3pap001files.storage.live.com/y4mtL5lb5SCVEAcpsiw6HszPFbzRlLwHdVmJV2mRKh6RFukuna8eQ1_KwlkV6ZUZZux6tVOgrD0tD_iO1lZ9e3CkSgHf0-yK5_73DR6BlIg2xC5tVNAaDziFBlIh2l4ccls_tt26dwdZydy4FrXD5VtQLkvW2P6Hvp4Yhtdep1d-bq0izzplpgCtM3mc1n2Q-fD?width=675&height=900&cropmode=none"
          width="675"
          height="900"
          alt="profile"
        />
        <ul className="Header-navbar-list">
          <li className="Header-navbar-item">
            <a className="active " href="#home">
              Home
            </a>
          </li>
          <li className="Header-navbar-item">
            <a href="#about">About</a>
          </li>
          <li className="Header-navbar-item">
            <a href="#Workexp">Work</a>
          </li>
          <li className="Header-navbar-item">
            <a href="#Contact-me">Contact</a>
          </li>
        </ul>
      </div>

      <div className="Header-title-box">
        <h1 className="Header-title">
          <span>Hi, I'm Roibin.</span>
          <Typical
            steps={[
              "I",
              1000,
              "I am a developer.",
              1000,
              "I love to code.",
              1000,
              "I solve problems.",
              1000,
              "I am a fast learner.",
              1000,
              "I am a pleasant colleague.",
              1000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </h1>
        <button className="Header-btn btn">
          <a className="Header-link" href="https://www.linkedin.com/">
            Get in touch
          </a>
        </button>
        <div className="icon-box">
          <i className="fab fa-facebook fa-2x"></i>
          <i className="fab fa-instagram fa-2x"></i>
          <i className="fab fa-github fa-2x"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
