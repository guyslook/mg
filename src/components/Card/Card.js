import React from "react";
import Button from "react-bootstrap/lib/Button";
import AniLink from "gatsby-plugin-transition-link/AniLink";

require("./Card.scss");

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  render() {
    return (
      <div className="column">
        <div className="card">
          <img src="" />
          <div class="card-content">
            <div class="content">
              <h4>{this.props.title}</h4>
              <h5>{this.props.date}</h5>
              <p>{this.props.text}</p>
              <AniLink fade to={this.props.buttonLink}>
                <Button className="btn">More →</Button>
              </AniLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
