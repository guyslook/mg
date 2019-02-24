import React from "react";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
import Button from "react-bootstrap/lib/Button";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
      height: "100vh"
    };
    return (
      <Jumbotron className="aaJumbotron" style={jumbotronstyles}>
        <div className="jumbotron-container">
          <div className="container">
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
            {this.props.link ? (
              <p>
                <AniLink to={this.props.link}>
                  <Button bsStyle="primary">Learn more →</Button>
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
