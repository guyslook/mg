import React from "react";
import turning from "../../img/turning.svg";
import milling from "../../img/milling.svg";
import welding from "../../img/welding.svg";
import repair from "../../img/repair.svg";
import bespoke from "../../img/bespoke.svg";

require("./Services.scss");

class Services extends React.Component {
  render() {
    return (
      <div className="services-links">
        <div className="service-links-inner">
          <span>Services</span>
        </div>
      </div>
    );
  }
}

export default Services;
