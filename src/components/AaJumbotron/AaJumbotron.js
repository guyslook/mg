import React from "react";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
import { Button } from "rsuite";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ScrollAnimation from "react-animate-on-scroll";

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
    };
    return (
      <Jumbotron className="aaJumbotron" style={jumbotronstyles}>
        <div className="jumbotron-container">
          <div className="container">
            {/* <ScrollAnimation animateIn="bounceInRight"> */}
              <h1>{this.props.title}</h1>
            {/* </ScrollAnimation> */}
            <p>{this.props.description}</p>
            {this.props.link ? (
              <p>
                <AniLink cover bg="#359dd9" to={this.props.link}>
                  <Button className="btn" bsStyle="primary">
                    Learn more →
                  </Button>
                </AniLink>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </Jumbotron>
    );
  }
}

export default AaJumbotron;
