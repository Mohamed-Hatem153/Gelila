import React from "react";
import leaf from "../../Assets/images/leaf.png";
import { IoMdTrendingUp } from "react-icons/io";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="whychooseus">
      <div className="container">
        <div className="whychooseus-title">
          <p>we are gelila</p>
          <h3>why choose gelila.?</h3>
          <div>
            <img src={leaf} alt="leaf" />
          </div>
        </div>
        <div className="whygelila">
          <div className="whyus">
            <p>
              Gelila always ensures the maximum quality and we already consider
              international certification that support our consumers trust.
            </p>
          </div>
          <div className="whyreasons grid">
            <div className="item">
              <span className="icon">
                <IoMdTrendingUp />
              </span>
              <h6>Modern Design</h6>
              <p>
                We use latest technology for the latest world because we know
                the demand of peoples.
              </p>
            </div>

            <div>
              <div className="item">
                <span className="icon">
                  <IoMdTrendingUp />
                </span>
                <h6>Modern Design</h6>
                <p>
                  We use latest technology for the latest world because we know
                  the demand of peoples.
                </p>
              </div>
            </div>
            <div>
              <div className="item">
                <span className="icon">
                  <IoMdTrendingUp />
                </span>
                <h6>Modern Design</h6>
                <p>
                  We use latest technology for the latest world because we know
                  the demand of peoples.
                </p>
              </div>
            </div>
            <div>
              <div className="item">
                <span className="icon">
                  <IoMdTrendingUp />
                </span>
                <h6>Modern Design</h6>
                <p>
                  We use latest technology for the latest world because we know
                  the demand of peoples.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
