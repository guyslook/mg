import React from "react";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
import { Button } from "rsuite";

require("./AaNewsletter.scss");

class AaNewsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    var jumbotronstyles = {
      backgroundSize: "cover",
      backgroundPosition: "bottom",
      height: "60vh"
    };
    return (
      <Jumbotron className="AaNewsletter" style={jumbotronstyles}>
        <div className="jumbotron-container">
          <div className="container">
            <h1>Newsletter</h1>
            <p>
              To receive ongoing updates and notifications, please sign up to
              our Newsletter and we’ll make sure to keep you in the loop!
            </p>
          </div>
        </div>
      </Jumbotron>
    );
  }
}

export default AaNewsletter;
