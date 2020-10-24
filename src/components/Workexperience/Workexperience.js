import React from "react";
import "./Workexperience.css";

function Workexperience() {
  return (
    <section className="Workexperience">
      <div className="Workexperience-header-wrapper">
        <i class="icon fas fa-briefcase fa-3x"></i>
        <h1 className="Workexperience-header">Work Experience</h1>
      </div>
      <div className="Workcard">
        <h4 className="Workcard-header">
          Various restaurants, Amsterdam (2003-2019) - Executive chef / Chef de Partie
        </h4>
        <p className="Workcard-text">
          Occupied various roles in restaurants across Amsterdam including: De Liefde, De Koe,
          Bidou, Schilders, Simpel, etc.
        </p>
        <ul className="Workcard-list">
          <li className="WorkCard-item">
            Multitasking in a high-pressureenvironmentwhile maintainingattention for detail.
          </li>
          <li className="WorkCard-item">
            Taking initiative and making fast-paced decisionsin order to produce high-qualityfood to
            satisfyeach and every guest.
          </li>
          <li className="WorkCard-item">
            Full responsibility overthe kitchen, performing orders and maintaining adequate levels
            of stock.
          </li>
          <li className="WorkCard-item">
            Teambuilding and training junior chefs in various culinary techniques and recipes.
          </li>
          <li className="WorkCard-item">
            Creating menus and achieving high standards of cooking in numerous restaurants
          </li>
        </ul>
      </div>
      <div className="Workcard">
        <h4 className="Workcard-header">Studyflow, Amsterdam (Augustus 2016- Januari 2017)</h4>
        <p className="Workcard-text">
          Markt entry stratagy analist Company specializing in digitization of the secondary
          education market in the Netherlands.
        </p>
        <ul className="Workcard-list">
          <li className="WorkCard-item">
            Designed a country analysis scoring 12 potential new markets on 17 different variables
          </li>
          <li className="WorkCard-item">
            Compiled a survey which was distributed to 1800 schools in the UK
          </li>
          <li className="WorkCard-item">
            Created a cost-benefit analysis to assess the viability of entering foreign markets.
          </li>
          <li className="WorkCard-item">
            Created a marketing and implementation plan for the entering the UK market.
          </li>
          <li className="WorkCard-item">
            Received a nomination for best thesis and a grade of 9.0 / 10.
          </li>
        </ul>
      </div>
      <div className="Workcard">
        <h4 className="Workcard-header">
          DealBroker, Amsterdam (Februari 2016- Juli 2016) - Marketing and Sales intern)
        </h4>
        <p className="Workcard-text">
          Company specializing in generating extra ancillary revenues for third parties through the
          sales of tours and activities.
        </p>
        <ul className="Workcard-list">
          <li className="WorkCard-item">
            Generating lists of prospective new partners and following up on sales leads.
          </li>
          <li className="WorkCard-item">
            Supported the sales manager in daily operations and maintained contact with various
            accounts.
          </li>
          <li className="WorkCard-item">
            Created daily content for Facebook, Instagram, Twitter and a blog in order to promote
            tours and activities.
          </li>
          <li className="WorkCard-item">
            Provided daily customer support by phone and email in a professional and personable
            manner.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Workexperience;
