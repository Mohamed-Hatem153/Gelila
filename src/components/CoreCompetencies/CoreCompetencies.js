import React from "react";
import "./CoreCompetencies.css";
import leaf from "../../Assets/images/leaf.png";
import logo from "../../Assets/logo/logo_final.svg";
import core1 from "../../Assets/images/core/core-1.png";
import core2 from "../../Assets/images/core/core-2.png";
import core3 from "../../Assets/images/core/core-3.png";
import core4 from "../../Assets/images/core/core-4.png";
import core5 from "../../Assets/images/core/core-5.png";
import core6 from "../../Assets/images/core/core-6.png";

const CoreCompetencies = () => {
  return (
    <div className="core-competencies">
      <div className="container">
        <div className="core-competencies-title">
          <p>what we do</p>
          <h3>Our Core Competencies</h3>
          <div>
            <img src={leaf} alt="leaf" />
          </div>
        </div>
        <div className="grid">
          <div className="Competency">
            <div className="core-text">
              <h3>Integrity</h3>
              <p>We work honestly, ethically and honorably.</p>
            </div>
            <div className="core-img">
              <img src={core2} />
            </div>
          </div>
          <div className="span-row-3 Competency">
            <img src={logo} alt="gelila logo" />
          </div>
          <div className="Competency">
            <div className="core-img">
              <img src={core2} />
            </div>
            <div className="core-text">
              <h3>Integrity</h3>
              <p>We work honestly, ethically and honorably.</p>
            </div>
          </div>
          <div className="Competency">
            <div className="core-text">
              <h3>Integrity</h3>
              <p>We work honestly, ethically and honorably.</p>
            </div>
            <div className="core-img">
              <img src={core2} />
            </div>
          </div>
          <div className="Competency">
            <div className="core-img">
              <img src={core2} />
            </div>
            <div className="core-text">
              <h3>Integrity</h3>
              <p>We work honestly, ethically and honorably.</p>
            </div>
          </div>
          <div className="Competency">
            <div className="core-text">
              <h3>Integrity</h3>
              <p>We work honestly, ethically and honorably.</p>
            </div>
            <div className="core-img">
              <img src={core2} />
            </div>
          </div>
          <div className="Competency">
            <div className="core-img">
              <img src={core2} />
            </div>
            <div className="core-text">
              <h3>Integrity</h3>
              <p>We work honestly, ethically and honorably.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreCompetencies;
