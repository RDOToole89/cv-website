import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <h2 className="Footer-header">Social Media</h2>
        <div className="Footer-icon-box">
          <h4 className="Footer-icon-text">
            <i className="Footer-icon fab fa-github fa-2x"></i>
            <a className="Footer-link" href="https://github.com/RDOToole89">
              On GitHub
            </a>
          </h4>
          <h4 className="Footer-icon-text">
            <i className="Footer-icon fab fa-linkedin fa-2x"></i>
            <a className="Footer-link" href="https://www.linkedin.com/in/rdotoole/">
              On LinkedIN
            </a>
          </h4>
          <h4 className="Footer-icon-text">
            <i className="Footer-icon fas fa-envelope fa-2x"></i>
            <a className="Footer-link" href="#Contact-me">
              Contact me
            </a>
          </h4>
        </div>
        <div className="Footer-copyright">
          <p className="Footer-copyright-text">
            Copyright© 2020 Roibin O'Toole <i className="fas fa-code fa-2x"></i>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
