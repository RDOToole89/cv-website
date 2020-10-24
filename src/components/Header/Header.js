import React from "react";
import "./Header.css";
import Typical from "react-typical";

function Header() {
  return (
    <div className="Header">
      <div className="Header-navbar">
        <div class="Header-logo">
          <h2 class="Header-logo-h2">&lt;RDO/&gt;</h2>
        </div>
        <img
          className="Header-profile-img"
          src="https://am3pap001files.storage.live.com/y4mtL5lb5SCVEAcpsiw6HszPFbzRlLwHdVmJV2mRKh6RFukuna8eQ1_KwlkV6ZUZZux6tVOgrD0tD_iO1lZ9e3CkSgHf0-yK5_73DR6BlIg2xC5tVNAaDziFBlIh2l4ccls_tt26dwdZydy4FrXD5VtQLkvW2P6Hvp4Yhtdep1d-bq0izzplpgCtM3mc1n2Q-fD?width=675&height=900&cropmode=none"
          width="675"
          height="900"
          alt="profile"
        />
        <ul className="Header-navbar-list">
          <li className="Header-navbar-item">Home</li>
          <li className="Header-navbar-item">About</li>
          <li className="Header-navbar-item">Work Experience</li>
          <li className="Header-navbar-item">Contact</li>
        </ul>
      </div>

      <div className="Header-title-box">
        <h1 className="Header-title">
          Hi, I'm Roibin.
          <Typical
            steps={["I", 1000, "I am a developer.", 1000, "I solve problems.", 1000]}
            loop={Infinity}
            wrapper="p"
          />
        </h1>
        <button className="Header-btn btn">Get in touch</button>
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
