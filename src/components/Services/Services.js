import React from "react";

require("./AaJumbotron.scss");

class AaJumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    var jumbotronstyles = {
      backgroundImage: `url(${this.props.featuredimage})`,
      backgroundSize: "cover",
      backgroundPosition: "bottom",
      height: "80vh"
    };
    return (
      <div className="services-links col-sm-12 hidden-xs">
        <div className="service-links-inner">
          <div className="twenty turning">
            <a href="/services/turning">Turning</a>
          </div>
          <div className="twenty milling">
            <a href="/services/milling">Milling</a>
          </div>
          <div className="twenty welding">
            <a href="/services/welding">Welding</a>
          </div>
          <div className="twenty repair">
            <a href="/services/repair-work">Repair Work</a>
          </div>
          <div className="twenty twentyone bespoke">
            <a href="/services/bespoke-parts">Bespoke parts</a>
          </div>
        </div>
      </div>
    );
  }
}

export default AaJumbotron;
